import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";

const benefits = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "Work with modern technologies and build products that solve real business challenges.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Continuous learning, mentorship and opportunities to grow into leadership roles.",
  },
  {
    icon: Globe,
    title: "Global Projects",
    description:
      "Collaborate with clients across different industries and international markets.",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description:
      "A collaborative culture where ideas are valued and everyone contributes.",
  },
];

function WhyJoin() {
  return (
    <section className="relative overflow-hidden py-24">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why Join Us
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Grow Your Career With RAVONIX
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We're building a workplace where innovation, learning and teamwork
            come together to create meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  p-8
                  shadow-sm
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:border-blue-500
                  hover:shadow-xl
                "
              >
                <div className="
                    mb-6
                    flex
                    h-14
                    w-14
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
                    size={28}
                    className="text-blue-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}

export default WhyJoin;