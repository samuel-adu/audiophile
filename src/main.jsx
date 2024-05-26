import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Category from './pages/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':category',
        element: <Category />,
      },
      {
        path: 'product',
        element: <ProductDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
