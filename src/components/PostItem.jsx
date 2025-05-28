// import React, { useState } from "react";

const PostItem = ({post, number }) => {
  const {title, body } = post;
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post_btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
