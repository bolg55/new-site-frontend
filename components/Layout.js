import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import { useRouter } from "next/router"
import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
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
