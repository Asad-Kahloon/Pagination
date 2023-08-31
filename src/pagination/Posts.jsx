import React from 'react'

export default function Posts({ posts , loading }) {

    if(loading){
        return <h2>Loading...</h2>
    }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post=>(
        <li className='border mt-3 p-3'
         key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
