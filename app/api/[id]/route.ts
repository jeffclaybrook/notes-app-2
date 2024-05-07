import { NextResponse } from "next/server"
import Note from "@/models/Note"
import db from "@/lib/db"

export async function PUT(req: any, {
 params
}: {
 params: any
}) {
 const { id } = params

 const {
  newTitle: title,
  newDescription: description
 } = await req.json()

 await db()
 await Note.findByIdAndUpdate(id, { title, description })
 return NextResponse.json({ message: "Note updated" }, { status: 200 })
}

export async function GET(req: any, {
 params
}: {
 params: any
}) {
 const { id } = params
 await db()
 const note = await Note.findOne({ _id: id })
 return NextResponse.json({ note }, { status: 200 })
}