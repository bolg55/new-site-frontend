import Layout from "@/components/Layout"
import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Blogs from "@/components/Blogs"

export default function BlogPage({ blogs }) {
  return (
    <Layout title='Blog | kellenbolger.ca'>
      <Blogs blogs={blogs} title='Blog' />
    </Layout>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        blogs {
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
      blogs: data.blogs,
    },
  }
}
