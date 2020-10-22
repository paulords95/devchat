import React from "react";
import { useEffect } from "react";

import "./index.css";

const RoomFrame = (props) => {
  useEffect(() => {
    document.querySelector(".container").style.left = "0";
  }, []);

  return (
    <div className="container">
      <h1 className="room-name">{props.roomName}</h1>
      <div className="messages-container">{props.messages}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="new-message"
      >
        <input
          type="text"
          className="send-message"
          placeholder="Enviar uma mensagem..."
        ></input>
        <input
          onSubmit={(e) => {
            e.preventDefault();
          }}
          type="submit"
          className="send-message-btn"
        ></input>
      </form>
    </div>
  );
};

export default RoomFrame;
