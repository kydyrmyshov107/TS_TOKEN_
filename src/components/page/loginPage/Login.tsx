/* eslint-disable */
//@ts-nocheck
import { useState } from "react";
import scss from "./Login.module.scss";
import { usePostLoginRequestMutation } from "../../../redux/api/request";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginPost] = usePostLoginRequestMutation();
  const navigate = useNavigate();
  const notifyError = () => toast.error("Заполните все поля!");

  const handleAddUser = async () => {
    if (email === "" || password === "") {
      notifyError();
      return null;
    } else {
      const newList = {
        email: email,
        password: password,
      };
      const response = await loginPost(newList);
      const responseData = response.data;
      localStorage.setItem("token", responseData.token);
    }
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={scss.Login}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.form}>
            <img
              src="https://png.pngtree.com/png-clipart/20230814/original/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-picture-image_7926965.png"
              alt=""
            />
            <p> Вход Login</p>
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAddUser}>Войти</button>
            <a href="/register">Зарегистрировать аккаунт</a>
          </div>
        </div>
        {/* img */}
        <div className={scss.OneImg}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png?f=webp"
            alt=""
          />
        </div>
        {/* 2 */}
        <div className={scss.TwoImg}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-content-6333597-5230157.png?f=webp"
            alt=""
          />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
