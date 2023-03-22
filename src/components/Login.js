import useFormValidation from "./useFormValidation.js";

const Login = ({ onLogin }) => {
  const { enteredValues, errors, handleChange } = useFormValidation({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!enteredValues.email || !enteredValues.password) {
      return;
    }
    onLogin(enteredValues);
  };

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="email"
          value={enteredValues.email || ""}
          onChange={handleChange}
          required
        />
        <span className="auth__error">{errors.email}</span>
        <input
          className="login__input"
          type="password"
          minLength="8"
          name="password"
          id="password"
          placeholder="Пароль"
          autoComplete="password"
          value={enteredValues.password || ""}
          onChange={handleChange}
          required
        />
        <span className="auth__error">{errors.password}</span>
        <button type="submit">Войти</button>
        <span className="auth__login-hint"></span>
      </form>
    </div>
  );
};

export default Login;
