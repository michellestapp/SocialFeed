const Post = (props) => {
    return (
        <div>
            {props.parentPosts.map((post) =>{
                return(
            <div>{post.name} <br></br>{post.post}</div>
           )
        })}

        </div>
    )
}

export default Post;