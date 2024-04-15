import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from './components/Sidebar'
import CreatePosts from './components/CreatePosts'
import PostLists from './components/PostList'
import { useState } from 'react'
import Postlistprovider from './store/Post-list-store'

function App() {  
  const [selectedTab, setselectedTab] = useState("Dashboard")
  return (
    <>
    <Postlistprovider>
    <div className='flex h-full'>
    <Sidebar selected={selectedTab} setselected={setselectedTab} />
    <div className='flex flex-col w-full'>
    <Header/>
    <center>
    {selectedTab == "Dashboard" && <PostLists/> }
    {selectedTab == "CreatePosts" && <CreatePosts/> }
    </center>
    <Footer/>  
    </div>
    </div>
    </Postlistprovider>
    </>
  )
}

export default App
