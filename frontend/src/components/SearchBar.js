import { useState } from "react"

function SearchBar({notes,setFilteredNotes}){

const [query,setQuery] = useState("")

const search=(value)=>{

setQuery(value)

const filtered = notes.filter(note=>
note.title.toLowerCase().includes(value.toLowerCase()) ||
note.content.toLowerCase().includes(value.toLowerCase()) ||
(note.tags || []).join(" ").toLowerCase().includes(value.toLowerCase())
)

setFilteredNotes(filtered)

}

return(

<div className="mb-6">

<input
placeholder="Search notes..."
value={query}
onChange={(e)=>search(e.target.value)}
className="w-full border p-3 rounded
bg-white dark:bg-gray-700
text-gray-800 dark:text-white"
/>

</div>

)

}

export default SearchBar
