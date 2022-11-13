import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Router, Route, browserHistory } from 'react-router'
import App from './components/sections/App/App';
import PagesIndex from './components/pages/PagesIndex/PagesIndex';
import PagesEdit from './components/pages/PagesEdit/PagesEdit';
import PagesError from './components/pages/PagesError/PagesError'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PagesIndex/>,
    errorElement: <PagesError/>,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      {
        path: "edit/:messageId",
        element: <PagesEdit/>,
        // loader: editLoader,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <RouterProvider router={router} />
    </>
    
  </React.StrictMode>
);

