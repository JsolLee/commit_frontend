// import axios from 'axios';
// import { useEffect, useState } from 'react';

// React
import React from 'react';

// Routes
import { Routes, Route } from 'react-router-dom';

// Main
import Job from './Job';

// View
import JobView from './View/components/JS/jobView';


const News_main = () => {

  return (

    <div>
      <Routes>
        <Route path="/" element={<Job />} />

        <Route path="/JobView" element={<JobView/>} />
      </Routes>
    </div>
  );
}

export default News_main;