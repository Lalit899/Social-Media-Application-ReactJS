import React, { useContext, useState } from 'react'
import Posts from './Posts'
import { Postlist_contxt } from '../store/Post-list-store'
import NoPosts from './NoPosts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img1 from '../assets/delete.png'

function PostList() {

//  useEffect(() => {
//   const {signal} = new AbortController()
//   fetch('https://dummyjson.com/posts',{signal})
//   .then(res => res.json())
//   .then(obj=> postlistdata.addapipost(obj.posts))
//   console.log("timer")
 
//    return () => {
//     new AbortController().abort()
//      console.log("cleared.")
//    }
//  }, [])
 
  const fetchposts = () => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(obj=> postlistdata.addapipost(obj.posts))
  }
  const postlistdata = useContext(Postlist_contxt)

  const notify = () => {
    toast.error(`Post Deleting...`, {
        icon: <img src={img1} className='w-14 ml-4' />,
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

const [ID, setID] = useState()
  const handledelete = () => {
    notify() 
    setTimeout(() => {
      postlistdata.deletepost(ID);
    }, 2500);
};

  return (
    <>
    <ToastContainer />
    {postlistdata.postlist.length == 0 && <NoPosts dummyposts={fetchposts}/>}
    {postlistdata.postlist.map((post) => <Posts key={post.id} post_data={post} handleDelete={handledelete} post_Id={setID} />)}
    </>
  )
}

export default PostList