import type { NextPage } from "next";
import { motion } from "framer-motion";

const Nav: NextPage = () => {
  return (
    <>
      <div className="fixed inset-x-0 top-0 left-0 right-0 z-50 flex-row py-5 transition-colors duration-300 border-b border-transparent ease backdrop-blur-xl ">
        <motion.div
          initial={{ x: -250 }}
          animate={{
            x: 20,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(255,0,0)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 10 }}
        >
          <div className="fixed inset-x-0 mx-auto text-5xl font-medium text-center xl:text-8xl text-red">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 250 }}
          animate={{
            x: -20,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(0,255,0)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 10 }}
        >
          <div className="fixed inset-x-0 mx-auto text-5xl font-medium text-center xl:text-8xl text-green">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -80, x: 0 }}
          animate={{
            y: 10,
            x: 0,
            opacity: 0,
            textShadow: "0px 0px 8px rgb(0,0,255)",
            transitionEnd: {
              display: "none",
            },
          }}
          transition={{ type: "spring", stiffness: 10 }}
        >
          <div className="fixed inset-x-0 mx-auto text-5xl font-medium text-center xl:text-8xl text-blue">
            {"< Cory Zauss />"}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
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
          <div className="text-5xl font-medium text-center xl:text-8xl">
            {"< Cory Zauss />"}
          </div>
          <div className="pt-2 text-sm font-medium text-center">
            {"Full Stack Developer | Problem Solver | Gamer"}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Nav;
