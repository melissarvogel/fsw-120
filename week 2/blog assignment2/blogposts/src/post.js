import React from "react";

function Post(props) {
    return(<div><h1>
        {props.Title}</h1> 
        <h2>{props.SubTitle} </h2>
        <h3>{props.Author}</h3> 
        <h4>{props.Date} </h4>
            </div>)
}

export default Post;
