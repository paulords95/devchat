import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import uuid from "react-uuid";

import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";
// import LogCard from "../LogCard";

import "./index.css";
import ActiveUsers from "../ActiveUsers";

const GeralRoom = () => {
  let user;
  let room;
  const [onlineUsers, setOnlineUsers] = useState([""]);

  const ENDPOINT = "http://127.0.0.1:5000";

  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("usuario");
  room = window.location.pathname.split("/")[2];

  user = {
    name: param,
    room: room,
    id: uuid(),
  };

  const activeUserNow = [];
  useEffect(() => {
    setOnlineUsers((oldList) => [...oldList, user.name]);
  }, [user.name]);

  activeUserNow.push(onlineUsers);
  const socket = socketIOClient(ENDPOINT);

  socket.on("join", () => {
    socket.emit("userRoom", user);
  });

  socket.on("disc", () => {
    socket.emit("disconnected", user);
  });

  return (
    <div className="geral-room">
      <ActiveUsers
        userList={activeUserNow.map((name) => {
          return <li key={uuid()}>{name}</li>;
        })}
      />
      <RoomFrame
        roomName="Sala Geral"
        messages={
          <>
            <MessageCard message="teste" />
            <MessageCard message="teste numero dois" />
          </>
        }
      />
    </div>
  );
};

export default GeralRoom;
