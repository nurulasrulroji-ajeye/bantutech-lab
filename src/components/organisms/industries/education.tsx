import { useEffect, useState } from "react";
import { EducationSvg } from "../../../assets";
import clsx from "clsx";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Education = () => {
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
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: -20 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        hover
          ? "bg-primary shadow-inner shadow-secondary transition-all ease-in-out duration-500"
          : "",
        "w-full aspect-square flex justify-center items-center shadow-md mb-3 rounded-lg border-2 border-primary md:break-after-column"
      )}
    >
      <div className=" w-full px-4 md:max-w-sm md:text-center flex flex-col gap-6">
        <div className="w-full flex flex-col items-start md:items-center">
          <EducationSvg className="text-[5rem]" />
          <h1
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "text-xl font-syne font-bold"
            )}
          >
            Education
          </h1>
          <p
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "font-comfortaa font-bold"
            )}
          >
            Transformative Digital Learning Environments
          </p>
        </div>
        <p
          className={clsx(hover ? "text-light" : "", "text-sm font-comfortaa")}
        >
          Revolutionize education with our digital learning solutions. From
          interactive e-learning platforms to campus management systems, we
          empower institutions to create impactful learning experiences.
        </p>
      </div>
    </motion.div>
  );
};
