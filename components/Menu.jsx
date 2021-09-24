import Link from "next/link"

const Menu = () => (
  <nav className="p-10">
    <ul className="flex space-x-10 justify-center">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </li>
      <li>
        <Link href="/events">
          <a>Events</a>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Menu
