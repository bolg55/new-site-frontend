import Layout from "@/components/Layout"
import Projects from "@/components/Projects"
import { gql } from "@apollo/client"
import client from "../apollo-client"

export default function ProjectsPage({ projects }) {
  return (
    <Layout
      title='Projects | kellenbolger.ca'
      description='A collection of web development projects I have worked on using Next.js, React, Python, Wordpress and more.'
    >
      <Projects projects={projects} title='All projects' />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        projects {
          id
          featured
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
