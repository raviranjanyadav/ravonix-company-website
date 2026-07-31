import Container from "@/components/ui/Container/Container";
import {
  Search,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const process = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Understanding business goals, users and project requirements.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description:
      "Preparing roadmap, architecture and sprint planning.",
  },
  {
    icon: PenTool,
    title: "UI / UX Design",
    description:
      "Creating modern and user-friendly interfaces.",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building scalable web, mobile and enterprise applications.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    description:
      "Quality assurance, performance and security testing.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Launching your product with continuous support.",
  },
];

function Process() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Our Process
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            How We Build Digital Products
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A proven agile development process that ensures quality,
            transparency and faster delivery.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-8 top-0 hidden h-full w-1 rounded-full bg-blue-100 lg:block"></div>

          <div className="space-y-10">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 rounded-3xl bg-white p-8 shadow-sm"
                >
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Icon size={30} />
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-600">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
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

export default Process;