import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../api/postService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const params = useParams();

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const { data } = await PostService.getById(id);
    setPost(data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const { data } = await PostService.getCommentsByPostId(id);
    setComments(data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Пост: {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h5 style={{ color: "red" }}>Ошибка загрузки поста {params.id}</h5>
      ) : (
        <div>
          <h5>{`${post.id}: ${post.title}`}</h5>
          <p>{post.body}</p>
        </div>
      )}
      <h1 style={{ textAlign: "center" }}>Комментарии</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : commentsError ? (
        <h5 style={{ color: "red" }}>Ошибка загрузки комментариев</h5>
      ) : (
        <div>
          {comments.map((comm) => (
            <div style={{ marginTop: "15px" }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
