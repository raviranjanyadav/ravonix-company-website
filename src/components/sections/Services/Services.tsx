import {
  Monitor,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Palette,
} from "lucide-react";

import Container from "@/components/ui/Container/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Modern, scalable and high-performance web applications built with React, Next.js and enterprise technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Cross-platform Android & iOS applications with Flutter and React Native.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "AI-powered automation, chatbots, recommendation engines and intelligent business solutions.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "AWS, Azure and cloud-native architecture for secure and scalable applications.",
  },
  {
    icon: Database,
    title: "CRM & ERP",
    description:
      "Custom CRM, ERP and enterprise management systems tailored for your business.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Premium user experience and modern interface design focused on conversion and usability.",
  },
];

function Services() {
  return (
    <section className="py-28 bg-white">
      <Container>

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Services
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            What We Do
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We build premium digital products that help businesses grow,
            automate operations and deliver exceptional customer experiences.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;