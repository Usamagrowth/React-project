import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo11.png"
const Navbar = () => {
    return(
    <nav className='flex justify-between items-center px-8 py-4 bg-[#418841] text-white'>
      <div className='text-xl font-bold'>
        <img src={logo} alt="Logo" />
       </div>
      <div>
        <ul className='flex justify-between gap-9 cursor-pointer'>
          <li className='hover:text-purple-500'>Home</li>
          <li className='hover:text-purple-500' >About</li>
          <li className='hover:text-purple-500'>Services</li>
          <li className='hover:text-purple-500'>Contact</li>
        </ul>
      </div>
      <div className="hidden lg:block">
      <button className='bg-purple-700 px-6 py-1 rounded-xl hover:bg-black hover:text-black-300'>Login</button>
      </div>
      <div className="pl-7"> 
      <CiMenuBurger className="flex lg:hidden cursor-pointer" />
      </div>
      </nav>
    )
};

export default Navbar;