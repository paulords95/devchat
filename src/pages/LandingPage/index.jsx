import React, { useState } from "react";

import "./index.css";

import landing from "../../assets/landing.svg";
import joinIcon from "../../assets/join.svg";

const LandingPage = () => {
  const [name, setName] = useState(true);

  const UserJoin = () => {
    if (name) {
      return (
        <form action="/rooms" className="user-name">
          <div>
            <input
              type="text"
              placeholder="Nome"
              name="usuario"
              maxLength="8"
              minLength="3"
              required
            />
            <button type="submit" id="submit">
              <img src={joinIcon} alt="Entrar" className="join-icon" />
            </button>
          </div>
        </form>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <div className="page-wrap">
      <h1 className="page-title">Dev Chat</h1>
      <UserJoin />
      <a
        href="/user"
        onClick={(e) => {
          document.querySelector(".room-btn").style.opacity = "0";
          document.querySelector(".user-name > div > input").style.opacity =
            "1";
          document.querySelector(".user-name > div > input").focus();
          document.querySelector(".room-btn").style.zIndex = "-1";
          e.preventDefault();
          setName(true);
        }}
        className="room-btn"
      >
        Entrar em uma sala
      </a>
      <img src={landing} className="landing-img" alt="Chat Online"></img>
    </div>
  );
};

export default LandingPage;
