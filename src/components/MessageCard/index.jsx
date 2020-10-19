import React from "react";

import "./index.css";

const MessageCard = (props) => {
  return (
    <div className="message-card">
      <div className="text-message">{props.message}</div>
    </div>
  );
};

export default MessageCard;
