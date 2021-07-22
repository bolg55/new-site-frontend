import Title from "@/components/Title"
import styles from "@/styles/Experience.module.css"
import { useState } from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import Link from "next/link"

export default function Experience({ jobs }) {
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className={styles.experience}>
      <div className={styles.title}>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className={styles.jobsCenter}>
        <div className={styles.btnContainer}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${styles.jobBtn} ${
                  index === value && `${styles.activeBtn}`
                }`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className={styles.jobInfo}>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className={styles.jobDate}>{date}</p>
          {desc.map((item) => {
            return (
              <div key={item.id} className={styles.jobDesc}>
                <FaAngleDoubleRight className={styles.jobIcon} />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link href='/contact'>
        <a className={styles.btn}>Contact me</a>
      </Link>
    </section>
  )
}
