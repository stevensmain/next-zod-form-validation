import { clsx } from "clsx";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={twMerge(
        clsx(
          "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
          className
        )
      )}
    >
      {children}
    </button>
  );
}
