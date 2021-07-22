import Title from "@/components/Title"
import styles from "@/styles/Services.module.css"
import Image from "next/image"
import pic1 from "@/public/undrawPurple.svg"
import pic2 from "@/public/undrawCoding.svg"
import pic3 from "@/public/undrawSEO.svg"
import Link from "next/link"

const Services = () => {
  return (
    <div className={styles.services}>
      <a name='services' href='#'></a>
      <Title title='Services' />
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>Web development</h2>
          <h4>
            I specialize in building with Next.js which allows for production
            grade React apps at scale. Sleek, responsive and SEO-friendly
            websites/ apps that can be developed very quickly while using the
            latest and best in web development technology.
          </h4>
        </div>
        <div className={styles.col2}>
          <Image src={pic1} alt='web development' />
        </div>
      </div>

      <div className={`${styles.container} ${styles.containerOpp}`}>
        <div className={styles.col2}>
          <Image src={pic2} alt='coding' />
        </div>
        <div className={styles.col1}>
          <h2>Web design</h2>
          <h4>
            You need a website that function&apos;s correctly. Responsive design
            is an absolute must and I always make sure that every site and web
            app I build is fully responsive.
          </h4>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h2>SEO</h2>
          <h4>
            A website isn&apos;t much good if nobody can find it on the
            internet. Search Engine Optimization (SEO) is vital, and I always
            ensure to take best practices into account when building a site.
          </h4>
        </div>
        <div className={styles.col2}>
          <Image src={pic3} alt='SEO' />
        </div>
      </div>
      <Link href='/contact'>
        <a className={styles.btn}>Contact me</a>
      </Link>
    </div>
  )
}

export default Services
