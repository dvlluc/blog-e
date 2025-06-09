import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const login = (e) => {
    e.preventDefault();
    logIn();
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Вход</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Логин" />
        <MyInput type="password" placeholder="Пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
