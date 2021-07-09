import Layout from "@/components/Layout"
import { useRouter } from "next/router"

const BlogPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <h2>Blog Page</h2>
      {router.query.slug}
    </Layout>
  )
}

export default BlogPage
