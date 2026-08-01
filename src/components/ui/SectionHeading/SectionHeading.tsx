import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}

        {highlight && (
          <span className="text-blue-600"> {highlight}</span>
        )}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeading;