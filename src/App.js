import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Title 1", body: "Description 1" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title="Список постов" />
    </div>
  );
};

export default App;
