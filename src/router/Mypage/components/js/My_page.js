import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import "../css/Mypage_main.css";

const My_page = (props) => {
  return (
      <div className="mypage-wrap">
        <div className="user-welcome">
          <h2>{props.userNickname}님, 환영해요</h2>
        </div>

        <div className="show-user">
          <div className="title">
            <ul>
              <li>
                <h3>계정 관리</h3>
              </li>
              <li><a>서비스에서 사용하는 내 계정 정보를 관리할 수 있습니다.</a></li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li className="list-groups"><a>이메일</a><span>{props.userEmail}</span></li>
              <li className="list-groups"><Link to='/Mypage/User_check' state={{ action: 'name-edit', userEmail: props.userEmail, userNickname: props.userNickname }}>
                닉네임<span className=" hover">{props.userNickname}</span></Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="user-edit">
          <div className="title">
            <ul>
              <li>
                <h3>개인정보 보호</h3>
              </li>
              <li><a>내 계정을 안전하게 보호하기 위한 정보를 관리할 수 있습니다.</a></li>
            </ul>
          </div>
          <div className="content">
            <ul>
              <li className="list-groups"><Link
                to='/Mypage/User_check' state={{ action: 'user-edit', userEmail: props.userEmail, userNickname: props.userNickname }}>비밀번호 변경</Link></li>
              <li className="list-groups"><Link
                to='/Mypage/User_check' state={{ action: 'user-out', userEmail: props.userEmail, userNickname: props.userNickname}}>회원 탈퇴</Link></li>
            </ul>
          </div>
        </div>
      </div>

  );
}

export default My_page;