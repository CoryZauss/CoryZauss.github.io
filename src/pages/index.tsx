import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Portrait from "../components/Portrait";
import Nav from "../components/Nav";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="overflow-hidden text-white">
      <Nav />

      <div style={{ height: 100 }}></div>
      <div className="container flex justify-between h-screen p-5 mt-10 sm:justify-evenly sm:text-2xl md:m-16 md:text-4xl md:justify-around lg:text-4xl lg:m-10 lg:mt-20 lg:justify-evenly 2xl:text-5xl 2xl:ml-0">
        <Intro offsety={offsetY} />
        <Portrait />
      </div>
      <div className="container flex justify-between h-screen p-5 sm:justify-evenly sm:text-2xl md:ml-16 md:text-4xl md:justify-around lg:text-4xl lg:justify-evenly 2xl:text-5xl ">
        <Resume />
      </div>
      <div className="h-screen"> </div>
      <div className="container flex justify-between h-screen p-5 mt-10 sm:justify-evenly sm:text-2xl md:ml-16 md:text-4xl md:justify-around lg:text-4xl lg:justify-evenly 2xl:text-5xl lg:mt-36 ">
        <Projects />
      </div>
      <div className="container flex justify-between h-screen p-5 mt-10 sm:justify-evenly sm:text-2xl md:ml-16 md:text-4xl md:justify-around lg:text-4xl lg:justify-evenly 2xl:text-5xl ">
        <Personal />
      </div>
    </div>
  );
}

export default Home
