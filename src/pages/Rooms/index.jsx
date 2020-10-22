import React, { useEffect } from "react";

import "./index.css";
import Routes from "./routes";

const Rooms = () => {
  useEffect(() => {
    const pgTitle = document.querySelector(".page-title-rooms");
    const pgChat = document.querySelector(".chat-wrap");

    if (window.location.pathname === "/rooms") {
      pgTitle.style.top = "0rem";
      pgChat.style.top = "11rem";
    } else {
      pgTitle.style.transition = "all 0s";
      pgChat.style.transition = "all 0s";
      pgTitle.style.top = "0rem";
      pgChat.style.top = "11rem";
    }

    if (window.location.pathname === "/rooms/geral") {
      document.querySelector("#geral").style.backgroundColor = "#c4c4c444";
      document.querySelector("#geral").style.borderRadius = "6px 0px 0px 6px";
    }
    if (window.location.pathname === "/rooms/front-end") {
      document.querySelector("#front-end").style.backgroundColor = "#c4c4c444";
      document.querySelector("#front-end").style.borderRadius =
        "6px 0px 0px 6px";
    }
    if (window.location.pathname === "/rooms/back-end") {
      document.querySelector("#back-end").style.backgroundColor = "#c4c4c444";
      document.querySelector("#back-end").style.borderRadius =
        "6px 0px 0px 6px";
    }
  }, []);

  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("usuario");
  const welcomeUser = () => {
    if (window.location.pathname === "/rooms") {
      return (
        <div className="welcome-screen">
          <h3 className="welcome-user">
            Bem vindo, {param}! Escolha uma sala ao lado.
          </h3>
        </div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="page-wrap">
      <h1 className="page-title-rooms">Dev Chat</h1>
      <div className="chat-wrap">
        <ul className="rooms-list">
          <li>
            <a id="geral" href={"/rooms/geral" + window.location.search}>
              Geral
            </a>
          </li>
          <li>
            <a
              id="front-end"
              href={"/rooms/front-end" + window.location.search}
            >
              Front End
            </a>
          </li>
          <li>
            <a id="back-end" href={"/rooms/back-end" + window.location.search}>
              Back End
            </a>
          </li>
        </ul>
        <div className="chat-box">
          <Routes />
          {welcomeUser()}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
