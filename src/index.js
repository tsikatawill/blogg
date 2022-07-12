import './index.css'
import { BrowserRouter, Route, Routes, useRoutes } from 'react-router-dom'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainLayout from './layouts/MainLayout'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
