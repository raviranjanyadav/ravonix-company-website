import Container from "@/components/ui/Container/Container";
import { testimonials } from "./testimonialData";


const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">

      <Container>

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="
          text-sm
          font-semibold
          tracking-widest
          uppercase
          text-blue-600
          ">
            Testimonials
          </p>


          <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
          ">
            What Our Clients Say
          </h2>


          <p className="
          mt-5
          text-gray-600
          text-lg
          ">
            Trusted by businesses worldwide for innovative software solutions.
          </p>

        </div>



        {/* Cards */}

        <div className="
        mt-14
        grid
        md:grid-cols-3
        gap-8
        ">


        {testimonials.map((item,index)=>(

          <div
          key={index}
          className="
          bg-white
          rounded-3xl
          p-8
          border
          border-gray-200
          hover:shadow-xl
          transition
          "
          >


            {/* Stars */}

            <div className="
            text-yellow-500
            text-xl
            ">
              ★★★★★
            </div>



            {/* Review */}

            <p className="
            mt-6
            text-gray-600
            leading-relaxed
            ">
              "{item.review}"
            </p>



            {/* User */}

            <div className="
            mt-8
            border-t
            pt-5
            ">

              <h4 className="
              font-semibold
              text-gray-900
              ">
                {item.name}
              </h4>


              <p className="
              text-sm
              text-gray-500
              ">
                {item.role}
              </p>

            </div>


          </div>

        ))}


        </div>


      </Container>

    </section>
  );
};


export default Testimonials;