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
      pgTitle.style.top = "0rem";
      pgChat.style.top = "11rem";
      pgTitle.style.transition = "all 0s";
      pgChat.style.transition = "all 0s";
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

  return (
    <div className="page-wrap">
      <h1 className="page-title-rooms">Dev Chat</h1>
      <div className="chat-wrap">
        <ul className="rooms-list">
          <li>
            <a id="geral" href="/rooms/geral">
              Geral
            </a>
          </li>
          <li>
            <a id="front-end" href="/rooms/front-end">
              Front End
            </a>
          </li>
          <li>
            <a id="back-end" href="/rooms/back-end">
              Back End
            </a>
          </li>
        </ul>
        <div className="chat-box">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
