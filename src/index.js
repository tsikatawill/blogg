import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <React.StrictMode>
      <ToastContainer limit={3} theme={localStorage.theme} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <App />
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </>
)
