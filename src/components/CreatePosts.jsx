import React, { useContext, useRef } from 'react'
import { Postlist_contxt } from '../store/Post-list-store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function CreatePosts() {
    const notify = () => {if((userid.current.value,title.current.value, description.current.value, reactions.current.value, hashtags.current.value) !== "" ){toast.success('Post upload successfull', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });}}

    const post_data_create = useContext(Postlist_contxt)

    const userid = useRef()
    const title = useRef()
    const description = useRef()
    const reactions = useRef()
    const hashtags = useRef()

    const handlesubmit = (e) => {
        e.preventDefault();

        const Userid = userid.current.value
        const Title = title.current.value
        const Description = description.current.value
        const Reactions = reactions.current.value
        const Hashtags = hashtags.current.value.split(",")

        userid.current.value = ""
        title.current.value = ""
        description.current.value = ""
        reactions.current.value = ""
        hashtags.current.value = ""


        post_data_create.addpost(Userid,Title,Description,Reactions,Hashtags);
    }
    
  return (
    <>
<div className="w-full max-w-sm m-10 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-5 md:p-4 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-3.5" onSubmit={handlesubmit}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Create Post</h5>
        <div>
            <label htmlFor="uid" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">User ID</label>
            <input type="text" ref={userid} name="uid" id="uid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="XYZ&123" required />
        </div>
        <div>
            <label htmlFor="title" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" ref={title} name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="How are you feeling today...😀" required />
        </div>
        <div>
            <label htmlFor="description" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <textarea rows={3} type="text" ref={description} name="description" id="description" placeholder="Tell us more about it..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label htmlFor="reactions" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Reactions</label>
            <input type="number" ref={reactions} name="reactions" id="reactions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="0" required />
        </div>
        <div>
            <label htmlFor="hashtags" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">Hashtags</label>
            <input type="text" ref={hashtags} name="hashtags" id="hashtags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Amazingapp, Year2024" required />
        </div>
        <button type="submit" onClick={notify} className="w-1/2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">POST</button>
    </form>
    <ToastContainer />
</div>
    </>
  )
}

export default CreatePosts