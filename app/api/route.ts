import { NextResponse } from "next/server"
import Note from "@/models/Note"
import db from "@/lib/db"

export async function POST(req: any) {
 const {
  title,
  description
 } = await req.json()
 await db()
 await Note.create({ title, description })
 return NextResponse.json({ message: "Note created" }, { status: 201 })
}

export async function GET() {
 await db()
 const notes = await Note.find()
 return NextResponse.json({ notes })
}

export async function DELETE(req: any) {
 const id = req.nextUrl.searchParams.get("id")
 await db()
 await Note.findByIdAndDelete(id)
 return NextResponse.json({ message: "Note deleted" }, { status: 200 })
}