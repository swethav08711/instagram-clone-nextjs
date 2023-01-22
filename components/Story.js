import React from 'react'

export default function Story({story}) {
  return (
    <div >
        <img className='h-14 rounded-full  p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transit duration-200 ease-out' src={story.img} alt={story.username}/>
        <p className=' text-xs w-14 truncate'>{story.username}</p>
    </div>
  )
}
