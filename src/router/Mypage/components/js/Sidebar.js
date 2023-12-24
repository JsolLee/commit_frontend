import React from "react";
import { PersonRolodex, PersonCircle, ChatSquareHeart, Clipboard2Check, ChatSquareText } from 'react-bootstrap-icons'
import { Link, useLocation } from 'react-router-dom';
import SidebarItem from "./SidebarItem";
import "../css/Sidebar.css"

const Sidebar = () => {
  const menus = [
    { name: "회원정보", path: '/Mypage', icon: <PersonCircle width={20} height={20} /> },
    { name: "좋아요 / 관심기업", path: '/Mypage/My_like', icon: <ChatSquareHeart width={20} height={20} /> },
    { name: "스크랩", path: '/Mypage/My_scrap', icon: <Clipboard2Check width={20} height={20} /> },
    { name: "내가 쓴 글 / 댓글", path: '/Mypage/My_activity', icon: <ChatSquareText width={20} height={20} /> }
  ];
  const pathName = useLocation().pathname;
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary min-vh-100">
      <div>
        <PersonRolodex width={50} height={50} /> &nbsp;&nbsp;&nbsp;
        <span className="fs-3">My Page</span>
      </div>
      <hr />
      {menus.map((menu, idx) => {
        return (
          <Link to={menu.path} key={idx} className="nav flex-column mb-0">
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false} // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar;