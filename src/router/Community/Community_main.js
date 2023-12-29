// import axios from 'axios';
// import { useEffect, useState } from 'react';
import React from 'react';

// Routes
import { Routes, Route } from 'react-router-dom';

// Main
import Community from './Main/Community';

// View
import BoardDetails from './View/boarddetail'
import BoardEdit from './View/boardedit'
import BoardWrite from './View/boardwrite'
import FileUpload from './View/fileupload';

// List
import BoardList from './List/boardlist';

const Communit_main = () => {

    return (

        <div>
            <Routes>
                <Route path='/' element={<Community/>} />

                <Route path="/boardlist" element={<BoardList />} />

                <Route path="/boardedit" element={<BoardEdit />} />
                <Route path="/boardwirte" element={<BoardWrite />} />
                <Route path="/boarddetail" element={<BoardDetails />} />
                <Route path="/fileupload" element={<FileUpload />} />
            </Routes>
        </div>
    );
}

export default Communit_main;