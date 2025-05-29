import { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "t 1", body: "d 1" },
    { id: 2, title: "t 2", body: "d 2" },
    { id: 3, title: "t 3", body: "d 3" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedPosts = useMemo(() => {
    console.log("Сортировка");
    return selectedSort
      ? [...posts].sort((post1, post2) =>
          post1[selectedSort].localeCompare(post2[selectedSort])
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    console.log("Поиск");
    return [...sortedPosts].filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const searchPosts = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={searchQuery}
        placeholder="поиск"
        onChange={(e) => searchPosts(e.target.value)}
      />
      <hr style={{ margin: "15px 0" }} />
      <div style={{ textAlign: "right" }}>
        <MySelect
          value={selectedSort}
          defaultValue="Сортировка по: "
          options={[
            { value: "title", text: "названию" },
            { value: "body", text: "описанию" },
          ]}
          onChange={(sort) => sortPosts(sort)}
        />
      </div>
      {sortedAndSearchedPosts.length ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов"
        />
      ) : (
        <h1 style={{ textAlign: "center" }}> Постов нет</h1>
      )}
    </div>
  );
};

export default App;
