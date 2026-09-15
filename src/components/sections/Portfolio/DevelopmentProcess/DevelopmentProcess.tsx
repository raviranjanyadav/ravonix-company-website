import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your business goals, users, and technical requirements.",
    icon: Search,
  },
  {
    step: "02",
    title: "UI / UX Design",
    description:
      "Interactive wireframes and modern interfaces focused on user experience.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Scalable frontend and backend development using modern technologies.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing & QA",
    description:
      "Every feature is tested for quality, performance, and security.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Deployment",
    description:
      "Launch, monitor, and continuously improve your product.",
    icon: Rocket,
  },
];

function DevelopmentProcess() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          badge="Our Process"
          title="How We"
          highlight="Build Products"
          description="A transparent development workflow designed to deliver high-quality software on time."
        />

        <div className="relative mt-20">

          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-slate-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-5">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl">
                    <Icon size={34} />
                  </div>

                  <span className="mt-6 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                    Step {item.step}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {index !== process.length - 1 && (
                    <ArrowRight className="mx-auto mt-8 hidden text-blue-600 lg:block" />
                  )}
                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default DevelopmentProcess;