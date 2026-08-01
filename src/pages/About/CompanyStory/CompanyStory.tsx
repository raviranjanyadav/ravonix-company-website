import Container from "@/components/ui/Container/Container";
import { motion } from "framer-motion";

function CompanyStory() {
  return (
    <section className="py-24">

      <Container>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Story
            </p>

            <h2 className="text-4xl font-bold leading-tight text-slate-900">
              From Vision to
              <span className="text-blue-600"> Innovation</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              RAVONIX Technologies was founded with a vision to help businesses
              accelerate digital transformation through scalable software,
              cloud technologies and AI-driven solutions.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              We combine strategy, design and engineering to build modern
              products that solve real business challenges and create lasting
              value for our clients.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              flex
              h-[420px]
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              via-cyan-500
              to-indigo-600
              text-white
              shadow-2xl
            "
          >

            <div className="text-center">

              <h3 className="text-5xl font-bold">
                RAVONIX
              </h3>

              <p className="mt-4 text-lg opacity-90">
                Empowering Businesses Through Technology
              </p>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default CompanyStory;