import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import D2Router from './router.ts'
import './index.css'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={D2Router} />
  </StrictMode>,
)
