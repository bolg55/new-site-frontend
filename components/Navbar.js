import Link from "next/link"
import styles from "@/styles/Navbar.module.css"
import Image from "next/image"
import logo from "@/public/kbShort.png"
import PageLinks from "../constants/links"
import { FaAlignRight } from "react-icons/fa"

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <Image
              className={logo}
              src={logo}
              alt='logo'
              height={100}
              width={100}
            />
          </a>
        </Link>
      </div>
      <nav>
        <button
          type='button'
          className={styles.toggleBtn}
          onClick={toggleSidebar}
        >
          <FaAlignRight></FaAlignRight>
        </button>
        <PageLinks styleClass={styles.navlinks} />
      </nav>
    </header>
  )
}

export default Navbar
