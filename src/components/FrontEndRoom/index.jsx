import React from "react";

import "./index.css";
import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";

const FrontEndRoom = () => {
  const frontMessages = () => {
    return (
      <>
        <MessageCard message="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <MessageCard message=" Ut enim ad minim veniam, quis nostrud." />
      </>
    );
  };
  return (
    <div className="geral-room">
      <RoomFrame roomName="Front End" messages={frontMessages()} />
    </div>
  );
};

export default FrontEndRoom;
