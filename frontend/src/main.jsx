import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignIn from '../src/SignIn/SignIn.jsx'
import SignUp from '../src/SignUp/SignUp.jsx'
import Nav from '../src/Nav/Nav.jsx'
import Request from '../src/Request/Request.jsx'
import '../src/SignUp/signup.css'
import '../src/SignIn/signin.css'
import './normalize.css'
import './index.css'
import './App.css'
import '../src/Hero/hero.css'
import '../src/Nav/nav.css'
import '../src/Request/request.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/request",
    element: <>
      <Nav />
      <Request />
    </>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   <NextUIProvider>
    <App />
   </NextUIProvider>
   </RouterProvider>
  </React.StrictMode>,
)
