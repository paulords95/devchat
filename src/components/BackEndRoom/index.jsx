import React from "react";

import "./index.css";
import RoomFrame from "../RoomFrame";
import MessageCard from "../MessageCard";

const BackEndRoom = () => {
  const backMessages = () => {
    return (
      <>
        <MessageCard message="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <MessageCard message=" Ut enim ad minim veniam, quis nostrud." />
      </>
    );
  };
  return (
    <div className="geral-room">
      <RoomFrame roomName="Back End" messages={backMessages()} />
    </div>
  );
};

export default BackEndRoom;
