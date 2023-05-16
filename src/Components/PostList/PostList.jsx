import Post from "../Post/Post";
import React from "react";

const PostList = (props) => {
    return (
        <div>
          
            {props.parentPosts.map((post) =>{
                return(
                    <div>
                    <Post name={post.name} post={post.post}/>
                    </div>
                    
            
           )
        })}


        </div>
    )
}

export default PostList;