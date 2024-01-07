import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Community_main from "./router/Community/Community_main";
import News_main from './router/News/News_main';
import News_Category from './router/News/List/News_Category';
import News_View from './router/News/View/News_View';
import Mypage_main from "./router/Mypage/Mypage_main";
import Login from "./router/Member/Login";
import Join from "./router/Member/join";
import FindId from "./router/Member/findid";
import FindIdOk from "./router/Member/findidok";
import FindPw from "./router/Member/findpw";
import Job_main from "./router/Job/Job_main";
import Header from './components/Header';

function App() {

  // 세션
  const [isLogin, setIsLogin] = useState(false); //로그인 관리

  useEffect(() => {
    if (sessionStorage.getItem("member_id") === null) {
      // sessionStorage 에 member_id 라는 key 값으로 저장된 값이 없다면
      isLogin;
    } else {
      // sessionStorage 에 member_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <div>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/*" element={<News_main />}>
          <Route path="category/:category" element={<News_Category />} />
          <Route path="article/:id" element={<News_View />} />
        </Route>
        <Route path="/Job/*" element={<Job_main />} />
        <Route path="/Community/*" element={<Community_main />} />
        <Route path="/Mypage/*" element={<Mypage_main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/Findid" element={<FindId />} />
        <Route path="/Findidok" element={<FindIdOk />} />
        <Route path="/Findpw" element={<FindPw />} />
      </Routes>
    </div>

  );
}

export default App;