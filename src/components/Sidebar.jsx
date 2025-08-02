import React from "react";
import { useSidebar } from "../context/SidebarContext";
import "../styles/sidebar.css"; 

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
      <div className="sidebar-content">
        <img
          src="../public/user.jpg"
          alt="User"
          className="profile-img"
        />
        <h3 className="username">Rak Maurya</h3>
        <button className="sidebar-btn">Edit Profile</button>
        <button className="sidebar-btn">Order History</button>
        <button className="sidebar-btn">Add Address</button>
        <button className="sidebar-btn logout">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
