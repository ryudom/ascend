import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AscendApp from './AscendApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AscendApp />
  </StrictMode>,
)
