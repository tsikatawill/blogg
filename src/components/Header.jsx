import { AiOutlineRocket } from 'react-icons/ai'
import styles from '../styles/shared.module.css'

export default function Header() {
  return (
    <header
      className={`${styles.homepageHeader} h-[calc(100vh-4rem)] md:h-[400px]`}
      data-testid="homepage-header"
    >
      <div className="container grid h-full place-content-center">
        <div className="flex items-center flex-col md:flex-row text-white">
          <span className="rotate-45">
            <AiOutlineRocket className="text-8xl md:text-9xl" />
          </span>
          <span className="text-5xl sm:text-7xl font-bold">BLOGG</span>
        </div>
      </div>
    </header>
  )
}
