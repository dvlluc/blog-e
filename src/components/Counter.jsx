import { useState } from "react";

const Counter = () => {
  const [likes, setLikes] = useState(0);
  const inc = (val) => {
    setLikes(likes + val);
  };

  return (
    <div className="App">
      <h1>{likes}</h1>
      <button onClick={() => inc(+1)}>inc</button>
      <button onClick={() => inc(-1)}>dec</button>
    </div>
  );
};

export default Counter;
