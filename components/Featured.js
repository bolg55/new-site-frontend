import Title from "@/components/Title"
import styles from "@/styles/Featured.module.css"

export default function Featured() {
  return (
    <div className={styles.featured}>
      <Title title='Featured projects' />
      <div className={styles.container}></div>
    </div>
  )
}
