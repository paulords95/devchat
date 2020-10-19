import React, { useEffect } from "react";

import "./index.css";
import Routes from "./routes";

const Rooms = () => {
  useEffect(() => {
    document.querySelector(".page-title-rooms").style.top = "0rem";
    document.querySelector(".chat-wrap").style.top = "11rem";
  }, []);
  return (
    <div className="page-wrap">
      <h1 className="page-title-rooms">Dev Chat</h1>
      <div className="chat-wrap">
        <ul className="rooms-list">
          <li>
            <a href="/rooms/geral">Geral</a>
          </li>
          <li>
            <a href="/rooms/front-end">Front End</a>
          </li>
          <li>
            <a href="/rooms/back-end">Back End</a>
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
