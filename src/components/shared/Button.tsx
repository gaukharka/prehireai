import React from "react";
import { type ButtonProps } from "../candidate/interface";

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  const base = "px-4 py-2 rounded-md font-medium shadow-sm focus:outline-none";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};
