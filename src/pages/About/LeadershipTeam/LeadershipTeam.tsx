import Container from "@/components/ui/Container/Container";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { team } from "./teamData";

function LeadershipTeam() {
  return (
    <section className="py-24">

      <Container>

        <SectionHeading
          badge="Leadership"
          title="Meet Our"
          highlight="Team"
          description="A passionate team focused on building innovative digital solutions."
        />


        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {team.map((member) => (
            <div
              key={member.name}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Avatar Placeholder */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-900
                  text-xl
                  font-bold
                  text-white
                "
              >
                {member.name.charAt(0)}
              </div>


              <h3 className="mt-6 text-xl font-semibold">
                {member.name}
              </h3>


              <p className="mt-1 text-sm font-medium text-blue-600">
                {member.role}
              </p>


              <p className="mt-4 text-sm leading-6 text-slate-600">
                {member.description}
              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}

export default LeadershipTeam;