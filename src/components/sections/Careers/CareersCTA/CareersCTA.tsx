import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";

function CareersCTA() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-950 via-blue-900 to-slate-950" />

      <div className="absolute -left-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/5
            p-10
            backdrop-blur-xl
            lg:p-16
          "
        >

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">

                <BriefcaseBusiness size={18} />

                We're Hiring

              </div>

              <h2 className="text-4xl font-bold leading-tight text-white lg:text-6xl">

                Build Something

                <span className="block text-blue-400">

                  Extraordinary

                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

                Join a passionate team creating world-class digital
                products for startups, enterprises and global brands.

                If you're ready to innovate, we'd love to meet you.

              </p>

            </div>

            {/* Right */}

            <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

              <div>

                <h3 className="text-2xl font-bold text-white">

                  Ready to Start?

                </h3>

                <p className="mt-3 leading-7 text-slate-300">

                  Explore current opportunities or send us your
                  resume. Even if there's no matching role today,
                  we'd love to connect.

                </p>

              </div>

              <div className="space-y-4">

                <Button>

                  <span className="flex items-center gap-3">

                    View Open Positions

                    <ArrowRight size={18} />

                  </span>

                </Button>

                <a

                  href="mailto:careers@ravonix.com"

                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/15
                    px-6
                    py-4
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >

                  <Mail size={18} />

                  careers@ravonix.com

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default CareersCTA;