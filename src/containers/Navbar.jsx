import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { navLinks } from "../utilities/NavbarDB";
// import logo from '../assets/FL-logo.png'
const Navbar = () => {
     const [activeNav, setActiveNav] = useState(0);
     const [nav, setNav] = useState(false);
     const handleClick = () => setNav(!nav);
  return (
    <div className='w-screen h-[60px] z-10  top-0 bg-purple-bold'>
        <div className="w-full h-full flex justify-between items-center">
<div className='mx-2 my-[28px] p-[5px] '>
  <a href="#home" className='text-[50px] font-[500] text-orange '>
{/* <img src={logo} alt="Logo" className='w-[50px] h-[30px] lg:w-[100px] lg:h-[50px]'/> */}
iBelieve
</a>
</div>
<ul className='md:flex hidden'>
{navLinks.map((val) => 
        <li onClick={() => setActiveNav(val.id)} key={val.id} className={`px-5 py-5 text-[18px] font-[500] text-light-black hover:text-cognac
       ${
        activeNav === val.id &&  "active"
       }
  `}> <a href={val.path}>
            {val.title}
          </a></li>
        )}
        <li className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-white border-solid mx-[7px] my-[13px] text-[18px] mr-[30px] font-[500] text-light-black hover:text-cognac hover:border-black'><a href="https://docs.google.com/document/d/1ObHo0lstIHhFRcjAsBmsZiFn1YhWmMQbh_Q1SNJNri4/edit?usp=sharing">Resume</a></li>
        </ul>
<div className="md:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-black m-2' /> : <XIcon className='w-10 text-black m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full h-[auto] px-[5px] bg-purple animate-scale_up_tr md:h-[auto]'}>
  {navLinks.map((val) => 
          <li key={val.id} onClick={()=> { 
            setActiveNav(val.id); 
             setNav(false)}}  className={`w-full px-5 py-5 text-[18px] font-[500] hover:text-cognac text-light-black 
       ${
        
        activeNav === val.id &&  "active" 
         
       }
  `}><a href={val.path}>
            {val.title}
            </a>
          </li>
        )}
          <li className='rounded-[10px] px-[20px] py-[5px] text-center border-[2px] border-white border-solid mx-[5px] my-[20px] text-[18px] font-[500] text-light-black hover:text-cognac hover:border-black'><a href="https://docs.google.com/document/d/1ObHo0lstIHhFRcjAsBmsZiFn1YhWmMQbh_Q1SNJNri4/edit?usp=sharing">Resume</a></li>
</ul>
    </div> 
  )
}

export default Navbar