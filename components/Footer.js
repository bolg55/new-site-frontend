import styles from "@/styles/Footer.module.css"

import SocialLinks from "../constants/socialLinks"
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <SocialLinks styleClass={`${styles.social} ${styles["social-link"]}`} />
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className={styles.kbgreen}>KellenBolger.ca</span>
      </p>
    </div>
  )
}
