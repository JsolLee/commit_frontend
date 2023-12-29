// import axios from 'axios';
// import { useEffect, useState } from 'react';

// React
import React from 'react';

// Routes
import { Routes, Route } from 'react-router-dom';

// Main
import News from './Main/JS/News';

// View
import NewsView from './View/NewsView'

// List
import Conference from './List/components/Conference';
import Company from './List/components/Company';
import Issue from './List/components/Issue'


const News_main = () => {

  return (

    <div>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/User_check" element />
        <Route path="/Name_edit" element />

        <Route path="/IT" element={<Issue />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Conference" element={<Conference />} />

        <Route path="/NewsView" element={< NewsView />} />
      </Routes>
    </div>
  );
}

export default News_main;