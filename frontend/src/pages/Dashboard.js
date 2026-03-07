import { useState,useEffect } from "react"
import API from "../services/api"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import NoteCard from "../components/NoteCard"
import SearchBar from "../components/SearchBar"
import LoadingSkeleton from "../components/LoadingSkeleton"
import { toast } from "react-toastify"

import { useNavigate } from "react-router-dom"
import { isLoggedIn } from "../utils/authCheck"

function Dashboard(){

const navigate = useNavigate()

const [notes,setNotes] = useState([])
const [filteredNotes,setFilteredNotes] = useState([])

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [tags,setTags] = useState("")

const [editing,setEditing] = useState(null)

const [loading,setLoading] = useState(true)

const fetchNotes = async()=>{

setLoading(true)

const res = await API.get("/notes")

setNotes(res.data)
setFilteredNotes(res.data)

setLoading(false)

}

const createNote = async()=>{

await API.post("/notes",{
title,
content,
tags: tags.split(" ")
})

toast.success("Note created")

setTitle("")
setContent("")
setTags("")

fetchNotes()

}

const deleteNote = async(id)=>{

await API.delete(`/notes/${id}`)

toast.success("Note deleted")

fetchNotes()

}

const editNote = (note)=>{
setEditing(note)
setTitle(note.title)
setContent(note.content)
setTags((note.tags || []).join(" "))
}

const updateNote = async()=>{

await API.put(`/notes/${editing._id}`,{
title,
content,
tags: tags.split(" ")
})

toast.success("Note updated")

setEditing(null)

setTitle("")
setContent("")
setTags("")

fetchNotes()

}

const togglePin = async(note)=>{

await API.put(`/notes/${note._id}`,{
pinned: !note.pinned
})

fetchNotes()

}

useEffect(()=>{

if(!isLoggedIn()){
navigate("/login")
return
}

fetchNotes()

},[navigate])

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-gray-100 dark:bg-gray-900 min-h-screen">

<Header/>

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
My Notes
</h1>

<SearchBar notes={notes} setFilteredNotes={setFilteredNotes}/>

<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-8">

<input
className="w-full border p-3 rounded mb-4
bg-gray-50 dark:bg-gray-700
text-gray-800 dark:text-white"
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<textarea
className="w-full border p-3 rounded mb-4
bg-gray-50 dark:bg-gray-700
text-gray-800 dark:text-white"
placeholder="Content"
value={content}
onChange={(e)=>setContent(e.target.value)}
/>

<input
className="w-full border p-3 rounded mb-4
bg-gray-50 dark:bg-gray-700
text-gray-800 dark:text-white"
placeholder="Tags (space separated)"
value={tags}
onChange={(e)=>setTags(e.target.value)}
/>

{editing ? (

<button
onClick={updateNote}
className="bg-blue-600 text-white px-6 py-2 rounded"
>
Update Note
</button>

) : (

<button
onClick={createNote}
className="bg-indigo-600 text-white px-6 py-2 rounded"
>
Add Note
</button>

)}

</div>

{loading ? (

<LoadingSkeleton/>

) : (

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{filteredNotes
.sort((a,b)=>b.pinned - a.pinned)
.map(note => (

<NoteCard
key={note._id}
note={note}
deleteNote={deleteNote}
editNote={editNote}
togglePin={togglePin}
/>

))}

</div>

)}

</div>

</div>

</div>

)

}

export default Dashboard
