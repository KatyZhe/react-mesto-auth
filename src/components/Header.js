import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/header__logo.svg";

const Header = ({ loggedIn, userEmail, onSignOut }) => {
  const location = useLocation();
  return (
    <header className="header">
      <img src={headerLogo} className="header__logo" alt="Место" />
      {location.pathname === "/sign-in" && (
        <Link to="/sign-up" className="header__login">
          Регистрация
        </Link>
      )}
      {location.pathname === "/sign-up" && (
        <Link to="/sign-in" className="header__login">
          Войти
        </Link>
      )}
      {loggedIn && (
        <nav className="header__nav">
          <span>{userEmail}</span>
          <button className="header__login" onClick={() => onSignOut()}>
            Выйти
          </button>
        </nav>
      )}
    </header>
  );
};
export default Header;
