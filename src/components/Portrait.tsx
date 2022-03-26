import type { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholder from "../../assets/space.png";

const Portrait: NextPage = () => {
  return (
    <>
      <motion.div
        className="flex w-40 h-40 m-5 overflow-hidden border-2 rounded-full "
        whileHover={{
          rotate: 360,
        }}
        whileTap={{ scale: 1.4, rotate: -360 }}
        animate={{
          scale: 2,
          transition: {
            duration: 2.5
          }
        }}
      >
        <Image src={placeholder} alt="photo of me" />
      </motion.div>
    </>
  );
};

export default Portrait;
