import { getAuth, signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { HiLogout } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'
import { app } from '../firebase.config'
import { logUserOut } from '../features/UserSlice'
import { toast } from 'react-toastify'

export default function Navbar({ children }) {
  const user = useSelector((state) => state.user.value)
  const dispatch = useDispatch()

  function handleLogout() {
    signOut(getAuth(app))
      .then(() => {
        dispatch(logUserOut())
        toast('You are logged out', { type: 'info' })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log({ errorCode, errorMessage })
      })
  }

  return (
    <nav className="navbar dark:bg-slate-900 dark:text-white h-16 bg-white fixed w-full z-50">
      <div className="container h-full flex items-center justify-between">
        <Link to="/">
          <Logo size={30} />
        </Link>

        <div className="flex items-center gap-5">
          {children ? (
            children
          ) : (
            <div className="flex gap-2 md:gap-5 items-center">
              {user.isLoggedIn ? (
                <>
                  <div className="user-details flex items-center gap-2 text-sm">
                    <div className="avatar rounded-full overflow-hidden h-8 w-8 sm:h-10 sm:w-10 bg-slate-700">
                      <img
                        src={
                          user.displayImage ||
                          'https://uploads.linear.app/5b440f6e-6aed-4159-b0ed-f69d7442da54/e6649386-7875-4673-babd-a428dffc7f19/b2eb0415-ea35-460a-b871-f9eede1ebee8'
                        }
                        alt="img"
                        className="h-full object-cover"
                      />
                    </div>
                    <p className="name font-semibold line-clamp-1 text-xs">
                      {user.username.split(' ')[0]}
                    </p>
                  </div>
                  <button
                    className="p-2 bg-slate-300 dark:bg-slate-700 text-white gap-2 text-sm"
                    onClick={handleLogout}
                  >
                    <HiLogout className="text-sm" />
                  </button>
                </>
              ) : (
                <div className="nav-links flex gap-5 items-center">
                  <Link
                    to="/sign-up"
                    className="btn dark:bg-gray-500 dark:hover:bg-gray-600 bg-purple-600 hover:bg-purple-700 text-white py-1 px-3 duration-200"
                  >
                    Get started
                  </Link>
                  <Link
                    to="/login"
                    className="hover:text-purple-600 dark:hover:text-slate-400"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
          <ThemeToggler />
        </div>
      </div>
    </nav>
  )
}
