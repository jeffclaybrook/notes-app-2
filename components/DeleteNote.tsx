"use client"

import { useRouter } from "next/navigation"
import { Trash } from "lucide-react"

interface DeleteNoteProps {
 id: string
}

const DeleteNote = ({ id }: DeleteNoteProps) => {
 const router = useRouter()

 const handleDelete = async () => {
  const confirmed = confirm("Are you sure you want to delete this note?")

  if (confirmed) {
   const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
    method: "DELETE"
   })

   if (res.ok) {
    router.refresh()
   }
  }
 }

 return (
  <button className="btn text-red-400" onClick={handleDelete}>
   <Trash />
  </button>
 )
}

export default DeleteNote