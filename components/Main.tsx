import { ReactNode } from "react"

interface MainProps {
 children: ReactNode
}

const Main = ({ children }: MainProps) => {
 return (
  <main className="px-6">{children}</main>
 )
}

export default Main