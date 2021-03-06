import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Head from "next/head"
import styles from "@/styles/Layout.module.css"
import { useRouter } from "next/router"
import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Layout({
  title,
  keywords,
  description,
  currentURL,
  previewImage,
  children,
}) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        {/* Open Graph */}
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta property='og:url' content={currentURL} />
        <meta property='og:image' content={previewImage} key='ogimage' />
        <meta
          property='og:site_name'
          content='kellenbolger.ca'
          key='ogsitename'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@kellenbolger' key='twhandle' />
        <title>{title}</title>
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
    "My name is Kellen Bolger and I am a web developer who specializes in Next.js and React. I am open to offers, or contact me to work on your next project.",
  keywords:
    "next.js, react, javascript, developers kitchener, developers waterloo, front-end, front end developer, junior developer",
  previewImage:
    "https://res.cloudinary.com/dxghtqpao/image/upload/v1626978460/largeKBShort_dmz3d3.png",
  currentURL: "https://www.kellenbolger.ca",
}
