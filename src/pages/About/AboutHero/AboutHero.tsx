import Container from "@/components/ui/Container/Container";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            About RAVONIX
          </p>

          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
            Building the Future of
            <span className="text-blue-600"> Digital Innovation</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            RAVONIX Technologies is a software development company focused on
            building scalable web applications, enterprise platforms, AI
            solutions and cloud-based products for businesses worldwide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Start Your Project
            </Link>

            <Link
              to="/portfolio"
              className="rounded-xl border border-slate-300 px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              View Our Work
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default AboutHero;