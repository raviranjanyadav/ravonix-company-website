import {
  ShieldCheck,
  Rocket,
  Brain,
  Cloud,
  Headphones,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure, scalable and industry-standard software architecture.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description:
      "Agile development process with faster project delivery.",
  },
  {
    icon: Brain,
    title: "AI Powered",
    description:
      "Modern AI solutions to automate and optimize your business.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "AWS, Azure and cloud-ready infrastructure.",
  },
  {
    icon: Headphones,
    title: "24×7 Support",
    description:
      "Long-term maintenance and dedicated technical support.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "High-quality coding standards and extensive testing.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Why RAVONIX?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We deliver secure, scalable and innovative digital solutions that
            help businesses grow with confidence.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default WhyChoose;