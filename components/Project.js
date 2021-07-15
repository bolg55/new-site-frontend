import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import styles from "@/styles/AllProjects.module.css"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className={styles.project}>
      <img className={styles.projectImg} src={image.url}></img>
      <div className={styles.projectInfo}>
        <span className={styles.projectNumber}>0{index + 1}.</span>
        <h3>{title}</h3>
        <p className={styles.projectDesc}>{description}</p>
        <div className={styles.projectStack}>
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className={styles.projectLinks}>
          <a href={github}>
            <FaGithubSquare className={styles.projectIcon} />
          </a>
          <a href={url}>
            <FaShareSquare className={styles.projectIcon} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
