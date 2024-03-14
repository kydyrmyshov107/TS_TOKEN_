import { useState } from "react";
import scss from "./Register.module.scss";
import {
  useGetRequestQuery,
  usePostRequestMutation,
} from "../../../redux/api/request";
import { useNavigate } from "react-router";

const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, isLoading } = useGetRequestQuery();
  const [createPost] = usePostRequestMutation();
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (userName === "" || email === "" || password === "") {
      alert("write something");
    } else {
      const newItem = {
        userName: userName,
        email: email,
        password: password,
      };
      await createPost(newItem);
      console.log(newItem);

      navigate("/login");
    }
    setEmail("");
    setPassword("");
    setUserName("");
  };

  console.log(data);
  console.log(isLoading);

  return (
    <div className={scss.Register}>
      <div className="container">
        <div className={scss.firstImg}>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-6333618-5230178.png?f=webp"
            alt=""
          />
        </div>
        <div className={scss.section}>
          <div className={scss.box}>
            <p>Регистрация аккаунта</p>
            <input
              type="text"
              placeholder="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAdd}>Продолжить</button>
            <span>или</span>
            <a href="/login">Уже есть аккаунт ? Войти</a>
          </div>
        </div>
      </div>
      <div className={scss.secondImg}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/user-id-6333552-5230112.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Registration;
