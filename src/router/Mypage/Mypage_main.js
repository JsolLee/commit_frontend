// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';
import My_page from "./components/js/My_page";
import Sidebar from './components/js/Sidebar';
import User_check from './components/js/User_check';
import Name_edit from './components/js/Name_edit';
import User_edit from './components/js/User_edit';
import User_out from './components/js/User_out';
import My_activity from './components/js/My_activity';
import My_like from './components/js/My_like';
import My_scrap from './components/js/My_scrap';
import { Routes, Route } from 'react-router-dom';

const Mypage_main = () => {
const data = {
    memberIdx: 1,
    memberType: 'MEMBER',
    memberEmail: 'commit@naver.com',
    memberPassword: '1111',
    memberNickname: 'COMMIT'
};

  // const [data, setData] = useState([
  //   {memberIdx: 0},
  //   {memberType: ''},
  //   {memberEmail: ''},
  //   {memberPassword: ''},
  //   {memberNickname: ''}
  // ]);

  // 페이지 로딩 시 해당 주소로 API 호출, 백엔드 연결 시 사용 예정
  // useEffect(() => {
  //     axios.get('/api/hello')
  //         .then(res => {
  //           setData(res.data);
  //     })
  //         .catch(err => console.log(err))
  // }, []);

  return (

    <div className="d-flex flex-nowrap">
    <Sidebar/>
      <Routes>
        <Route path="/" element={<My_page userNickname={data.memberNickname} userEmail={data.memberEmail}/>} />
        <Route path="/User_check" element={<User_check userEmail={data.memberEmail} userPw={data.memberPassword}/>} />
        <Route path="/Name_edit" element={<Name_edit userNickname={data.memberNickname}/>} />
        <Route path="/User_edit" element={<User_edit />} />
        <Route path="/User_out" element={<User_out userNickname={data.memberNickname} userEmail={data.memberEmail}/>} />
        <Route path="/My_activity" element={<My_activity />} />
        <Route path="/My_like" element={<My_like />} />
        <Route path="/My_scrap" element={<My_scrap />} />
      </Routes>
      </div>
  );
}

export default Mypage_main;