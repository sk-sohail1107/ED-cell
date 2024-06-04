import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import './index.css'
import GalleryPage from './components/gallerypage/GalleryPage';
import TeamPage from './components/teampage/TeamPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "gallerypage",
    element: <GalleryPage/>
  },
  {
    path: "teampage",
    element: <TeamPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
)