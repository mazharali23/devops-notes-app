import { Link } from "react-router-dom"
import { FaStickyNote } from "react-icons/fa"

function Sidebar(){

return(

<div className="w-64 bg-gray-900 text-white min-h-screen p-6">

<h2 className="text-2xl font-bold mb-10">
DevOps Notes
</h2>

<ul className="space-y-6">

<li className="flex items-center gap-3">
<FaStickyNote/>
<Link to="/">Dashboard</Link>
</li>

</ul>

</div>

)

}

export default Sidebar
