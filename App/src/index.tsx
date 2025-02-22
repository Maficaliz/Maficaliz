import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterContextualized } from './contextManager'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterContextualized />
  </StrictMode>,
)
