import React from "react";
import { useEffect } from "react";
// import socketIOClient from "socket.io-client";

import "./index.css";

const RoomFrame = (props) => {
  // const ENDPOINT = "http://127.0.0.1:5000";
  useEffect(() => {
    document.querySelector(".container").style.left = "0";

    //const socket = socketIOClient(ENDPOINT);
  });

  return (
    <div className="container">
      <h1 className="room-name">{props.roomName}</h1>
      <div className="messages-container">{props.messages}</div>
      <div className="messages-container">{props.logs}</div>
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
