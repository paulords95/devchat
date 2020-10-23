import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";

import "./index.css";

const GeralRoom = () => {
  const ENDPOINT = "http://127.0.0.1:5000";
  const [log, setLog] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("usuario");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on("usuario entrou", () => {
      setLog([...log, `${param} entrou`]);
    });
  }, []);

  return (
    <div className="geral-room">
      <RoomFrame
        roomName="Sala Geral"
        messages={log.map((logMsg) => (
          <MessageCard message={logMsg} />
        ))}
      />
    </div>
  );
};

export default GeralRoom;
