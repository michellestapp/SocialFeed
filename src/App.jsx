import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import PostForm from "./Components/PostForm/PostForm";
import './app.css'
import Post from "./Components/Post/Post";

function App() {

  const [posts, setPosts] = useState([{name:'',post:''}])

  function addNewPost(post){
    let tempPosts=[post,...posts]
    setPosts(tempPosts);
  
  }
  return (
    <div>
      <NavBar />
      <PostForm addNewPost={addNewPost}/>
      <Post parentPosts = {posts}/>
    </div>
  );
}

export default App;
