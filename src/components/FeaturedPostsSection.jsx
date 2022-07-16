import FeaturedPostCard from './FeaturedPostCard'

export default function FeaturedPostsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <FeaturedPostCard />
      <FeaturedPostCard />
    </div>
  )
}
