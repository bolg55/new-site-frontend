import styles from "@/styles/Sidebar.module.css"
import { FaTimes } from "react-icons/fa"
import PageLinks from "../constants/links"
import SocialLinks from "../constants/socialLinks"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? `${styles.showSidebar}` : ""}`}
    >
      <button className={styles.closeBtn} onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className={styles.sideContainer}>
        <PageLinks styleClass={`${isOpen ? `${styles.sidebarLinks}` : ""}`} />
        <SocialLinks
          styleClass={`${styles.social} ${styles["social-link"]} ${
            isOpen ? `${styles.sidebarIcons}` : ""
          }`}
        />
      </div>
    </aside>
  )
}

export default Sidebar
