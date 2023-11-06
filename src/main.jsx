import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import routes from './routes.jsx'
import './index.css'
import { UserProvider } from './context/user.jsx'
import NavBar from './Components/NavBar.jsx'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <NavBar />
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
