import Image from "next/image"
import Link from "next/link"
import logo from "@/public/kbShort.png"
import styles from "@/styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            <h2 className='logo'>
              {`{k`}
              <span className='greenB'>B</span>
              {`}`}
            </h2>
          </a>
        </Link>
      </div>
      <div className={styles.logoBig}>
        <Link href='/'>
          <a>
            <h2 className='logo'>
              {`{kellen`}
              <span className='greenB'>Bolger</span>
              {`}`}
            </h2>
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
              <a className='btn'>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
