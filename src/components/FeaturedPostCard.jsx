import { HiOutlineBookmark } from 'react-icons/hi'

export default function FeaturedPostCard({ title, body, displayImage }) {
  return (
    <div className="rounded-md h-[30rem] lg:h-72 lg:flex bg-white dark:bg-slate-900 border-2 dark:border-slate-500">
      <div className="h-1/2 lg:h-full lg:w-1/3 overflow-hidden">
        <img
          src={
            displayImage ||
            'https://uploads.linear.app/5b440f6e-6aed-4159-b0ed-f69d7442da54/5c69faab-ebd4-4ed0-9660-db6a80f5e3b7/66304491-cc7b-4eeb-bcee-2333a1b69ae8'
          }
          alt="post-display.jpg"
          className="h-full object-cover w-full hover:scale-125 ease-in duration-100"
        />
      </div>
      <div className="content p-7 lg:w-2/3 flex flex-col  justify-between">
        <div>
          <h3 className="font-bold mb-2 line-clamp-2">{title} some title</h3>
          <p className="text-sm text-slate-600 dark:text-slate-200 line-clamp-3">
            {body} some body
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="user-details flex items-center gap-2 text-sm">
            <div className="avatar rounded-full overflow-hidden h-16 w-16 bg-black">
              {/* <img src={Img} alt="img" className="h-full object-cover" /> */}
            </div>
            <div className="div">
              <p className="name font-semibold">John Doe</p>
              <p className="text-xs">Jun 3rd . 5 min read</p>
            </div>
          </div>
          <span className="bookmark-icon">
            <HiOutlineBookmark />
          </span>
        </div>
      </div>
    </div>
  )
}
