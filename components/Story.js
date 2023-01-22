import React from 'react'

export default function Story({story}) {
  return (
    <div>
        <img src={story.img} alt={story.username}/>
        <p>{story.username}</p>
    </div>
  )
}
