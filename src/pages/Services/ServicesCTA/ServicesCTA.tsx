import { motion } from "framer-motion";
import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";

function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />

      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />


      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center text-white"
        >

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Transform Your Business
            <span className="block">
              With Digital Innovation?
            </span>
          </h2>


          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Partner with RAVONIX Technologies to build scalable,
            secure and high-performance digital solutions that
            accelerate your business growth.
          </p>


          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Button>
              Start Your Project
            </Button>


            <Button variant="primary">
  Contact Us
</Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}

export default ServicesCTA;