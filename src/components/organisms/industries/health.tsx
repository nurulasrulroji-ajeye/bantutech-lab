import clsx from "clsx";
import { useEffect, useState } from "react";
import { HealthSvg } from "../../../assets";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Health = () => {
  const [hover, setHover] = useState(false);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.7 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        hover
          ? "bg-primary shadow-inner shadow-secondary transition-all ease-in-out duration-500"
          : "",
        "w-full aspect-square md:aspect-[6/5] flex justify-center items-center shadow-md mb-3 rounded-lg border-2 border-primary"
      )}
    >
      <div className=" w-full px-4 md:max-w-sm md:text-center flex flex-col gap-6">
        <div className="w-full flex flex-col items-start md:items-center">
          <HealthSvg className="text-[5rem]" />
          <h1
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "text-xl font-syne font-bold"
            )}
          >
            Healthcare
          </h1>
          <p
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "font-comfortaa font-bold"
            )}
          >
            Digital Health for a Better Tomorrow
          </p>
        </div>
        <p
          className={clsx(hover ? "text-light" : "", "text-sm font-comfortaa")}
        >
          Empower healthcare organizations with our cutting-edge digital
          solutions. From patient engagement apps to streamlined management
          systems, we're committed to enhancing the digital health experience.
        </p>
      </div>
    </motion.div>
  );
};
