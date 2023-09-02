import React from 'react'

export default function Posts({ posts , load }) {

    if(load){
        return <h2>Loading...</h2>
    }

  return (
    <ul className='ul'>
      {posts.map(post=>(
        <li className='list'
         key={post.id}>
            <h3> {post.id} {post.title}</h3>
            <p>{post.body}</p>
        </li>
      ))}
    </ul>
  )
}
