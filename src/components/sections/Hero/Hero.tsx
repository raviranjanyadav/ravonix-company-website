import Button from "@/components/ui/Button/Button";
import Container from "@/components/ui/Container/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* Left Content */}

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Digital Transformation Partner
            </p>


            <h1 className="
              text-5xl
              font-bold
              leading-tight
              text-slate-900
              lg:text-6xl
            ">
              Building
              <span className="text-blue-600">
                {" "}Future Ready
              </span>
              Digital Solutions
            </h1>


            <p className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-slate-600
            ">
              RAVONIX helps businesses transform ideas into
              scalable software solutions with modern
              technologies and innovative strategies.
            </p>


            <div className="mt-8 flex gap-4">

              <Button>
                Start Project
              </Button>


              <button
                className="
                rounded-xl
                border
                border-slate-300
                px-6
                py-3
                font-semibold
                text-slate-700
                hover:bg-slate-100
                "
              >
                View Services
              </button>

            </div>


          </div>



          {/* Right Visual */}

          <div className="
            flex
            h-[400px]
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            text-white
          ">

            <div className="text-center">

              <h2 className="text-4xl font-bold">
                RAVONIX
              </h2>

              <p className="mt-3">
                Software Innovation
              </p>

            </div>

          </div>


        </div>

      </Container>

    </section>
  );
}

export default Hero;