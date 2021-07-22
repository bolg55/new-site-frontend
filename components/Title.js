import styles from "@/styles/Title.module.css"
import { useRouter } from "next/router"

export default function Title({ title }) {
  const router = useRouter()

  if (router.pathname === "/") {
    return (
      <div className={styles.title}>
        <h2>{title || "default title"}</h2>
        <div className='underline'></div>
      </div>
    )
  } else {
    return (
      <div className={styles.title}>
        <h1>{title || "default title"}</h1>
        <div className='underline'></div>
      </div>
    )
  }
}
