import type { ReactNode } from "react";

import PageBackground from "@/components/ui/PageBackground/PageBackground";

interface PageWrapperProps {
  children: ReactNode;
  theme?: "ravonix" | "light";
}

function PageWrapper({
  children,
  theme = "ravonix",
}: PageWrapperProps) {
  return (
    <main className="relative overflow-hidden">

      <PageBackground theme={theme} />

      {children}

    </main>
  );
}

export default PageWrapper;