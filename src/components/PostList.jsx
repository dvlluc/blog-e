import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Постов нет</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
            nodeRef={post.nodeRef}
          >
            <PostItem number={index + 1} post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
