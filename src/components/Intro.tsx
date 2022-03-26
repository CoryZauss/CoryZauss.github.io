import type { NextPage } from "next";
import { motion, transform } from "framer-motion";

interface Props {
  offsety: number;
}

const Intro: NextPage<Props> = ({ offsety }) => {
  return (
    <>
      <motion.div
        className=" w-36"
        whileHover={{
          textShadow: "0px 0px 8px rgb(255,255,255)",
          scale: 1.1,
        }}
        whileTap={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
        }}
      >
        <motion.p
          className="mb-8 font-bold text-miami"
          initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 200, delay: 4 }}
        >
          Hey, Im Cory
        </motion.p>
        <ul className="mb-8 font-bold ">
          <motion.li
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 5 }}
          >
            I am a
          </motion.li>
          <br></br>
          <motion.li
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 6 }}
          >
            Passionate
          </motion.li>
          <motion.li
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 6 }}
          >
            Developer
          </motion.li>
          <br></br>
          <motion.li className="text-foam" initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 200, delay: 7 }}>Lifelong</motion.li>
          <motion.li className="text-foam" initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
            transition={{ type: "spring", stiffness: 200, delay: 7 }}>Learner</motion.li>
          <br></br>
          <motion.li className="text-miami" initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 200, delay: 8 }}>somthing</motion.li>
          <motion.li className="text-miami" initial={{ x: -300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 200, delay: 8 }}>somthing</motion.li>
        </ul>
      </motion.div>
    </>
  );
};

export default Intro;