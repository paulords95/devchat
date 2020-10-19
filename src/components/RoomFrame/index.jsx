import React from "react";

import "./index.css";

const RoomFrame = (props) => {
  return (
    <div className="container">
      <h1 className="room-name">{props.roomName}</h1>
      <form className="new-message">
        <input
          type="text"
          className="send-message"
          placeholder="Enviar uma mensagem..."
        ></input>
        <input type="submit" className="send-message-btn"></input>
      </form>
    </div>
  );
};

export default RoomFrame;
