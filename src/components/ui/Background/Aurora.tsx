import { motion } from "framer-motion";

function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -left-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          right-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/20
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/15
          blur-[180px]
        "
      />
    </>
  );
}

export default Aurora;