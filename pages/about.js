import Layout from "@/components/Layout"
import Experience from "@/components/Experience"
import About from "@/components/About"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import Title from "@/components/Title"

export default function AboutPage({ jobs, bio }) {
  return (
    <Layout
      title='About | kellenbolger.ca'
      description='About Kellen Bolger, a web developer from Waterloo, Ontario, Canada'
    >
      <div>
        <div>
          <Title title='About Me' />
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
