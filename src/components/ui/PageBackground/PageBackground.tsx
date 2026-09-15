import { motion } from "framer-motion";

interface PageBackgroundProps {
  theme?: "ravonix" | "light";
}

function PageBackground({
  theme = "ravonix",
}: PageBackgroundProps) {
  if (theme === "light") {
    return (
      <>
        <div className="absolute inset-0 -z-30 bg-gradient-to-b from-white via-slate-50 to-white" />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-32 top-0 -z-20 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-32 bottom-0 -z-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[140px]"
        />
      </>
    );
  }

  return (
    <>
      <div
        className="
          absolute
          inset-0
          -z-30
          bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_22%),linear-gradient(135deg,#030712_0%,#07111f_32%,#0f172a_70%,#111827_100%)]
        "
      />

      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_0%,transparent_35%,rgba(255,255,255,0.03)_100%)]" />

      <motion.div
        animate={{
          x: [0, 90, 0],
          y: [0, -70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -left-24
          top-0
          -z-20
          h-[560px]
          w-[560px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -right-20
          bottom-0
          -z-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/16
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/3
          -z-20
          h-[380px]
          w-[380px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/12
          blur-[130px]
        "
      />

      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.85)_100%)]" />
    </>
  );
}

export default PageBackground;