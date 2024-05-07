"use client"

import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import DeleteNote from "./DeleteNote"

interface EditNoteFormProps {
 id: string
 title: string
 description: string
}

const EditNoteForm = ({ id, title, description }: EditNoteFormProps) => {
 const [newTitle, setNewTitle] = useState(title)
 const [newDescription, setNewDescription] = useState(description)

 const router = useRouter()

 const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()

  try {
   const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
    method: "PUT",
    headers: {
     "Content-Type": "application/json"
    },
    body: JSON.stringify({ newTitle, newDescription })
   })

   if (res.ok) {
    router.push("/")
    router.refresh()
   } else {
    throw new Error("Unable to create note")
   }

  } catch (error) {
   console.log(error)
  }
 }

 return (
  <form
   onSubmit={handleSubmit}
   className="max-w-sm mx-auto"
  >
   <fieldset className="flex flex-col gap-3 w-full">
    <legend className="mb-3">Edit Note</legend>
    <input
     type="text"
     placeholder="Title"
     value={newTitle}
     onChange={(e) => setNewTitle(e.target.value)}
     className="input input-bordered"
    />
    <textarea
     placeholder="Description"
     value={newDescription}
     onChange={(e) => setNewDescription(e.target.value)}
     className="textarea textarea-bordered textarea-md w-full text-base"
    />
    <button
     type="submit"
     className="btn"
    >
     Update
    </button>
    <DeleteNote id={id} />
   </fieldset>
  </form>
 )
}

export default EditNoteForm