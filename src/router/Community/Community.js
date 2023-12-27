import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from './List/boardlist';
import BoardDetail from './View/boarddetail';
import BoardWrite from './View/boardwrite';
import BoardEdit from './View/boardedit';

const routes = [
  {
    path: '/',
    element: <BoardList />,
  },
  {
    path: '/boarddetail',
    element: <BoardDetail />,
  },
  {
    path: '/boardwrite',
    element: <BoardWrite/>
  },
  {
    path: '/boarddetail/boardedit',
    element: <BoardEdit/>
  }
];

function Community() {
  return (
    <div className="Community">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default Community;
