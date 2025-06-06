// import React, { useState } from "react";

import MyButton from "./UI/button/MyButton";

const PostItem = ({ post, remove }) => {
  const { id, title, body } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
