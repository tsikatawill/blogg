import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HiLogin } from 'react-icons/hi'
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
        <Link
          to="/"
          className="p-2 bg-slate-300 dark:bg-slate-700 flex items-center text-white gap-2 text-sm"
        >
          <HiLogin />
        </Link>
      </Navbar>

      <main className="grid place-content-center before:block before:h-16 min-h-screen">
        <div className="container">
          <div className="bg-white dark:bg-slate-900 w-[20rem] border border-gray-500 dark:border-gray-700 shadow-md shadow-slate-400 dark:shadow-stone-900 rounded-md py-10 my-2 md:my-0">
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
