import type { NextPage } from 'next'
import { motion } from "framer-motion"
import Portrait from "../components/Portrait";
import Nav from "../components/Nav";
import Personal from "../components/Personal";
import Projects from "../components/Projects";
import Resume from "../components/Resume";

const Home: NextPage = () => {
  return (
    <div className="text-white">
      <Nav />
      <div className="container flex justify-end p-5 pt-10 mt-20">
        <Portrait />
      </div>
      <div className="container flex p-5 pt-10 mt-10">
        <Resume />
      </div>
      <div className="container flex p-5 pt-10 mt-10">
        <Projects />
      </div>
      <div className="container flex p-5 pt-10 mt-10">
        <Personal />
      </div>
    </div>
  );
}

export default Home
