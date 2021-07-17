import Title from "@/components/Title"
import Link from "next/link"
import Blog from "@/components/Blog"
import styles from "@/styles/FeaturedBlogs.module.css"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className={styles.featured}>
      <Title title={title} />
      <div className={`${styles.blogsCenter} ${styles.sectionCenter}`}>
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link href='/blog'>
          <a className={styles.btn}>All articles</a>
        </Link>
      )}
    </section>
  )
}

export default Blogs
