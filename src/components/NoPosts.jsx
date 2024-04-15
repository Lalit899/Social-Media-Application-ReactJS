import React from 'react'

function NoPosts({ dummyposts }) {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-full h-screen'>
    <h1 className='text-3xl font-bold text-center text-gray-600'>There are no posts uploaded yet!!</h1><br/>
    <button onClick={dummyposts} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 mb-36 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Sample posts</button>
    </div>
    </>
  )
}

export default NoPosts