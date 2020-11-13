import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";
import LogCard from "../LogCard";

import "./index.css";

const GeralRoom = () => {
  let user;
  let room;
  const ENDPOINT = "http://127.0.0.1:5000";
  const [log, setLog] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("usuario");
  room = window.location.pathname.split("/")[2];
  user = param;
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("usuario entrou", () => {
      socket.emit("join", user, room);
      socket.on("joined", (user) => {
        setLog((oldLog) => [...oldLog, `${user}`]);
      });
      console.log(user, room);
    });
    socket.on("usuario saiu", (userleave) => {
      //    setLog((oldLog) => [...oldLog, `${userleave} saiu`]);
      socket.emit("leave", user);
    });
    console.log(log);
  }, [user, room]);

  return (
    <div className="geral-room">
      <RoomFrame
        roomName="Sala Geral"
        messages={
          <>
            <MessageCard message="teste" />
            <MessageCard message="teste numero dois" />
          </>
        }
        logs={log.map((logMsg) => (
          <LogCard key={Math.random(500)} message={logMsg} />
        ))}
      />
    </div>
  );
};

export default GeralRoom;
