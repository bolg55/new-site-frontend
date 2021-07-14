import {
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: "https://github.com/bolg55",
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: "https://www.linkedin.com/in/kellenbolger",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className='social-icon'></FaTwitterSquare>,
    url: "https://www.twitter.com/kellenbolger",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className='social-icon'></FaInstagramSquare>,
    url: "https://www.instagram.com/kellenbolger",
  },
]

const links = data.map((link) => {
  return (
    <li key={link.id}>
      <a href={link.url} target='_blank' rel='noreferrer'>
        {link.icon}
      </a>
    </li>
  )
})

export default function socialLinks({ styleClass }) {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
