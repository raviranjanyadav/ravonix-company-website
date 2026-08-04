import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

import Container from "@/components/ui/Container/Container";
import JobCard from "./JobCard";
import { jobs } from "./jobs";

const departments = [
  "All",
  "Engineering",
  "Design",
  "Business",
];

function JobOpenings() {

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All");

  const filteredJobs = useMemo(() => {

    return jobs.filter((job) => {

      const matchesDepartment =
        department === "All" ||
        job.department === department;

      const keyword = search.toLowerCase();

      const matchesSearch =
        job.title.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(keyword)
        );

      return matchesDepartment && matchesSearch;

    });

  }, [department, search]);

  return (

    <section className="relative overflow-hidden py-24">

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">

            Careers

          </p>

          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">

            Current Open Positions

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Join a passionate team building
            world-class digital products.

          </p>

        </motion.div>

        {/* Search */}

        <div className="mx-auto mt-16 max-w-2xl">

          <div className="relative">

            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input

              type="text"

              placeholder="Search job title, location or skill..."

              value={search}

              onChange={(e) =>
                setSearch(e.target.value)
              }

              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                py-4
                pl-14
                pr-5
                outline-none
                transition
                focus:border-blue-600
              "
            />

          </div>

        </div>

        {/* Filter */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {departments.map((item) => (

            <button

              key={item}

              onClick={() =>
                setDepartment(item)
              }

              className={`
                rounded-full
                px-6
                py-3
                font-medium
                transition
                ${
                  department === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }
              `}
            >

              {item}

            </button>

          ))}

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {filteredJobs.map((job) => (

            <JobCard
              key={job.id}
              job={job}
            />

          ))}

        </div>

        {/* Empty */}

        {filteredJobs.length === 0 && (

          <div className="mt-24 text-center">

            <h3 className="text-2xl font-bold">

              No Jobs Found

            </h3>

            <p className="mt-4 text-slate-600">

              Try another keyword or department.

            </p>

          </div>

        )}

      </Container>

    </section>

  );
}

export default JobOpenings;