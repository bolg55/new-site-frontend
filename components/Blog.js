import Link from "next/link"
import styles from "@/styles/FeaturedBlogs.module.css"

const Blog = ({ slug, title, content, image, desc, date, category, id }) => {
  return (
    <Link href={`/blog/${slug}`} key={id}>
      <a className={styles.blog}>
        <article>
          <img src={image.url} alt='' className={styles.blogImg} />
          <div className={styles.blogCard}>
            <h4>{title}</h4>
            <p>{desc}</p>
            <div className={styles.blogFooter}>
              {category.map((item) => {
                return <span>{item.title}</span>
              })}
              <p>{date}</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default Blog
