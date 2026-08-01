import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import ValueCard from "./ValueCard";
import { values } from "./valuesData";

function CoreValues() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeading
          badge="Core Values"
          title="What Drives"
          highlight="RAVONIX"
          description="Our values shape our culture, guide our decisions and define how we build world-class digital products."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              {...value}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default CoreValues;