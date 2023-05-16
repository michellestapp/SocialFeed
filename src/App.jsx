import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import PostForm from "./Components/PostForm/PostForm";
import './app.css'
import PostList from "./Components/PostList/PostList";

function App() {

  const [posts, setPosts] = useState([{name:'Michelle Stapp',post:'This is the most awesome forum...ever!'}])

  function addNewPost(post){
    let tempPosts=[post,...posts]
    setPosts(tempPosts);
  
  }
  return (
    <div>
      <NavBar />
      <PostForm addNewPost={addNewPost}/>
      <PostList parentPosts = {posts}/>
    </div>
  );
}

export default App;
