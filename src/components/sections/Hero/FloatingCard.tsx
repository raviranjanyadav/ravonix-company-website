import { motion } from "framer-motion";

interface Props {
  title: string;
  value: string;
}

function FloatingCard({ title, value }: Props) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl"
    >
      <h3 className="text-3xl font-bold text-blue-600">{value}</h3>

      <p className="mt-1 text-sm text-slate-500">{title}</p>
    </motion.div>
  );
}

export default FloatingCard;