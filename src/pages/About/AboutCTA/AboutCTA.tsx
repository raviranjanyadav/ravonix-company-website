import Container from "@/components/ui/Container/Container";
import Button from "@/components/ui/Button/Button";


function AboutCTA() {
  return (
    <section className="py-24">

      <Container>

        <div
          className="
            overflow-hidden
            rounded-3xl
            bg-slate-900
            px-8
            py-16
            text-center
            md:px-16
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Ready to Build Something
            <span className="text-blue-500">
              {" "}Amazing?
            </span>
          </h2>


          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-slate-300
            "
          >
            Partner with RAVONIX to create scalable software
            solutions that help your business grow faster.
          </p>


          <div className="mt-8 flex justify-center">

            <Button>
              Contact Us
            </Button>

          </div>


        </div>

      </Container>

    </section>
  );
}


export default AboutCTA;