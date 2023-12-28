import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Community from "./router/Community/Community";
import News from "./router/News/News";
import Mypage_main from "./router/Mypage/Mypage_main";
import Login from "./router/Member/Login";
import Join from "./router/Member/join";
import FindId from "./router/Member/findid";
import FindIdOk from "./router/Member/findidok";
import FindPw from "./router/Member/findpw";
import Job from "./router/Job/Job";

import JobView from './router/Job/View/components/JS/jobView';
import Issue from './router/News/List/components/Issue'
import Conference from './router/News/List/components/Conference'
import Company from './router/News/List/components/Company'
import Popular_News from './router/News/List/components/JS/Popular_News'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News/>}/>
        <Route path="/Job/*" element={<Job/>}/>
        <Route path="/Community/" element={<Community/>}/>
        <Route path="/Mypage/*" element={<Mypage_main/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/Findid" element={<FindId/>}/>
        <Route path="/Findidok" element={<FindIdOk/>}/>
        <Route path="/Findpw" element={<FindPw/>}/>
      </Routes>

      {/* 채용 뷰 */}
      <Routes>
        <Route path='/jobView' element={<JobView />} />
      </Routes>

      {/* 뉴스 IT, 회사, 컴퍼런스 */}
      <Routes>
        <Route path="/News/IT" element={<Issue />} />
        <Route path="/News/Company" element={<Company />} />
        <Route path="/News/Conference" element={<Conference />} />

        <Route path="/popNews" element={<Popular_News />} />
      </Routes>
    </div>
    
  );
}

export default App;