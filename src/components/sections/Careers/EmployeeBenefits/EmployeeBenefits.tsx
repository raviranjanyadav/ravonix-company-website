import { motion } from "framer-motion";
import {
  Wallet,
  GraduationCap,
  Laptop,
  Plane,
  HeartHandshake,
  Trophy,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";

const benefits = [
  {
    icon: Wallet,
    title: "Competitive Salary",
    description:
      "We offer industry-leading compensation packages with performance-based rewards.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Certifications",
    description:
      "Upskill with sponsored certifications, workshops, and continuous learning programs.",
  },
  {
    icon: Laptop,
    title: "Hybrid & Remote Work",
    description:
      "Work flexibly with a healthy balance between office collaboration and remote productivity.",
  },
  {
    icon: Plane,
    title: "Paid Time Off",
    description:
      "Recharge with generous paid leave, holidays, and wellness breaks.",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Culture",
    description:
      "Be part of a collaborative team that values trust, ownership, and innovation.",
  },
  {
    icon: Trophy,
    title: "Career Growth",
    description:
      "Clear career paths, mentorship, and opportunities to grow into leadership roles.",
  },
];

function EmployeeBenefits() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/30 to-white" />

      <Container>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Employee Benefits
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Why You'll Love Working Here
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We invest in our people with meaningful benefits that support
            professional growth, well-being, and work-life balance.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-100
                    transition
                    duration-300
                    group-hover:bg-blue-600
                  "
                >
                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}

export default EmployeeBenefits;