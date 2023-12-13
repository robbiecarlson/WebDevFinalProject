export default function Item ({name, score, category}) {
    return (
       <div className="text-black p-2 w-full max-w-md m-3 ml-8 rounded-xl bg-white border border-cyan-500">
           <h2 className="text-lg mr-2 font-bold">{name}</h2>
           <p className="text-lg mr-2">Score: {score}⭐</p>
           <p className="text-sm mr-2">Genre: {category} </p>
       </div>
    );
   }