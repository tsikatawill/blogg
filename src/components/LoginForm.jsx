import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'
import { app } from '../firebase.config'
import styles from '../styles/shared.module.css'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log(errors.email)
  }

  const handleGoogleLogin = async () => {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
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
        <p>Login with Google</p>
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
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button className="bg-purple-800 text-white h-10 rounded-md">
        Login
      </button>
    </form>
  )
}
