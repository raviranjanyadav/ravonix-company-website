import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Container from "@/components/ui/Container/Container";

const faqs = [
  {
    question: "What is the hiring process at RAVONIX?",
    answer:
      "Our hiring process includes application review, HR discussion, technical interview, final interview, and onboarding.",
  },
  {
    question: "Do you offer remote opportunities?",
    answer:
      "Yes. Depending on the role, we offer remote, hybrid, and on-site opportunities.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Absolutely. We regularly hire interns and fresh graduates who demonstrate strong fundamentals and a passion for learning.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "The complete process generally takes 1–3 weeks depending on the position and interview availability.",
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "Our teams work with React, Next.js, Angular, Node.js, Java, .NET, Python, AWS, Azure, AI/ML, Flutter, and modern cloud technologies.",
  },
];

function CareersFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <Container>

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to know before applying to RAVONIX.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={faq.question}
                layout
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >

                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="px-7 pb-7 leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );

          })}

        </div>

      </Container>
    </section>
  );
}

export default CareersFAQ;