import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariants = "base" | "outlined";
export type ColorVariants =
  | "primary"
  | "secondary"
  | "light"
  | "outline-primary"
  | "outline-secondary"
  | "outline-light";
type ButtonSizes = "sm" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  color?: ColorVariants;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, color, ...rest }, ref) => {
    const baseStyles = "inline-flex leading-normal rounded-full font-medium";
    const disabledStyles = "disabled:cursor-not-allowed disabled:opacity-50";

    const variantStyles = (variantStyle?: ButtonVariants) => {
      switch (variantStyle) {
        case "base": {
          return "btn-base";
        }
        case "outlined":
          return "btn-outlined";
        default: {
          return undefined;
        }
      }
    };
    const variantColor = (color?: ColorVariants) => {
      switch (color) {
        case "primary": {
          return "btn-primary";
        }
        case "secondary": {
          return "btn-secondary";
        }
        case "light": {
          return "btn-light";
        }
        case "outline-light": {
          return "btn-outline-light";
        }
        case "outline-primary": {
          return "btn-outline-primary";
        }
        case "outline-secondary": {
          return "btn-outline-secondary";
        }
        default: {
          return undefined;
        }
      }
    };

    const sizeStyles = (sizeStyle?: ButtonSizes) => {
      switch (sizeStyle) {
        case "sm": {
          return "text-sm py-1 px-8";
        }
        case "lg": {
          return "text-lg py-3 px-8";
        }
        default: {
          return "text-base py-3 px-8 text-sm";
        }
      }
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          disabledStyles,
          variantStyles(variant),
          sizeStyles(size),
          variantColor(color),
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
