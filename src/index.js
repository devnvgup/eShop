import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Checkout from "./components/Checkout/Checkout"
import Header from "./components/Header/Header"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { StateProvider } from './components/Provider/StateProvider';
import { reducer, initialState } from './components/Provider/reducer';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/checkout",
    element: <>
      <Header />
      <Checkout />
    </>,
  },
  {
    path: "/login",
    element: <Login />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
