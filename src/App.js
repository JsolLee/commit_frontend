import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./router/Home";
import BoardRouter from './router/Community/List/boardRouter';
import News from "./router/News/News";
import Mypage_main from "./router/Mypage/Mypage_main";
import Login from "./router/Member/Login";
import Join from "./router/Member/join";
import FindId from "./router/Member/findid";
import FindIdOk from "./router/Member/findidok";
import FindPw from "./router/Member/findpw";
import Job from "./router/Job/Job";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News/>}/>
        <Route path="/Job" element={<Job/>}/>
        <Route path="/Community/*" element={<BoardRouter/>}/>
        <Route path="/Mypage/*" element={<Mypage_main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/Findid" element={<FindId/>}/>
        <Route path="/Findidok" element={<FindIdOk/>}/>
        <Route path="/Findpw" element={<FindPw/>}/>
      </Routes>
  );
}

export default App;