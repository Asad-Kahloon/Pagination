import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Posts from './pagination/Posts';
import Pagination from './pagination/Pagination';
import './App.css'

export default function App() {

  const [posts , setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [noOfPosts,setNoOfPosts] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(noOfPosts);

  useEffect(()=>{
    const fetchPosts = async () =>{
      setLoad(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoad(false);
    }
    fetchPosts();
  },[]);

  const handleNoOfPosts = (e)=>{
    e.preventDefault();

    setPostsPerPage(noOfPosts);
  }

  
  const indexOfLastPost = currentPage - postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  
  const paginateLink = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className='App'>
      <h1 className='heading'>Free JSON Api</h1>
      <form onSubmit={handleNoOfPosts}>
      <input 
      type='number'
      value={noOfPosts}
      placeholder='Enter How much posts you want on your single page...'
      onChange={(e)=>setNoOfPosts(e.target.value)}
      />
      <button type='submit'>Submit</button>
      </form>
        <Posts posts={currentPosts} loading={load} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginateLink={paginateLink} />
    </div>
  )
}
