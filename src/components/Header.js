import React from 'react';
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/header__logo.svg";

function Header({ userEmail, loggedIn, onSignOut }) {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <img src={headerLogo} className="header__logo" alt="Место" />
        {location.location === "/sign-up" && (
          <Link className="header__button" to={"/sign-in"}>
            Войти
          </Link>
        )}
        {location.location === "/sign-in" && (
          <Link className="header__button" to={"/sign-up"}>
            Регистрация
          </Link>
        )}
        {loggedIn && (
          <nav className="header__nav">
            <span>{userEmail}</span>
            <button className="header__sign-out" onClick={() => onSignOut()}>
              Выйти
            </button>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
