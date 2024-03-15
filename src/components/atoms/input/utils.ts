export type InputSizes = "sm" | "md" | "lg";
export type variant = "primary" | "secondary" | "light" | "lighten";

export const baseInputStyles =
  "border-[1.5px] font-comfortaa bg-transparent rounded-md shadow-md disabled:cursor-not-allowed focus:shadow-lg transition-all ease-in-out duration-500 outline-none py-3 px-4 leading-none font-semibold";

export const sizeVariant = (size?: InputSizes) => {
  const defaultSizeStyles = "py-3 px-4";
  const smStyles = "py-2 px-3 text-sm placeholder:text-sm";
  const lgStyles = "py-4 px-6 text-lg placeholder:text-lg";
  switch (size) {
    case "sm": {
      return smStyles;
    }
    case "md": {
      return defaultSizeStyles;
    }
    case "lg": {
      return lgStyles;
    }
    default: {
      return defaultSizeStyles;
    }
  }
};

export const inputVariant = (variant?: variant) => {
  const primaryStyles =
    "border-primary disabled:border-primary/20 disabled:hover:border-primary/20 focus:border-primary hover:border-blue-500";
  switch (variant) {
    case "primary":
      return primaryStyles;
    case "secondary":
      return "";
    default:
      return undefined;
  }
};
