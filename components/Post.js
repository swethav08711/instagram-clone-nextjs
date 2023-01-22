import { DotsHorizontalIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Post({post}) {
  return (
    <div className=' bg-white my-7 border rounded-md'>
       {/* post header */}
        <div className=' flex items-center p-5 '>
            <img className=' h-12 rounded-full object-cover border p-1  mr-3' src={post.userImg} alt={post.username}/>
            <p className='font-bold flex-1'>{post.username}</p>
            <DotsHorizontalIcon className=' h-5'/>
        </div>
        {/* post image */}
        <img className=' object-cover w-full' src={post.img} alt={post.username}/>
    </div>
  )
}
