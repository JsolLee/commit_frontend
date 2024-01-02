import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Community_main from "./router/Community/Community_main";
import News_main from './router/News/News_main';
import Mypage_main from "./router/Mypage/Mypage_main";
import Login from "./router/Member/Login";
import Join from "./router/Member/join";
import FindId from "./router/Member/findid";
import FindIdOk from "./router/Member/findidok";
import FindPw from "./router/Member/findpw";
import Job_main from "./router/Job/Job_main";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News/*" element={<News_main />} />
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