import { AiOutlineRocket } from 'react-icons/ai'
import styles from '../styles/shared.module.css'

export default function Header() {
  return (
    <header
      className={`${styles.homepageHeader} h-screen sm:h-[400px]`}
      data-testid="homepage-header"
    >
      <div className="container grid h-full place-content-center">
        <div className="flex items-center text-white">
          <span className="rotate-45">
            <AiOutlineRocket size={100} />
          </span>
          <span className="text-7xl font-bold">BLOGG</span>
        </div>
      </div>
    </header>
  )
}
