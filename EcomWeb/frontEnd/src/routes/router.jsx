import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import CounterPage from '../components/CounterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      // { path: 'counter', element: <CounterPage /> },
    ],
  },
]);

export default router;
