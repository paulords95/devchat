import React from "react";

import "./index.css";

const LogCard = (props) => {
  return (
    <div className="log-card">
      <div className="log-message">{props.message}</div>
    </div>
  );
};

export default LogCard;
