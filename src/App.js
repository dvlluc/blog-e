import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import { mockPosts } from "./mock";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([...mockPosts]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedPosts = useMemo(() => {
    return filter.sort
      ? [...posts].sort((post1, post2) =>
          post1[filter.sort].localeCompare(post2[filter.sort])
        )
      : posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Список постов"
      />
    </div>
  );
};

export default App;
