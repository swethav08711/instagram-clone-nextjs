import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id:"1",
            username:"shwe08711",
            userImg :"https://media.licdn.com/dms/image/C5603AQHiMXhE7rjG3w/profile-displayphoto-shrink_800_800/0/1639831458203?e=2147483647&v=beta&t=K0NdNkIl3YXikzvTJjSamcFoaT-aAaZD06As5EXspo4",
            img: "https://images.unsplash.com/photo-1674316613515-b0564fc1e0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80",
            caption:"nice day"
        },
        {
            id:"2",
            username:"kusdhifug",
            userImg :"https://media.licdn.com/dms/image/C5603AQHiMXhE7rjG3w/profile-displayphoto-shrink_800_800/0/1639831458203?e=2147483647&v=beta&t=K0NdNkIl3YXikzvTJjSamcFoaT-aAaZD06As5EXspo4",
            img: "https://images.unsplash.com/photo-1674368777653-bc2bca1c30c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=980&q=80",
            caption:"Feeling Awesome"
        }
       
    ]
    return (
    <div>
        {
            posts.map(post=>(
                <Post key={post.id} post={post}/>
            ))
        }
    </div>
  )
}
