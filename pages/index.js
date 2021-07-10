import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Experience from "@/components/Experience"
import Featured from "@/components/Featured"
import FeaturedBlogs from "@/components/FeaturedBlogs"

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Hero />
        <Services />
        <Experience />
        <Featured />
        <FeaturedBlogs />
      </Layout>
    </div>
  )
}
