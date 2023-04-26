import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';


import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Plans from './pages/Plans/Plans';
import RootLayout from './pages/RootLayout/RootLayout';
import ErrorPage from './util/components/ErrorPage/ErrorPage';

import './bootstrap.css';
import './index.css';
import './overwrite.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "plans/",
        element: <Plans />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Navbar/> */}
  <RouterProvider router={router} />
  {/* <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
