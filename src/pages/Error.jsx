import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ color: "red" }}>Страница не существует</h1>
      <MyButton style={{ marginTop: "10px" }} onClick={() => navigate(-1)}>
        Вернуться на предыдущую страницу
      </MyButton>
      <MyButton style={{ marginTop: "10px" }} onClick={() => navigate("/posts")}>
        Вернуться на главную
      </MyButton>
    </div>
  );
};

export default Error;
