import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Blogs from "@/components/Blogs"
import { gql } from "@apollo/client"
import client from "../apollo-client"

export default function HomePage({ projects, blogs }) {
  return (
    <div>
      <Layout>
        <Hero />
        <Services />
        <Projects projects={projects} title='Featured projects' showLink />
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
        blogs(sort: "date:DESC", limit: 3) {
          id
          slug
          title
          content
          image {
            url
          }
          desc
          date
          category {
            title
          }
        }
      }
    `,
  })

  return {
    props: {
      projects: data.projects,
      blogs: data.blogs,
    },
  }
}
