import { motion } from "framer-motion";
import {
  FileText,
  Phone,
  Code2,
  Users,
  PartyPopper,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your application along with your resume and portfolio.",
    icon: FileText,
  },
  {
    number: "02",
    title: "HR Discussion",
    description:
      "A short conversation to understand your background and career goals.",
    icon: Phone,
  },
  {
    number: "03",
    title: "Technical Interview",
    description:
      "Demonstrate your technical skills through problem solving and discussion.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Final Interview",
    description:
      "Meet our leadership team and discuss your role within RAVONIX.",
    icon: Users,
  },
  {
    number: "05",
    title: "Welcome Aboard",
    description:
      "Receive your offer and start your journey with the RAVONIX family.",
    icon: PartyPopper,
  },
];

function HiringProcess() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50" />

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Hiring Process
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Journey Starts Here
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our hiring process is transparent, simple and designed to help you
            showcase your best skills.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          <div className="absolute left-7 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:block" />

          <div className="space-y-10">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative flex flex-col gap-6 lg:flex-row lg:items-start"
                >
                  {/* Circle */}

                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">
                    <Icon size={28} />
                  </div>

                  {/* Card */}

                  <div
                    className="
                      flex-1
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:shadow-xl
                    "
                  >
                    <span className="text-sm font-semibold tracking-widest text-blue-600">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </Container>

    </section>
  );
}

export default HiringProcess;