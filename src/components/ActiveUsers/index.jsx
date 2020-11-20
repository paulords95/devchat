import React from "react";

import "./index.css";

const ActiveUsers = (props) => {
  return (
    <div className="users-wrap">
      <h4>Usuários Online</h4>
      <ul className="user-list">{props.userList}</ul>
    </div>
  );
};

export default ActiveUsers;
