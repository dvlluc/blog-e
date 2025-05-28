// import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem number={index+1} post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
