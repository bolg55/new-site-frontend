import styles from "@/styles/About.module.css"

const About = ({ bio }) => {
  const { image, about, stack } = bio
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image.url}
        alt='kellen avatar'
        loading='lazy'
      />
      <div className={styles.about}>
        <p>{about}</p>
        <div className={styles.tech}>
          {stack.map((item) => {
            return (
              <span key={item.id} className={styles.icon}>
                {item.title}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
