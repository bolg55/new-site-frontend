import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import { useRouter } from "next/router"

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={router.pathname !== "/" ? styles.container : ""}>
        {children}
      </div>

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: "Kellen Bolger | A front-end web developer",
  description:
    "Next.js and React specialist. Open to offers or contact me to work on your project.",
  keywords:
    "next.js, react, javascript, developers kitchener, developers waterloo, front-end, junior developer",
}
