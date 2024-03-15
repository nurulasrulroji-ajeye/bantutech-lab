import { InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";
import {
  InputSizes,
  baseInputStyles,
  inputVariant,
  sizeVariant,
  variant,
} from "./utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: variant;
  sizes?: InputSizes;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, sizes, ...attr }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          baseInputStyles,
          inputVariant(variant),
          sizeVariant(sizes),
          className
        )}
        {...attr}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
