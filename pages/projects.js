import Layout from "@/components/Layout"
import Projects from "@/components/Projects"
import { gql } from "@apollo/client"
import client from "../apollo-client"
import { useRouter } from "next/router"

export default function ProjectsPage({ projects }) {
  const router = useRouter()
  return (
    <Layout
      title='Projects | kellenbolger.ca'
      description='A collection of web development projects I have worked on using Next.js, React, Python, Wordpress and more.'
      keywords='next.js, react, css, html, python, sql, graphQL, Strapi, SaSS, Machine Learning, jupyter notebook, wordpress'
      currentURL={`https://www.kellenbolger.ca${router.pathname}`}
    >
      <Projects projects={projects} title='All projects' showContact />
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
    revalidate: 60 * 60 * 24, // 1 day in seconds
  }
}
