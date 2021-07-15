import Title from "@/components/Title"
import styles from "@/styles/Projects.module.css"
import Link from "next/link"
import Project from "@/components/Project"
import { useRouter } from "next/router"

const Projects = ({ projects, title, showLink }) => {
  const router = useRouter()
  return (
    <section
      className={`${styles.featured} ${
        router.pathname === "/" ? `${styles.projects}` : ""
      }`}
    >
      <Title title={title} />
      <div className={styles.center}>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link href='/projects'>
          <a className={styles.btn}>all projects</a>
        </Link>
      )}
    </section>
  )
}

export default Projects
