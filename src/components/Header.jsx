import { AiOutlineRocket } from 'react-icons/ai'

export default function Header() {
  return (
    <header
      className="h-screen sm:h-[400px]"
      data-testid="homepage-header"
      style={{
        background:
          'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://uploads.linear.app/5b440f6e-6aed-4159-b0ed-f69d7442da54/5c69faab-ebd4-4ed0-9660-db6a80f5e3b7/66304491-cc7b-4eeb-bcee-2333a1b69ae8) center center/cover no-repear',
        backgroundAttachment: 'fixed',
      }}
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
