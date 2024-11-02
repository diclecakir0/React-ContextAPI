import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { SepetProvider } from './context/SepetContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* We position the provider to wrap the entire application, allowing all components within the application to access the data provided by the provider*/}
    <SepetProvider>
    <App />
    </SepetProvider>
  </StrictMode>,
)
