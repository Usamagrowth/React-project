import { useState } from "react";
const State = () => {

//     const[count, setCount] = useState(1);
//     function add() {
//         setCount(count +1)
//     };
//    function remove() {
//       if (count > 0) 
//         setCount(count -1)
      
//     };

  const [name, setName] = useState("");
  const login = () => {
    setName("Usama Omodara")
  };

  const logout = () => {
    setName("")
  };
    
  return ( 
//     <div className="p-8 items-center flex gap-2">
//       <button onClick={remove} 
//         className="rounded-[40px] text-[16px] border border-red-500 p-1">-</button>
//       <span className="font-bold">{count}</span>
//      <button onClick={add}
//            className="rounded-[20px] text-[16px] border border-purple-500 p-1">+</button>
//       </div>
<span className="flex col gap-4 p-8">
  <p>{name}</p>
  <button onClick={login}
   className="rounded-[20px] text-[16px] border border-purple-500 p-1">+</button>  
    <button onClick={logout}
   className="rounded-[20px] text-[16px] border border-purple-500 p-1">-</button>  
  
   </span>
  )
}

export default State;