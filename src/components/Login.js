import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.js";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    onLogin(formValue);
  };

  const onTransferRegister = () => {
    navigate("/sing-up", { replace: true });
  };

  return (
    <>
      <Header title="Регистрация" onClick={onTransferRegister} isOpen={false} />
      <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Вход</h1>

        <input
          id="password"
          name="email"
          className="login__input"
          type="email"
          required
          placeholder="email"
          value={formValue.email || ""}
          onChange={handleChange}
        />
        <input
          id="password"
          name="password"
          className="login__input"
          type="password"
          required
          placeholder="password"
          value={formValue.password || ""}
          onChange={handleChange}
        />
        <button className="popup__button">Войти</button>
      </form>
      </div>
    </>
  );
};

export default Login;
