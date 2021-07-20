import { FaExclamationTriangle, FaSadTear } from "react-icons/fa"
import Layout from "@/components/Layout"
import Link from "next/link"
import styles from "@/styles/404.module.css"

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h2>
          <FaSadTear />
        </h2>

        <h4>Sorry, nothing here</h4>
        <Link href='/'>Go Home</Link>
      </div>
    </Layout>
  )
}
