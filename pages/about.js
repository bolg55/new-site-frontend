import Layout from "@/components/Layout"
import Experience from "@/components/Experience"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import Title from "@/components/Title"

export default function AboutPage({ jobs }) {
  return (
    <Layout
      title='About | kellenbolger.ca'
      description='About Kellen Bolger, a web developer from Waterloo, Ontario, Canada'
    >
      <div>
        <div>
          <div>
            <Title title='About Me' />
          </div>
        </div>

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
          position
          company
          date
          desc {
            name
          }
        }
      }
    `,
  })

  return {
    props: {
      jobs: data.jobs,
    },
  }
}
