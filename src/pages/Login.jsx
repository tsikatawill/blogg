import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import SignupForm from '../components/SignupForm'
import ThemeToggler from '../components/ThemeToggler'
import { useSelector } from 'react-redux'

export default function Login() {
  const [selectedForm, setSelectedForm] = useState({
    name: 'login',
    style: 'border-b-2 border-purple-500 pb-2 text-purple-500 cursor-pointer',
  })

  const user = useSelector((state) => state.user.value)

  const navigate = useNavigate()

  useEffect(() => {
    user.isLoggedIn && navigate('/')
  }, [user.isLoggedIn])

  return (
    <>
      <Navbar>
        <div className="nav-links flex items-center gap-3">
          <Link to="#">Login</Link>
          <Link to="/sign-up" className="px-4 py-1 bg-slate-300 text-black">
            Get started
          </Link>
        </div>
      </Navbar>
      <main className="grid place-content-center min-h-screen">
        <div className="fixed bottom-10 right-10">
          <ThemeToggler />
        </div>

        <div className="container">
          <div className="bg-white dark:bg-slate-900 w-[20rem] border border-gray-500 dark:border-gray-700 shadow-md shadow-slate-400 dark:shadow-stone-900 rounded-md py-10">
            <div className="header flex justify-center">
              <Logo />
            </div>

            <div className="nav flex justify-between text-center mt-5 mb-2">
              <div
                className={`nav-item flex-1 cursor-pointer ${
                  selectedForm.name === 'login' && selectedForm.style
                }`}
                onClick={() =>
                  setSelectedForm({ ...selectedForm, name: 'login' })
                }
              >
                Log in
              </div>
              <div
                className={`nav-item flex-1 cursor-pointer ${
                  selectedForm.name === 'signup' && selectedForm.style
                }`}
                onClick={() =>
                  setSelectedForm({ ...selectedForm, name: 'signup' })
                }
              >
                Sign up
              </div>
            </div>

            {selectedForm.name === 'login' ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </main>
    </>
  )
}
