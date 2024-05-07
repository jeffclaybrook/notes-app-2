import Link from "next/link"

const getNotes = async () => {
 try {
  const res = await fetch("http://localhost:3000/api/notes", {
   cache: "no-store"
  })

  if (!res.ok) {
   throw new Error("Unable to fetch notes")
  }

  return res.json()
 } catch (error) {
  console.log(error)
 }
}

const NotesList = async () => {
 const { notes } = await getNotes()

 return (
  <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4">
   {notes.map((item: any) => (
    <Link key={item.id} href={`/editNote/${item._id}`} className="card shadow-sm p-4 border rounded-lg border-slate-300 my-3">
     <h2 className="font-semibold text-xl">{item.title}</h2>
     <p>{item.description}</p>
    </Link>
   ))}
  </div>
 )
}

export default NotesList