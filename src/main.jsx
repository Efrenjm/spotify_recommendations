import React from 'react'
import ReactDOM from 'react-dom/client'
import '@src/index.css'

import { RouterProvider } from 'react-router-dom'
import router from '@navigation'
// import router from

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
