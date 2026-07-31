import Container from "@/components/ui/Container/Container";


const CTA = () => {
  return (

    <section className="py-24">

      <Container>

        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gray-900
          px-8
          py-16
          md:px-16
          text-center
          "
        >


          {/* Background Glow */}

          <div
          className="
          absolute
          -top-20
          -right-20
          h-60
          w-60
          rounded-full
          bg-blue-600/30
          blur-3xl
          "
          />


          <div className="relative z-10">


            <p
            className="
            text-sm
            uppercase
            tracking-widest
            font-semibold
            text-blue-400
            "
            >
              Let's Build Together
            </p>



            <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            text-white
            "
            >
              Ready to Transform
              <br />
              Your Business?
            </h2>



            <p
            className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-300
            text-lg
            "
            >
              Build scalable digital products with RAVONIX.
              From idea to deployment, we help businesses grow faster.
            </p>



            <div
            className="
            mt-10
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-4
            "
            >


              <button
              className="
              rounded-xl
              bg-white
              px-8
              py-3
              font-semibold
              text-gray-900
              hover:bg-gray-100
              transition
              "
              >
                Start Project →
              </button>



              <button
              className="
              rounded-xl
              border
              border-gray-600
              px-8
              py-3
              font-semibold
              text-white
              hover:bg-white/10
              transition
              "
              >
                Contact Us
              </button>



            </div>


          </div>


        </div>


      </Container>


    </section>

  );
};


export default CTA;