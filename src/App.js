import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { mockPosts } from "./mock";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([...mockPosts]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
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
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
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
