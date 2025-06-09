import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = ({ post, remove }) => {
  const navigate = useNavigate();

  const { id, title, body } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => navigate(`${post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
