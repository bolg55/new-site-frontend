import styles from "@/styles/Links.module.css"

import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
    url: "https://www.instagram.com/kellenbolger",
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: "https://www.linkedin.com/in/kellenbolger",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
    url: "https://www.twitter.com/kellenbolger",
  },
  {
    id: 4,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: "https://github.com/bolg55",
  },
]

const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} className={styles["social-link"]}>
        {link.icon}
      </a>
    </li>
  )
})

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      <ul>{links}</ul>
    </div>
  )
}
