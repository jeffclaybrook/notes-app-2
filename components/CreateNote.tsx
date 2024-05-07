import Link from "next/link"
import { Plus } from "lucide-react"

const CreateNote = () => {
 return (
  <Link href={"/addNote"} className="btn btn-circle fixed bottom-8 right-8">
   <Plus />
  </Link>
 )
}

export default CreateNote