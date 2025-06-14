import { createRef, useEffect, useRef, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import "../styles/App.css";
import PostService from "../api/postService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";
import { ELEMENTS_PER_PAGE } from "../constants";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    const { data, headers } = response;
    setPosts([...posts, ...data].map((e) => ({ ...e, nodeRef: createRef(null) })));
    const totalCount = headers[`x-total-count`];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((el) => el.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
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
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во ел-в на странице"
        options={ELEMENTS_PER_PAGE}
      />
      {postError && <h1 style={{ textAlign: "center", color: "red" }}>{postError}</h1>}
      {isPostsLoading && <Loader size="large" />}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты" />
      <div ref={lastElement} />
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};

export default Posts;
