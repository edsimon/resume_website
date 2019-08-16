import React from 'react';
import './assets/css/index.css';
import SideBreak from "./components/SideBreak";
import Knowledge from "./components/Knowledge"
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Companies from "./components/Companies";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Fade from "react-reveal/Fade";
import GoodBye from "./components/GoodBye";






function App() {
  return (
    <div className="App">
        <Banner/>
        <SideBreak header={"Hi, I'm Simon. Nice to meet you!"} paragraph={"Since I first started programming four years ago I did't know it would result in my biggest passions. The deeper my knowledge got the more interested i got in the way machine can learn. Now i try to learn all i can about mathematics and the fundamentals of different machine learning algorithms."}/>
        <Fade bottom><Knowledge/></Fade>
        <Fade><Projects/></Fade>
        <Fade><Companies/></Fade>
        <SideBreak header={"This is my history"} paragraph={"Since I started studies towards computer science i accomplished a lot. Interests have grown and some others faded. But some all in all I have learned that it is always a pleasure to work with coding of any kind!"}/>
        <Fade bottom><Resume/></Fade>
        <AboutMe/>
        <GoodBye/>
        <Footer/>
    </div>
  );
}

export default App;
