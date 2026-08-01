import { motion } from "framer-motion";

function FloatingBlobs() {
  return (
    <>
      {[1, 2, 3, 4].map((item) => (
        <motion.div
          key={item}
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 4 + item,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-white/40
            backdrop-blur-xl
          "
          style={{
            width: 20 + item * 15,
            height: 20 + item * 15,
            left: `${15 + item * 18}%`,
            top: `${20 + item * 15}%`,
          }}
        />
      ))}
    </>
  );
}

export default FloatingBlobs;