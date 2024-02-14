import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import ParqueNatural from './ParqueNatural.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/Parque/:id" element={<ParqueNatural />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
