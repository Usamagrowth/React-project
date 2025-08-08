import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
 const [action, setAction] = useState("Sign Up")
  return (
     <section className="w-full h-[400px]  bg-[url('./assets/1481.jpg')] bg-cover bg-center">
    <span className="flex justify-center items-center p-2" >
   <div className="flex flex-col gap-3 justify-center items-center h-[400px] w-[420px] rounded-[40px] border border-purple-500 backdrop-blur-[5px]">
    <div className="text-white text-[22px] font-bold">{action}</div>
<div className="flex flex-col gap-5">
 {action=== "Login"?<div></div>:<span className="flex flex-row items-center">
   <input className="relative outline-none bg-transparent text-white border border-purple-500 w-[350px] h-10 p-3 rounded-[40px]" type="text" placeholder="Username" />
   <FaRegUser className="absolute right-[10%] text-white" /> </span>}
 <span className="flex flex-row items-center ">
   <input className="relative outline-none bg-transparent text-white border border-purple-500 w-[350px] h-10 p-3 rounded-[40px]" type="email" placeholder="Email" />
   <MdEmail className="absolute right-[10%] text-white" />
 </span>
 <span className="flex flex-row items-center">
   <input className="relative outline-none bg-transparent text-white border border-purple-500 w-[350px] h-10 p-3 rounded-[40px]" type="password" placeholder="Password" />
   <RiLockPasswordLine className="absolute right-[10%] text-white" />
 </span> 
 {action=== "Sign Up"?<div></div>:<p className="text-white cursor-pointer">Forget Password?</p>}
</div>
<span className="flex flex-col gap-2 ">
{action==="Login"?<div></div>:<button className="bg-purple-500 text-white rounded-[40px] p-1 w-[350px]" onClick={() => setAction("Sign Up")} >Sign Up</button>}
{action==="Sign Up"?<div></div>:<button className="bg-purple-500 text-white rounded-[40px] p-1 w-[350px]" onClick={() => setAction("Sign Up")} >Login</button>}
{action==="Sign Up"?<div></div>:<p className="text-white flex gap-3 ">Don't Have Account?<span className={`font-bold cursor-pointer ${action==="Sign Up"?"submit":"Don't"}`}   onClick={() => setAction("Sign Up")}>Sign Up</span></p>}
{action==="Login"?<div></div>:<p className="text-white flex gap-3 ">Already Have Account?<span className={`font-bold cursor-pointer ${action==="Sign Up"?"submit":"Don't"}`}   onClick={() => setAction("Login")}>Login</span></p>}
</span>
</div>
</span>
</section>
  )
}

export default Login;