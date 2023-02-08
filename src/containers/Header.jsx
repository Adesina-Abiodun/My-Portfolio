import React from 'react'
import Typed from 'react-typed'
import bitmoji from '../assets/round1.png'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import gmail from '../assets/gmail.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import medium from '../assets/medium.svg'

const Header = () => {
  return (
    <div className="flex justify-center items-center px-[10px] h-[680px] lg:h-[650px] bg-white" id="home">
      <div className="flex flex-col items-center">
        <img src={bitmoji} alt="Firdaws Lamidi's Bitmoji" className="md:w-[150px] w-[100px] h-[100%] rounded-[50%]" />
        <h1 className="md:text-[50px] text-[35px] text-light-black text-center my-1 font-[600]">Hi, I'm Adesina Abiodun</h1>
        <small className='text-[18px] font-[500] '>a.k.a iBelieve</small>
       <div className="flex justify-center my-1"> <Typed className="text-purple-bold text-[30px] md:text-[40px] text-center" strings={["Front end Developer.", "Technical Writer."]}
        typeSpeed={100} backSpeed={50} loop/></div>
      
<ul className="flex justify-between mt-[20px] list-none">
  <li className="px-[5px]"><a href="https://github.com/adesina-abiodun"> <img src={github} alt="Github icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://www.linkedin.com/in/adesina-abiodun-paul-b513bb143"> <img src={linkedin} alt="Linkedin icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="mailto:adesinaabiodunpaul@gmail.com"> <img src={gmail} alt="Gmail icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://adesinaabiodunpaul.medium.com/"> <img src={medium} alt="Medium icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://twitter.com/adesinaabiodunp"><img src={twitter} alt="Twitter icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
  <li className="px-[5px]"><a href="https://www.instagram.com/adesinaabiodunpaul/"> <img src={instagram} alt="Instagram icon" className="fill-black w-[20px] h-[20px] md:w-[30px] md:h-[30px]" /></a></li>
 </ul>
 <div className="mt-[60px] animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
</div>
      </div>
    </div>
  )
}

export default Header