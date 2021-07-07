import Title from "@/components/Title"
import styles from "@/styles/Services.module.css"
import Image from "next/image"
import pic from "@/public/kbShort.png"

export default function Services() {
  return (
    <div className={styles.services}>
      <Title title='Services' />
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>Some Heading</h2>
          <h4>Some subheading</h4>
          <p>Some paragraph about the image</p>
        </div>
        <div className={styles.col2}>
          <Image src={pic} alt={"Placeholder image"} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.col2}>
          <Image src={pic} alt={"Placeholder image"} />
        </div>
        <div className={styles.col1}>
          <h2>Some Heading</h2>
          <h4>Some subheading</h4>
          <p>Some paragraph about the image</p>
        </div>
      </div>
    </div>
  )
}
