import Title from "@/components/Title"
import styles from "@/styles/Experience.module.css"

export default function Experience() {
  return (
    <div className={styles.experience}>
      <Title title='Experience' underline='underline2' />
      <div className={styles.container}>
        <h2>Some type of experience</h2>
      </div>
    </div>
  )
}
