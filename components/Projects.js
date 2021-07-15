import Title from "@/components/Title"
import styles from "@/styles/AllProjects.module.css"
import Link from "next/link"
import Project from "@/components/Project"

const Projects = ({ projects, showLink }) => {
  return (
    <section className={`${styles.section} ${styles.projects}`}>
      <Title title='Featured Projects' />
      <div className={styles.center}>
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link href='/projects'>
          <a className={styles.btn}>projects </a>
        </Link>
      )}
    </section>
  )
}

export default Projects
