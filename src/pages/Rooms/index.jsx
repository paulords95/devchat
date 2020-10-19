import React, { useEffect } from "react";

import "./index.css";
import Routes from "./routes";

const Rooms = () => {
  useEffect(() => {
    document.querySelector(".page-title-rooms").style.top = "0rem";
    document.querySelector(".chat-wrap").style.top = "11rem";
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
