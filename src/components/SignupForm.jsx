import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from 'firebase/auth'
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'
import { addUser } from '../hooks/useAllUsers'
import { app } from '../firebase.config'
import { logUserIn } from '../features/UserSlice'
import styles from '../styles/shared.module.css'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export default function SignupForm() {
  const navigate = useNavigate()
  const auth = getAuth(app)
  const theme = localStorage.getItem('theme')
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user

        addUser({
          id: user.uid,
          username: user.displayName,
          email: user.email,
          displayImage: user.photoURL,
          isVerified: user.emailVerified,
        })

        toast('Account created successfully', {
          type: 'success',
        })

        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        switch (errorCode) {
          case 'auth/user-not-found':
            toast("There's no account with that email", {
              type: 'error',
            })
            break
          case 'auth/email-already-in-use':
            toast('That email is already linked to another account', {
              type: 'error',
            })
            break
          case 'auth/weak-password':
            toast('Even a little twig is stronger than that pasword', {
              type: 'error',
            })
            break
          case 'auth/wrong-password':
            toast('You have entered a wrong password', {
              type: 'error',
            })
            break
          case 'auth/too-many-requests':
            toast('Too many login consecutive login attempts', {
              type: 'error',
            })
            break

          default:
            break
        }
        console.log(errorCode)
      })
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        addUser({
          id: user.uid,
          username: user.displayName,
          email: user.email,
          displayImage: user.photoURL,
          isVerified: user.emailVerified,
        })

        dispatch(
          logUserIn({
            id: user.uid,
            username: user.displayName,
            email: user.email,
            displayImage: user.photoURL,
            isVerified: user.emailVerified,
          })
        )
        toast('Account successfully created', {
          type: 'success',
          theme,
        })
        // navigate('/')
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
        // ...
      })
  }

  return (
    <form className="p-5 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div
        className="google-login flex items-center rounded-md h-10 bg-blue-700 bg-opacity-40 hover:bg-opacity-70 duration-100 ease-in cursor-pointer text-white"
        onClick={handleGoogleLogin}
      >
        <div className="prepend h-10 w-10 grid place-content-center">
          <FaGoogle />
        </div>
        <p>Signup with Google</p>
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className={styles.inputGroupPrepend}>
          <HiOutlineMail />
        </label>

        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
        {/* <span className={styles.errorMsg}>
          {errors.email?.type === 'required' && 'Email is required'}
        </span> */}
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="password" className={styles.inputGroupPrepend}>
          <HiOutlineLockClosed />
        </label>

        <input
          {...register('password')}
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button className="bg-purple-800 text-white h-10 rounded-md">
        Sign up
      </button>
    </form>
  )
}
