import { AiOutlineRocket } from 'react-icons/ai'

export default function Logo({ size }) {
  return (
    <span className="flex gap-2 items-center">
      <AiOutlineRocket
        size={40}
        className="rotate-45 hover:rotate-[410deg] duration-1000 text-purple-600"
      />
      <span className="flex flex-col items-start">
        <span className="text-2xl text-purple-600 font-bold">Blogg</span>
        <small className="text-[10px] leading-3">Where the world blogs</small>
      </span>
    </span>
  )
}
