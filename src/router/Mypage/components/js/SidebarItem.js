import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Sidebar.js => menus에 추가한 icon를 {menu.icon}으로 뽑아낼 수 있다.

const SidebarItem = ({ menu, isActive }) => {

  return isActive === true ? (
    <div className="nav-link active">
      <p className="mt-0 mb-1">{menu.icon} {menu.name}</p>
    </div>
  ) : (
    <div className="nav-link link-body-emphasis">
      <p className="mt-0 mb-1">{menu.icon} {menu.name}</p>
    </div>
  )
}

export default SidebarItem;