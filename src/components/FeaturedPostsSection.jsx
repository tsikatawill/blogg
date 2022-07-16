import FeaturedPostCard from './FeaturedPostCard'
import styles from '../styles/shared.module.css'

export default function FeaturedPostsSection({ blogPosts }) {
  return (
    <section className={`${styles.postsSection} featured-posts`}>
      <div className="container">
        <div className="header">
          <h2 className={styles.sectionHeader}>Featured posts</h2>
        </div>
        {blogPosts.loading ? (
          <p>Loading</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.data.map((post) => {
              if (post.category === 'featured') {
                return (
                  <FeaturedPostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    displayImage={post?.displayImage}
                  />
                )
              }
              // post.category === 'featured' && (
              //   <FeaturedPostCard
              //     key={post.id}
              //     title={post?.title}
              //     body={post?.body}
              //   />
              // )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
