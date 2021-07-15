import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import FeaturedBlogs from "@/components/FeaturedBlogs"
import { gql } from "@apollo/client"
import client from "../apollo-client"

export default function HomePage({ projects }) {
  return (
    <div>
      <Layout>
        <Hero />
        <Services />
        <Projects projects={projects} title='Featured projects' showLink />
        <FeaturedBlogs />
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        projects(where: { featured: true }) {
          id
          title
          description
          github
          url
          stack {
            title
          }
          image {
            url
          }
        }
      }
    `,
  })

  return {
    props: {
      projects: data.projects,
    },
  }
}
