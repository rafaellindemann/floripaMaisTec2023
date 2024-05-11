import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {RouterProvider} from 'react-router-dom'

// arquivo de rotas
import routers from './router/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers}>
  </RouterProvider>
)
