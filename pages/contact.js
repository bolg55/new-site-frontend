import Layout from "@/components/Layout"
import styles from "@/styles/Contact.module.css"

export default function ContactPage() {
  return (
    <Layout title='Contact | kellenbolger.ca'>
      <section className={styles.contactPage}>
        <article className={styles.contactForm}>
          <h3>Get in touch</h3>
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
