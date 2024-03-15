import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { GoalsSvg } from "../../../assets";

export const OurMission = () => {
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
    <div className="w-full flex flex-col items-center">
      <motion.h1
        ref={ref}
        animate={control}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 },
          },
          hidden: { opacity: 0, scale: 0.7 },
        }}
        className="font-syne text-2xl lg:text-3xl font-bold text-primary"
      >
        Our Mission
      </motion.h1>
      <div className="w-full flex flex-col md:flex-row-reverse md:gap-10 md:items-center md:justify-center">
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, x: 50 },
          }}
          className="w-full flex justify-center md:justify-end"
        >
          <GoalsSvg className="text-[20rem] lg:text-[22rem] xl:text-[25rem]" />
        </motion.div>
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, x: -50 },
          }}
          className="flex flex-col gap-3 md:max-w-md xl:max-w-lg"
        >
          <h2 className="text-xl font-comfortaa font-bold text-primary lg:text-2xl">
            Empowering Your Digital Vision
          </h2>
          <p className="font-comfortaa md:text-lg xl:text-xl">
            Our mission is to empower businesses, large and small, to thrive in
            the digital landscape. We strive to be your trusted partner in
            achieving success through cutting-edge technology and strategic
            innovation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
