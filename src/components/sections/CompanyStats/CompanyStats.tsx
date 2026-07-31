import { motion } from "framer-motion";

const stats = [
  {
    number: "120+",
    label: "Projects Delivered",
  },
  {
    number: "40+",
    label: "Happy Clients",
  },
  {
    number: "10+",
    label: "Countries Served",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];

function CompanyStats() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition"
            >
              <h2 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyStats;