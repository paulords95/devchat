import React from "react";

import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";

import "./index.css";

const GeralRoom = () => {
  const geralMessages = () => {
    return (
      <>
        <MessageCard message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <MessageCard message=" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris " />
      </>
    );
  };
  return (
    <div className="geral-room">
      <RoomFrame roomName="Sala Geral" messages={geralMessages()} />
    </div>
  );
};

export default GeralRoom;
