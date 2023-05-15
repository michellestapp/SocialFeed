import React, { useState } from "react";
import './PostForm.css'

const PostForm = (props) => {
    const [name,setName]= useState('');
    const [post,setPost] = useState('');

    function handleSubmit(event){
      event.preventDefault();
      let newPost = {
        name: name,
        post: post
      };
      props.addNewPost(newPost)
      console.log(newPost)
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block-background">
        <div className="form-input">
          <div className="name-post">
            <span>Name</span>
            <input type='text' value={name} onChange={(event => setName(event.target.value))}/>
          </div>
          <div className="name-post">
            <span>Post</span>
            <textarea rows="2" value={post} onChange={(event => setPost(event.target.value))}></textarea>
          </div>
        </div>
        <div>
        <button className="button-design" type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
