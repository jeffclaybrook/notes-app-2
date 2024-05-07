import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = () => (
 <nav className="navbar bg-base-100 lg:px-8">
  <div className="flex-1">
   <Link href={"/"} className="btn btn-ghost text-xl">My Notes</Link>
  </div>
  <div className="flex-none">
  <ThemeSwitch />
  </div>
 </nav>
)

export default Navbar