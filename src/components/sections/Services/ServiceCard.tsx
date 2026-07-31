import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";


interface ServiceCardProps {

  icon: LucideIcon;
  title: string;
  description: string;

}



function ServiceCard({

  icon: Icon,
  title,
  description,

}: ServiceCardProps) {


  return (

    <div

      className="
        group
        h-full
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-blue-500
        hover:shadow-xl
      "

    >



      {/* Icon */}

      <div

        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-blue-600
          group-hover:text-white
        "

      >

        <Icon size={32}/>


      </div>





      <h3 className="
        mt-6
        text-2xl
        font-bold
        text-slate-900
      ">

        {title}

      </h3>





      <p className="
        mt-4
        leading-7
        text-slate-600
      ">

        {description}

      </p>





      <button

        className="
          mt-8
          flex
          items-center
          gap-2
          font-semibold
          text-blue-600
          transition
          group-hover:gap-3
        "

      >

        Learn More

        <ArrowRight size={18}/>


      </button>



    </div>

  );

}


export default ServiceCard;