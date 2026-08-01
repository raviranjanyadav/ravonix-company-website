import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import TimelineItem from "./TimelineItem";
import { timeline } from "./timelineData";

function CompanyTimeline() {
  return (
    <section className="py-24">

      <Container>

        <SectionHeading
          badge="Journey"
          title="Our Growth"
          highlight="Timeline"
          description="Every milestone reflects our commitment to innovation and long-term success."
        />

        <div className="relative mx-auto mt-20 max-w-4xl">

          <div className="absolute left-4 top-0 h-full w-[2px] bg-slate-200" />

          <div className="space-y-16">

            {timeline.map((item) => (
              <TimelineItem
                key={item.title}
                {...item}
              />
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}

export default CompanyTimeline;