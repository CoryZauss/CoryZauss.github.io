import type { NextPage } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import placeholder from "../../assets/space.png";

const Portrait: NextPage = () => {
  return (
    <motion.div
      className="flex m-5 overflow-hidden border-4 rounded-full w-30 h-30"
      whileHover={{
        boxShadow: "0px 0px 8px rgb(white,255,255)",
      }}
    >
      <Image src={placeholder} alt="photo of me" />
    </motion.div>
  );
};

export default Portrait;
