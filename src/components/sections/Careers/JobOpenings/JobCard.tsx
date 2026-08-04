import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock3,
  MapPin,
} from "lucide-react";

import type { Job } from "./jobs";
import Button from "@/components/ui/Button/Button";

interface JobCardProps {
  job: Job;
}

function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      <div className="flex items-start justify-between gap-5">
        <div>

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-50
              px-4
              py-1
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            {job.department}
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900">
            {job.title}
          </h3>

        </div>

        <div
          className="
            rounded-2xl
            bg-blue-100
            p-3
            text-blue-600
          "
        >
          <Briefcase size={24} />
        </div>
      </div>

      <p className="mt-6 leading-7 text-slate-600">
        {job.description}
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3 text-slate-600">
          <MapPin size={18} />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Clock3 size={18} />
          <span>{job.experience}</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <Briefcase size={18} />
          <span>{job.type}</span>
        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        {job.skills.map((skill) => (

          <span
            key={skill}
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-4
              py-2
              text-sm
              font-medium
            "
          >
            {skill}
          </span>

        ))}

      </div>

      <div className="mt-10 flex items-center justify-between">

        <Button>
          Apply Now
        </Button>

        <ArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-2
            text-blue-600
          "
        />

      </div>

    </motion.div>
  );
}

export default JobCard;