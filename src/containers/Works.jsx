import React from 'react'
import ProjectOne from '../components/ProjectOne'
import ProjectTwo from '../components/ProjectTwo'
import colorGame from '../assets/screencapture-adesina-abiodun-github-io-RGB-Color-Game-colorgame-colorgame-html-2023-01-07-17_29_27.png'
import WeatherApp from '../assets/weatherapp.png'
import Pizza from '../assets/pizza webpage.png'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import medium from '../assets/medium latest.png'
import Article from '../components/Article'
import ProjectThree from '../components/ProjectThree'



const Works = () => {
  return (
    <div id="works">
       <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[80px] mb-[5px] font-[700]">WORKS</h2>
        <div className="flex justify-center"> <p className="border-b-purple-bold border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
<div className="mt-[30px]">
  <ProjectOne projectimage={colorGame} header="The Great RBG Color Game" stackone={html} stacktwo={css} stackthree={js} explanation="It is a color game to test your proficiency with RBG Color code. It was built with HTML, Vanilla CSS and Javascript" />
  <ProjectTwo  projectimage={WeatherApp} header="Weather Forecast App" stackone={html} stackthree={js} stackfour={react} stackfive={tailwind} explanation="A Landing page built with HTML, Tailwind CSS, Javascript and React js" />
  <ProjectThree projectimage={Pizza} header="Pizza App" stackone={html} stacktwo={css} stackthree={js} stackfour={react} explanation="A web page craeted to order pizza of your choice. It was built with HTML, Javascript, React js and CSS Styled Component" />
 
  <div className="">
   <h2 className="lg:text-[40px] text-[30px] text-light-black text-center mt-[60px] mb-[5px] font-[700]">ARTICLES</h2>
        <div className="flex justify-center"> <p className="border-purple-bold border-solid border-b-[3px] w-[150px] md:w-[300px] text-center rounded-[2px]"></p></div>
        <div className="mt-[30px]">  <Article header="Access to all my articles on Medium" explanation="" articleimage={medium}/></div>
        </div>
  </div>
    </div>
  )
}

export default Works