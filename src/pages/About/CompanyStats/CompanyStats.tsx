import Container from "@/components/ui/Container/Container";


const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Successful software solutions delivered.",
  },
  {
    value: "30+",
    label: "Happy Clients",
    description: "Businesses growing with our technology.",
  },
  {
    value: "8+",
    label: "Years Experience",
    description: "Expertise in modern software development.",
  },
  {
    value: "10+",
    label: "Countries Served",
    description: "Helping businesses globally.",
  },
];


function CompanyStats() {
  return (
    <section className="py-24">

      <Container>

        <div
          className="
            grid
            gap-8
            rounded-3xl
            bg-slate-900
            p-10
            md:grid-cols-4
          "
        >

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >

              <h3
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {stat.value}
              </h3>


              <p
                className="
                  mt-3
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {stat.label}
              </p>


              <p
                className="
                  mt-2
                  text-sm
                  text-slate-300
                "
              >
                {stat.description}
              </p>


            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}


export default CompanyStats;