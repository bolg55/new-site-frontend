import Layout from "@/components/Layout"
import styles from "@/styles/Contact.module.css"
import { useRouter } from "next/router"

export default function ContactPage() {
  const router = useRouter()
  return (
    <Layout
      title='Contact | kellenbolger.ca'
      description="Contact me today about building your project or if you're looking to hire, I am open to new opportunities"
      currentURL={`https://www.kellenbolger.ca${router.pathname}`}
    >
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h1>Get in touch</h1>
          <div className='underline'></div>
          <form action='https://formspree.io/f/mzbyakqa' method='POST'>
            <div className={styles.formGroup}>
              <input type='text' name='_gotcha' className={styles.gotcha} />
              <input
                type='text'
                placeholder='name'
                className={styles.formControl}
                name='name'
              />
              <input
                type='email'
                placeholder='email'
                className={styles.formControl}
                name='_replyto'
              />
              <textarea
                name='message'
                rows='5'
                placeholder='message'
                className={styles.formControl}
              ></textarea>
            </div>
            <button type='submit' className={styles.submitBtn}>
              Submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}
