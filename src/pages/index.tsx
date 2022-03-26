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
        <div
          className="container flex justify-between p-5 pt-10 mt-20 "
          style={{ height: 1000 }} >
          <Intro offsety={offsetY} />
          <Portrait />
        </div>
        <div className="container flex p-5 mt-10" style={{ height: 1000 }}>
          <Resume />
        </div>
        <div className="container flex p-5 mt-10" style={{ height: 1000 }}>
          <Projects />
        </div>
        <div className="container flex p-5 mt-10" style={{ height: 1000 }}>
          <Personal />
        </div>
    </div>
  );
}

export default Home
