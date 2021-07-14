import Title from "@/components/Title"
import styles from "@/styles/FeaturedBlogs.module.css"

export default function FeaturedBlogs({ title, body }) {
  return (
    <div className={styles.featured}>
      <Title title='Featured articles' />
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
