import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EcommereceSvg } from "../../../assets";
import clsx from "clsx";

export const Ecommerce = () => {
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
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: -20 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        hover
          ? "bg-primary shadow-inner shadow-secondary transition-all ease-in-out duration-500"
          : "",
        "w-full aspect-square flex justify-center items-center shadow-md mb-3 rounded-lg border-2 border-primary "
      )}
    >
      <div className=" w-full px-4 md:max-w-sm md:text-center flex flex-col gap-6">
        <div className="w-full flex flex-col items-start md:items-center">
          <EcommereceSvg className="text-[5rem]" />
          <h1
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "text-xl font-syne font-bold"
            )}
          >
            E-commerce
          </h1>
          <p
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "font-comfortaa font-bold"
            )}
          >
            Driving Digital Commerce Evolution
          </p>
        </div>
        <p
          className={clsx(hover ? "text-light" : "", "text-sm font-comfortaa")}
        >
          In the dynamic world of e-commerce, stay ahead with our innovative
          solutions. Elevate user experiences, optimize conversions, and
          navigate the e-commerce landscape with confidence.
        </p>
      </div>
    </motion.div>
  );
};
