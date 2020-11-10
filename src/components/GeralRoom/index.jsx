import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";
import LogCard from "../LogCard";

import "./index.css";

const GeralRoom = () => {
  const ENDPOINT = "http://127.0.0.1:5000";
  const [log, setLog] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("usuario");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("usuario entrou", () => {
      setLog((oldLog) => [...oldLog, `${param} entrou`]);
    });
    socket.on("usuario saiu", () => {
      setLog((oldLog) => [...oldLog, `${param} saiu`]);
    });
  }, [param]);

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
          <LogCard key={log.indexOf(logMsg)} message={logMsg} />
        ))}
      />
    </div>
  );
};

export default GeralRoom;
