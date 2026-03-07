function LoadingSkeleton(){

return(

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{[1,2,3,4,5,6].map((i)=>(
<div
key={i}
className="animate-pulse p-5 rounded-xl
bg-gray-200 dark:bg-gray-700
h-40"
/>
))}

</div>

)

}

export default LoadingSkeleton
