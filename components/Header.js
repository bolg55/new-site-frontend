import Link from "next/link"
import styles from "@/styles/Header.module.css"
import Image from "next/image"
import logo from "@/public/kbShort.png"
import { FaAlignRight } from "react-icons/fa"

export default function Header() {
  return (
    <header className={styles.header}>
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
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button type='button' className={styles.toggleBtn}>
        <FaAlignRight></FaAlignRight>
      </button>
    </header>
  )
}
