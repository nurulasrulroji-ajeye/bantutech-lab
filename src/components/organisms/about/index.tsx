import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { Arrow2Svg, SunSvg } from "../../../assets";
import { OurMission } from "./our-mission";
import { OurValues } from "./our-values";

export const AboutContent = () => {
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
    <section className="pt-20 lg:pt-40 px-4 lg:px-40 w-full pb-20 lg:pb-40 overflow-hidden">
      <div className="flex flex-col gap-6 lg:gap-10 md:items-center w-full relative mb-36">
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, y: 20 },
          }}
          className="absolute -right-10 -top-20 md:-left-10 md:-top-32"
        >
          <SunSvg className="text-primary md:text-[15rem] xl:text-[18rem] text-[12rem]" />
        </motion.div>
        <motion.h1
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, y: -20 },
          }}
          className="text-2xl lg:text-3xl font-syne text-primary font-bold"
        >
          Our Story
        </motion.h1>
        <motion.p
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, x: -20 },
          }}
          className="font-comfortaa font-semibold text-2xl lg:text-3xl md:max-w-xl lg:max-w-3xl md:text-center"
        >
          At{" "}
          <motion.span
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.3 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-primary inline-flex"
          >
            Bantutech Labs
          </motion.span>{" "}
          , we believe in the power of digital{" "}
          <motion.span
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-primary inline-block"
          >
            {" "}
            transformation
          </motion.span>{" "}
          to shape the future. Our journey began with a passion for innovation
          and a commitment to providing unparalleled{" "}
          <motion.span
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-primary"
          >
            digital solutions.
          </motion.span>
        </motion.p>
        <motion.div
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
            hidden: { opacity: 0, y: -50 },
          }}
          className="absolute -bottom-36 inset-x-0 flex justify-center "
        >
          <Arrow2Svg className="text-[10rem] text-primary" />
        </motion.div>
      </div>
      <OurMission />
      <OurValues />
    </section>
  );
};
