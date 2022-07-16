import FeaturedPostsSection from './components/FeaturedPostsSection'
import Header from './components/Header'
import StoryPostCard from './components/StoryPostCard'
import useUser from './hooks/getUser'

function App() {
  // console.log(useUser('LWmCmpnUrXTYu37Mrj0jlr5NOeC2'))
  return (
    <>
      <Header />
      <div className="container py-5">
        <FeaturedPostsSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          <StoryPostCard />
          <StoryPostCard />
          <StoryPostCard />
          <StoryPostCard />
          <StoryPostCard />
          <StoryPostCard />
        </div>
      </div>
    </>
  )
}

export default App
