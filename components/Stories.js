import React from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useEffect, useState } from "react";
import Story from './Story';
export default function Stories() {
    const [storyUsers,setStoryUsers] = useState([])
    useEffect(()=>{
            const storyUsers = minifaker.array(20,(i)=>(
                {
                    username:minifaker.username({locale:"en"}).toLowerCase(),
                    img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                    id:i
                }
            ))
            setStoryUsers(storyUsers)
            console.log(storyUsers);
    },[])
  return (
    <div>{
        storyUsers.map(user=>(
            <Story key={user.id} story={user}/>
        ))
    }</div>
  )
}
