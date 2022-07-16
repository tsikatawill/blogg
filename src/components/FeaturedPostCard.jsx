export default function FeaturedPostCard() {
  return (
    <div className="rounded-md flex flex-col lg:flex-row h-[30rem] bg-white dark:bg-slate-500 border-2 dark:border-slate-500">
      <div className="h-1/2 lg:h-full lg:w-1/3">
        <img
          src="https://uploads.linear.app/5b440f6e-6aed-4159-b0ed-f69d7442da54/5c69faab-ebd4-4ed0-9660-db6a80f5e3b7/66304491-cc7b-4eeb-bcee-2333a1b69ae8"
          alt="profile"
          className="h-full object-cover w-full"
        />
      </div>
      <div className="content p-7 flex flex-col lg:w-2/3 justify-between">
        <div>
          <h3 className="text-bold mb-2">Some title</h3>
          <p className="text-sm text-slate-600 dark:text-slate-200 line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            quibusdam saepe iste voluptatem cum magnam hic dolorem explicabo
            voluptate alias.
          </p>
        </div>
        <div className="mt-5">
          <div className="user-details flex items-center gap-2 text-sm">
            <div className="avatar rounded-full overflow-hidden h-16 w-16 bg-black">
              {/* <img src={Img} alt="img" className="h-full object-cover" /> */}
            </div>
            <div className="div">
              <p className="name font-semibold">John Doe</p>
              <p>saasd</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
