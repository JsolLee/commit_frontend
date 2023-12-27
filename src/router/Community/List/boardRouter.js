import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BoardList from './boardlist';
import BoardDetail from '../View/boarddetail';
import BoardWrite from '../View/boardwrite';
import BoardEdit from '../View/boardedit';

const routes = [
  // {
  //   path: '/',
  //   element: <Community />,
  // }
  // ,
  {
    path: '/boardlist',
    element: <BoardList />,
  },
  {
    path: '/boarddetail',
    element: <BoardDetail />,
  },
  {
    path: '/boardwrite',
    element: <BoardWrite />
  },
  {
    path: '/boardedit',
    element: <BoardEdit />
  }
];

function BoardRouter() {
  return (
    <div className="BoardRouter">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default BoardRouter;