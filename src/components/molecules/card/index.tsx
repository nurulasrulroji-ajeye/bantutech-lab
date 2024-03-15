import clsx from "clsx";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};
export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={clsx(
        "shadow-md rounded-md p-4 w-full border border-light hover:shadow-lg transition-shadow ease-in-out duration-500",
        className
      )}
    >
      {children}
    </div>
  );
};
