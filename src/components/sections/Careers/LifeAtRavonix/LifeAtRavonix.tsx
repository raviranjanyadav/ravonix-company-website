import { motion } from "framer-motion";
import {
  CheckCircle,
  Briefcase,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";

const features = [
  {
    icon: Briefcase,
    title: "Ownership Culture",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Team",
  },
  {
    icon: CheckCircle,
    title: "Innovation First",
  },
];

const stats = [
  {
    value: "120+",
    label: "Projects Delivered",
  },
  {
    value: "15+",
    label: "Countries Served",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Learning Mindset",
  },
];

function LifeAtRavonix() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 text-white shadow-2xl">

              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

              <h3 className="text-3xl font-bold">
                People First.
              </h3>

              <p className="mt-5 text-white/80 leading-8">
                We create an environment where talented people can
                learn, innovate, collaborate and build products that
                make an impact worldwide.
              </p>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
              Life at RAVONIX
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Where Great Ideas Become Great Products
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We believe innovation starts with people. Our culture encourages
              ownership, collaboration, continuous learning and solving
              meaningful business problems.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              {features.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="rounded-xl bg-blue-100 p-3">
                      <Icon className="text-blue-600" size={22} />
                    </div>

                    <span className="font-semibold text-slate-800">
                      {item.title}
                    </span>

                  </div>

                );

              })}

            </div>

          </motion.div>

        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-xl"
            >

              <h3 className="text-4xl font-bold text-blue-600">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  );
}

export default LifeAtRavonix;