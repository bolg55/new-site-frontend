import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Experience from "@/components/Experience"
import Featured from "@/components/Featured"
import FeaturedBlogs from "@/components/FeaturedBlogs"
import { gql } from "@apollo/client"
import client from "../apollo-client"

export default function HomePage({ jobs }) {
  return (
    <div>
      <Layout>
        <Hero />
        <Services />
        <Experience jobs={jobs} />
        <Featured />
        <FeaturedBlogs />
      </Layout>
    </div>
  )
}

export async function getServerSideProps({ jobs }) {
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
