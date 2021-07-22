import Layout from "@/components/Layout"
import { gql } from "@apollo/client"
import client from "../../apollo-client"
import Blogs from "@/components/Blogs"
import { useRouter } from "next/router"

export default function BlogPage({ blogs }) {
  const router = useRouter()
  return (
    <Layout
      title='Blog | kellenbolger.ca'
      description='Coming Soon'
      currentURL={`https://www.kellenbolger.ca${router.pathname}`}
    >
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
