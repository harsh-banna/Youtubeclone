import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import VideoPage from './pages/VideoPage.jsx';
import LogIn from './pages/LogIn.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import Channel from './pages/Channel.jsx';
import Signin from './pages/Signin.jsx';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [{
      path:'/',
      element:<HomePage/>
    },
      {
        path:'/login',
        element:<LogIn/>
      },
      {
        path:'/signin',
        element:<Signin/>
      },
      {
        path: "/video/:id",
        element: <VideoPage/>
      },
      {
        path: "/channel",
        element: <Channel/>
      }
    ],
    errorElement:<Error/>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
