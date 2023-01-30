import { db } from "@/firebase";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";

export default function Post({ id, userImg, username, caption, img }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db, id]);
  async function sendComment(event) {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }
  return (
    <div className=" bg-white my-7 border rounded-md">
      {/* post header */}
      <div className=" flex items-center p-5 ">
        <img
          className=" h-12 rounded-full object-cover border p-1  mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className=" h-5" />
      </div>
      {/* post image */}
      <img className=" object-cover w-full" src={img} alt={username} />

      {/* post buttons */}
      {session && (
        <div className=" flex justify-between px-4 pt-4 ">
          <div className=" flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <div>
            <BookmarkIcon className="btn" />
          </div>
        </div>
      )}
      {/* post comments */}
      <p className=" p-5 truncate">
        <span className=" font-bold mr-2">{username}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <div className=" mx-10 max-h-24 overflow-y-scroll  scrollbar-none">
          {comments.map((comment) => (
            <div className=" flex items-center space-x-2 mb-2 ">
              <img
                className=" h-7 rounded-full object-cover "
                src={comment.data().userImage}
                alt={comment.data().username}
              />
              <p className=" font-semibold ">{comment.data().username}</p>
              <p className="flex-1 truncate">{comment.data().comment}</p>
              <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
            </div>
          ))}
        </div>
      )}
      {/* post input box */}
      {session && (
        <form className=" flex items-center p-4">
          <EmojiHappyIcon className=" h-7" />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            className=" border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter Your Comments"
          />
          <button
            type="submit"
            onClick={sendComment}
            disabled={!comment.trim()}
            className=" text-blue-400 font-bold disabled:text-blue-200"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}
