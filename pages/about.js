import Layout from "@/components/Layout"
import Experience from "@/components/Experience"
import About from "@/components/About"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import Title from "@/components/Title"
import { useRouter } from "next/router"

export default function AboutPage({ jobs, bio }) {
  const router = useRouter()
  return (
    <Layout
      title='About | kellenbolger.ca'
      description='My name is Kellen Bolger and I am a developer from Waterloo, Ontario, Canada. I am always open to new opportunities! Feel free to send me a message '
      currentURL={`https://www.kellenbolger.ca${router.pathname}`}
      previewImage={bio.image.url}
    >
      <div>
        <div>
          <Title title='About me' />
        </div>
        <About bio={bio} />

        <Experience jobs={jobs} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        jobs {
          id
          date
          position
          company
          desc {
            name
          }
        }
        bio {
          about
          image {
            url
          }
          stack {
            title
          }
        }
      }
    `,
  })

  return {
    props: {
      jobs: data.jobs,
      bio: data.bio,
    },
  }
}
