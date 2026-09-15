import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";

import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";


function PortfolioHero() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* Background */}

      
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur">

              <FolderOpen size={18} />

              Our Portfolio

            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">

              Building

              <span className="block text-blue-400">

                Digital Products

              </span>

              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                That Drive Growth
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              We build scalable web applications, enterprise software,
              AI-powered solutions and digital platforms focused on
              performance, security and exceptional user experience.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button>

                <span className="flex items-center gap-3">

                  View Projects

                  <ArrowRight size={18} />

                </span>

              </Button>

              <Button variant="secondary">

                Start Your Project

              </Button>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            className="relative"
          >

            {/* Main Card */}

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800 p-10">

                <h3 className="text-3xl font-bold text-white">

                  Enterprise CRM Platform

                </h3>

                <p className="mt-5 text-blue-100">

                  React • TypeScript • Node.js • AWS

                </p>

                <div className="mt-12 rounded-2xl bg-white/10 p-8 backdrop-blur">

                  <div className="grid grid-cols-2 gap-5">

                    <div className="rounded-xl bg-white/10 p-5">
                      Dashboard
                    </div>

                    <div className="rounded-xl bg-white/10 p-5">
                      Analytics
                    </div>

                    <div className="rounded-xl bg-white/10 p-5">
                      Customers
                    </div>

                    <div className="rounded-xl bg-white/10 p-5">
                      Reports
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Floating Card */}

            <motion.div

              animate={{
                y: [0, -12, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 4,
              }}

              className="
                absolute
                -left-10
                bottom-12
                rounded-2xl
                border
                border-white/10
                bg-white/10
                p-5
                backdrop-blur-xl
              "

            >

              <p className="text-sm text-slate-300">

                Projects Delivered

              </p>

              <h4 className="mt-2 text-3xl font-bold text-white">

                06+

              </h4>

            </motion.div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default PortfolioHero;