import React from 'react'
import { TiDelete } from "react-icons/ti";

function Posts({ post_data, handleDelete, post_Id }) {
    const Post = post_data
 const handle_event=()=>{
    post_Id(Post.id)
 }
    
    return (
        <>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-10">
                <button className="absolute ms-44 -my-3 bg-red-600 text-red-100 p-1 text-xl rounded-full hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 " onClick={handleDelete} onMouseOver={handle_event}><TiDelete /></button>
                <div className="p-5">
                    <a href="#">
                        <h5 className="flex flex-row justify-between items-center text-left text-2xl font-semibold text-gray-900 dark:text-white">{Post.title}<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{Post.reactions}</span></h5>
                    </a>
                    <div className="text-left text-base">
                        <p className="break-words text-l w-full bg-transparent my-2 overflow-hidden text-gray-900 dark:text-white">{Post.body}</p> <br/>
                        <div className='flex flex-wrap items-center'>
                            {Post.tags.map((hashtag) => (<a href="#" key={hashtag} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg mx-1 my-1 text-sm p-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{hashtag}</a>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Posts
