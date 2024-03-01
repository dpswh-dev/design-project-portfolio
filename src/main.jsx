import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import CampusNotes from './pages/CampusNotes.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import LiteSaver from './pages/LiteSaver.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound/>
  },
  {
    path: '/campus-notes',
    element: <CampusNotes/>
  },
  {
    path: '/lite-saver',
    element: <LiteSaver/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
