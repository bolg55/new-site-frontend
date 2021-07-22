import { FaExclamationTriangle, FaSadTear } from "react-icons/fa"
import Layout from "@/components/Layout"
import Link from "next/link"
import styles from "@/styles/404.module.css"
import { useRouter } from "next/router"

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <Layout
      title='Page Not Found'
      description='Nothing to see here. Head back home'
      currentURL={`https://www.kellenbolger.ca${router.pathname}`}
    >
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
