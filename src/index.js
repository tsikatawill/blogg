import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import store, { persistor } from './store/store'
import App from './App'
import Login from './pages/Login'
import MainLayout from './layouts/MainLayout'
import { PersistGate } from 'redux-persist/integration/react'
import ProtectedRoute from './components/ProtectedRoute'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
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
              <Route element={<ProtectedRoute />}>
                <Route
                  path="/create-post"
                  element={<MainLayout></MainLayout>}
                />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </>
)
