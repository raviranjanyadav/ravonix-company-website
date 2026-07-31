import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
}: ButtonProps) {

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800",
  };

  return (
    <button
      className={`
        rounded-xl 
        px-6 
        py-3 
        font-semibold
        transition
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;