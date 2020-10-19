import React from "react";
import MessageCard from "../MessageCard";

import "./index.css";

const RoomFrame = (props) => {
  return (
    <div className="container">
      <h1 className="room-name">{props.roomName}</h1>
      <div className="messages-container">
        <MessageCard message="Primeira mensagem teste" />
        <MessageCard message="Segunda mensagem teste agora ainda maior" />
        <MessageCard message="Terceira mensagem teste agora tentando ser maior que a outra ainda. Terceira mensagem teste agora tentando ser maior que a outra ainda. Terceira mensagem teste agora tentando ser maior que a outra ainda" />
      </div>
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
