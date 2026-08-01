import type { ReactNode } from "react";
import Aurora from "./Aurora";
import FloatingBlobs from "./FloatingBlobs";
import Grid from "./Grid";

interface Props {
  children: ReactNode;
}

function Background({ children }: Props) {
  return (
    <div className="relative overflow-hidden">

      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />

      <Aurora />

      <Grid />

      <FloatingBlobs />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:radial-gradient(#000_0.7px,transparent_0.7px)]
          [background-size:18px_18px]
        "
      />

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}

export default Background;