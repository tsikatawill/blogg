import StoryPostCard from './StoryPostCard'
import styles from '../styles/shared.module.css'

export default function AllStoriesSection({ blogPosts }) {
  return (
    <section className={`${styles.postsSection} featured-posts`}>
      <div className="container">
        <div className="header">
          <h2 className={styles.sectionHeader}>All stories</h2>
        </div>
        {blogPosts.loading ? (
          <p>Loading</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {blogPosts.length ? (
              blogPosts.data.map((post) => {
                if (post.category === 'story') {
                  return (
                    <StoryPostCard
                      key={post.id}
                      title={post.title}
                      body={post.body}
                      displayImage={post?.displayImage}
                    />
                  )
                }
              })
            ) : (
              <p>
                This section is looking a bit empty. Want to create a blog post?
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
