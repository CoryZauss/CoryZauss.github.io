import type { NextPage } from "next";
import { motion } from "framer-motion";

const Personal: NextPage = () => {
  return (
    <>
      <div>
        <motion.div
          className="mb-8 text-4xl text-center lg:text-6xl"
          initial={{ x: 1000 }}
          animate={{
            x: 0,
            transition: {
              duration: 2.5,
            },
            transitionEnd: {
              textShadow: "0px 0px 8px rgb(255,255,255)",
            },
          }}
          transition={{ type: "spring" }}
        >
          About Me
        </motion.div>
        <p>
          I am a very active person and enjoy staying in shape. I love to get
          outside and play <a className="text-foam"> basketball</a> or go on
          <a className="text-foam"> snowboarding</a> trips.
        </p>
        <br></br>
        <p>
          I enjoy playing video games with my friends when I have the free time
          and love to play
          <a className="text-miami"> Apex Legends</a>,{" "}
          <a className="text-miami">Valorant</a>, the occasional
          <a className="text-miami"> League of legends </a>, game and{" "}
          <a className="text-miami">Path of Exile</a>.
        </p>
        <br></br>
        <p>
          I enjoy watching movies and keeping up with the{" "}
          <a className="text-foam">NBA</a>, currently love watching my home team
          the <a className="text-foam"> Charlotte Hornets</a> play.
        </p>
      </div>
    </>
  );
};

export default Personal;
