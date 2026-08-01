import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/ui/Container/Container";

function MissionVision() {
  return (
    <section className="py-24">

      <Container>

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Mission & Vision
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Driven by Purpose,
            <span className="text-blue-600"> Focused on Innovation</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our mission and vision guide every product we build and every
            partnership we create.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Target size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To empower startups, SMEs and enterprises by delivering
              scalable software, AI-powered automation and cloud solutions
              that accelerate business growth.
            </p>

          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-10
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
              <Eye size={30} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-slate-900">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To become a globally trusted technology company known for
              innovation, engineering excellence and long-term client
              partnerships.
            </p>

          </motion.div>

        </div>

      </Container>

    </section>
  );
}

export default MissionVision;