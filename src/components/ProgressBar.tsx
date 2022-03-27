import type { NextPage } from "next";
import { motion, transform } from "framer-motion";

interface Props {
  offsety: number;
}

const ProgressBar: NextPage<Props> = ({ offsety }) => {
  return <motion.div className="fixed bottom-0 w-screen h-2 bg-gradient-to-r from-miami to-foam"></motion.div>;
}

export default ProgressBar
