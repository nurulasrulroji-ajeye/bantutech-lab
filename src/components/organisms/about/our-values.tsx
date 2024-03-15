import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { StarSvg } from "../../../assets";

export const OurValues = () => {
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
    <div className="w-full mt-20">
      <div className="w-full max-w-sm relative">
        <motion.h1
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, x: -20 },
          }}
          className="text-2xl lg:text-3xl font-syne text-primary font-bold"
        >
          Our Values
        </motion.h1>
        <motion.p
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, x: 20 },
          }}
          className="font-comfortaa text-secondary font-semibold"
        >
          Innovation | Collaboration | Excellence
        </motion.p>
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, scale: 0.2 },
          }}
          className=" absolute -top-24 md:-top-28 -right-10"
        >
          <StarSvg className="text-[10rem] md:text-[12rem] lg:-[14rem] xl:[16rem] text-primary" />
        </motion.div>
      </div>
      <div className="mt-4">
        <motion.p
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, y: -20 },
          }}
          className="font-comfortaa md:text-lg lg:text-xl xl:text-2xl"
        >
          Our values are the pillars that guide our every endeavor. We embrace
          innovation, foster collaboration, and pursue excellence in everything
          we do. These principles shape our culture and define the quality of
          service you can expect from Bantutech Labs.
        </motion.p>
      </div>
    </div>
  );
};
