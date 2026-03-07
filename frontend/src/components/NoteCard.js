import { FaTrash, FaEdit, FaThumbtack } from "react-icons/fa"

function NoteCard({note,deleteNote,editNote,togglePin}){

return(

<div className={`p-5 rounded-xl shadow hover:shadow-lg transition
bg-white dark:bg-gray-800
${note.pinned ? "border-l-4 border-yellow-400" : ""}`}>

<div className="flex justify-between items-start">

<h2 className="text-xl font-semibold">
{note.title}
</h2>

<button
onClick={()=>togglePin(note)}
className="text-gray-500 hover:text-yellow-500"
>
<FaThumbtack/>
</button>

</div>

<p className="text-gray-600 dark:text-gray-300 mt-3 mb-4">
{note.content}
</p>

<div className="flex flex-wrap gap-2 mb-4">

{(note.tags || []).map((tag,i)=>(
<span
key={i}
className="bg-indigo-100 dark:bg-indigo-900
text-indigo-600 dark:text-indigo-300
text-sm px-2 py-1 rounded"
>
{tag}
</span>
))}

</div>

<div className="flex justify-end gap-4">

<button
onClick={()=>editNote(note)}
className="text-blue-500 hover:text-blue-700"
>
<FaEdit/>
</button>

<button
onClick={()=>deleteNote(note._id)}
className="text-red-500 hover:text-red-700"
>
<FaTrash/>
</button>

</div>

</div>

)

}

export default NoteCard
