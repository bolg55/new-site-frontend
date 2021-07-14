import Link from "next/link"

const data = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "about", url: "/about" },
  { id: 3, text: "projects", url: "/projects" },
  { id: 4, text: "blog", url: "/blog" },
  { id: 5, text: "contact", url: "/contact" },
]

const templinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link href={link.url}>
        <a>{link.text}</a>
      </Link>
    </li>
  )
})

export default function links({ styleClass }) {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {templinks}
    </ul>
  )
}
