import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginateLink}) {

    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++)
    {
        pageNumbers.push(i);
    }
  return (
    <nav>

        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={()=> paginateLink(number)} href="!#" className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
      
    </nav>
  )
}
