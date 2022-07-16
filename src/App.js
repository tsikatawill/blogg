import AllStoriesSection from './components/AllStoriesSection'
import FeaturedPostsSection from './components/FeaturedPostsSection'
import Header from './components/Header'
import StoryPostCard from './components/StoryPostCard'
import useBlogPosts from './hooks/useBlogPosts'

function App() {
  const [blogPosts] = useBlogPosts()

  return (
    <>
      <Header />
      <FeaturedPostsSection blogPosts={blogPosts} />
      <AllStoriesSection blogPosts={blogPosts} />
    </>
  )
}

export default App
