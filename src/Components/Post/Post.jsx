import React, { useState } from "react";
import './Post.css'

//const [name,setName]= useState('');

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "/assets/thumbs-up-bw"){
        document.getElementById("imgClickAndChange").src = "/assets/thumbs-up green";
    } else {
        document.getElementById("imgClickAndChange").src = "/assets/thumbs-up-bw";
    }}

const Post = (props) => {

    const [likeImage, setLikeImage] = useState("/assets/thumbs-up-bw.png");
    const [dislikeImage, setDislikeImage] = useState("/assets/thumbs-down-bw.png");

    function handleLike(){
        if (likeImage === "/assets/thumbs-up-bw.png"){
        setLikeImage("/assets/thumbs-up green.png");}
        else {
        setLikeImage("/assets/thumbs-up-bw.png");}
        
    }

    function handleDislike(){
        if (dislikeImage === "/assets/thumbs-down-bw.png"){
            setDislikeImage("/assets/thumbs-down red.png");}
            else {
            setDislikeImage("/assets/thumbs-down-bw.png");} 
    }

    return (
    
    <div>
        
        <div className="post-format">
            <div>
                <h2>{props.name}</h2><br></br>
                <h3>{props.post}</h3>
            </div>
            <div>
         
                <img className="thumbs" src={likeImage} alt="thumbs-up green" id="imgClickAndChange" onClick={handleLike}/>
                <img className="thumbs" src={dislikeImage} alt="thumbs-down-red" id="imgClickAndChange" onClick={handleDislike}/>
            </div>
        </div>
        <hr className="border-line-long" />
        
      
    </div>
    )
    
}
export default Post;