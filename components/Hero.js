import styles from "@/styles/Hero.module.css"
import SocialLinks from "@/components/SocialLinks"
import { FaArrowDown } from "react-icons/fa"

export default function Hero() {
  return (
    <header>
      <div className={styles.hero}>
        <div className={styles.info}>
          <div className='underline'></div>
          <h1>Hi, I&apos;m Kellen.</h1>
          <h4>A web developer specializing in Next.js, React and more.</h4>
          <div className={styles.buttonContainer}>
            <div className={`${styles.btn} ${styles.btn1}`}>
              I&apos;m Looking to Hire
            </div>
            <div className={`${styles.btn} ${styles.btn2}`}>
              I Need a Website
            </div>
          </div>
          <SocialLinks />
          <div className={styles.arrow}>
            <FaArrowDown />
          </div>
        </div>
      </div>
    </header>
  )
}
