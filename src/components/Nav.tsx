import type { NextPage } from "next";
import { motion } from "framer-motion";

const Nav: NextPage = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 left-0 right-0 z-50 flex-row py-5 text-5xl font-medium transition-colors duration-300 border-b border-transparent ease backdrop-blur-xl sm:text-6xl md:text-7xl xl:text-7xl 2xl:text-8xl">
        <motion.div
          initial={{ y: 1000 }}
          animate={{
            y: 0,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(255,100,150)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 18 }}
        >
          <div className="fixed inset-x-0 mx-auto text-center text-red">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 1000 }}
          animate={{
            y: -10,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(100,255,100)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 16 }}
        >
          <div className="fixed inset-x-0 mx-auto font-medium text-center text-green">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 1000 }}
          animate={{
            y: 0,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(100,150,255)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <div className="fixed inset-x-0 mx-auto font-medium text-center text-blue">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          initial={{
            scale: 1,
            opacity: 0,
            display: "none",
          }}
          animate={{
            display: "block",
            scale: 1,
            opacity: 1,

            transition: {
              delay: 2.6,
              ease: [2, 0, 1, 0.67],
            },
            transitionEnd: {
              textShadow: "0px 0px 8px rgb(255,255,255)",
            },
          }}
        >
          <div className="font-medium text-center ">{"< Cory Zauss />"}</div>
          <div className="pt-2 text-sm font-medium text-center">
            {"Full Stack Developer | Problem Solver | Gamer"}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Nav;
