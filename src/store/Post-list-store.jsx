import { createContext, useReducer } from "react";

export const Postlist_contxt =createContext({});

const postlistreducer = (currentpostlist,action) => {
    let newpostlist = currentpostlist;
    if (action.type === "DELETE_POST"){
        newpostlist = currentpostlist.filter((post) => post.id !== action.payload.postId)
    }
    else if (action.type == "ADD_POST"){
        newpostlist = [action.payload,...currentpostlist]
    }
    else if (action.type == "ADD_API_POST"){
        newpostlist = action.payload.posts
    }
    return newpostlist;
}

const postlistprovider = ({ children }) => {
    
    const [postlist, dispatchpostlist] = useReducer(postlistreducer,default_post_list)
    
    const addpost = (Userid,Title,Description,Reactions,Hashtags) => {
        dispatchpostlist({
            type:"ADD_POST",
            payload: {
                id: Date.now(),
                userId: Userid,
                title: Title,
                body: Description,
                reactions: Reactions,
                tags: Hashtags,
            }
        })
    }

    const deletepost = (postId) => {
        dispatchpostlist({
            type:"DELETE_POST",
            payload: {postId},
        })
    }

    const addapipost = (posts) => {
        dispatchpostlist({
            type:"ADD_API_POST",
            payload: {posts},
        })
    }

    return <Postlist_contxt.Provider value={{postlist,addpost,deletepost,addapipost}}>
        {children}
    </Postlist_contxt.Provider>
}

const default_post_list = [
    {
        id:1,
        title:"Hello User🫡",
        body:"Master Lalit has ingeniously crafted a groundbreaking Social Media Platform with the power of ReactJs and various other cutting-edge technologies. On this dynamic platform, users can unleash their creativity by adding fresh and innovative posts while seamlessly exploring the entire platform.",
        reactions:388,
        userId:"user-1",
        tags:["Exploration","Cutting-Edge Technology","Creativity","Dynamic Platform"],
    }
]

export default postlistprovider;