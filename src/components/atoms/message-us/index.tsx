import clsx from "clsx";
import { useScrollStore } from "../../../store";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

type MessageUsProps = {
  path: string;
  onOpenMsg: () => void;
};
export const MessageUs = ({ path, onOpenMsg }: MessageUsProps) => {
  const scrollPos = useScrollStore.use.scrollPos();
  return (
    <button
      onClick={onOpenMsg}
      className="flex gap-1 items-center cursor-pointer"
    >
      <p
        className={clsx(
          "hidden text-sm md:inline-block font-comfortaa font-bold ",
          path === "/"
            ? scrollPos > 50
              ? "text-primary"
              : "text-white"
            : "text-primary"
        )}
      >
        Message Us
      </p>
      <span
        className={clsx(
          "flex justify-center items-center text-2xl drop-shadow-md",
          path === "/"
            ? scrollPos > 50
              ? "text-primary"
              : "text-white"
            : "text-primary"
        )}
      >
        <PiWhatsappLogoDuotone />
      </span>
    </button>
  );
};
