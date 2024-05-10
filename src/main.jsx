import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Headphones from './pages/Headphones';
import Earphones from './pages/Earphones';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/speakers',
        element: <Speakers />,
      },
      {
        path: '/headphones',
        element: <Headphones />,
      },
      {
        path: '/earphones',
        element: <Earphones />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
