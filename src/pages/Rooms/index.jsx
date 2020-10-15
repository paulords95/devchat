import React, { useEffect } from "react";

import "./index.css";

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
          <li>Geral</li>
          <li>Front End</li>
          <li>Back End</li>
        </ul>
        <div className="chat-box"></div>
      </div>
    </div>
  );
};

export default Rooms;
