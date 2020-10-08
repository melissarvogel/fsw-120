import React from "react"

import blogPosts from "./blogPostData";

import Post from "./post"

console.log("blogposts", blogPosts)

function App(){
    const posts = blogPosts.map((post, index )=> 
    <Post key ={index} Title = {post.title} SubTitle = {post.subTitle} 
        Author = {post.author} Date = {post.date} />
        )

    // const posts = blogPosts.map(post => {
    //     console.log(post)
    //     return(<div><h1>
    //     {post.title}</h1> 
    //     <h2>{post.subTitle} </h2>
    //     <h3>{post.author}</h3> 
    //     <h4>{post.date} </h4>
    //         </div>)}
    //         )

        return(
            <div>
                {posts}
            </div>
        )
}



export default App