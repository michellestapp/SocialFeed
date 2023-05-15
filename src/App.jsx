import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import PostForm from "./Components/PostForm/PostForm";
import './app.css'
import Post from "./Components/Post/Post";

function App() {

  const [posts, setPosts] = useState([{name:'',post:''}])

  function addNewPost(post){
    let tempPosts=[...posts,post]
    setPosts(tempPosts);
  
  }
  return (
    <div>
      <NavBar />
      <PostForm addNewPost={addNewPost}/>
    </div>
  );
}

export default App;
