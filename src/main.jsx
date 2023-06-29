import React from 'react'
import App from './App.jsx';
import Book from './Book.jsx';
import Slider from './Slider.jsx';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "/slider/book",
    element: <Book />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
  
)
