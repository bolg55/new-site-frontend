import styles from "@/styles/Title.module.css"

export default function Title({ title, underline }) {
  return (
    <div className={styles.title}>
      <h2>{title || "default title"}</h2>
      <div className={underline || "underline"}></div>
    </div>
  )
}
