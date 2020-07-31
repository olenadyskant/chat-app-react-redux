import React from "react";
import propTypes from "prop-types";
import "./Sidebar.css";

const Sidebar = ({ users }) => (
  <aside className="sidebar">
    <div className="users-wrapper">
      <h3>Users Online</h3>
      <ul className="online-users">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  </aside>
);

Sidebar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Sidebar;
