import Title from "@/components/Title"
import styles from "@/styles/FeaturedBlogs.module.css"

export default function FeaturedBlogs() {
  return (
    <div className={styles.featured}>
      <Title title='Featured articles' underline='underline2' />
    </div>
  )
}
