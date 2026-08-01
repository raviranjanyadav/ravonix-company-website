interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10">

      <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-600" />

      <span className="text-sm font-semibold text-blue-600">
        {year}
      </span>

      <h3 className="mt-2 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>

    </div>
  );
}

export default TimelineItem;