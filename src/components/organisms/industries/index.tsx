import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Ecommerce } from "./e-commerce";
import { Health } from "./health";
import { Education } from "./education";
import { Fintech } from "./fintech";
import { Travel } from "./travel";
import { Manufacture } from "./manufacture";

export const IndustriesContent = () => {
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
    <section className="pt-20 lg:pt-40 px-4 lg:px-32 xl:px-40 w-full">
      <div className="w-full flex justify-center mb-6 md:mb-8 lg:mb-12">
        <motion.p
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, x: -20 },
          }}
          className="text-lg font-comfortaa font-extrabold md:text-center md:max-w-xl lg:max-w-3xl md:text-xl lg:text-2xl"
        >
          At{" "}
          <motion.span
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
            className="text-primary inline-block"
          >
            Bantutech Labs
          </motion.span>
          , we understand that each industry has its unique digital needs.
          Explore how our tailored solutions can transform and elevate
          businesses in various sectors.
        </motion.p>
      </div>
      <div className="w-full columns-1 md:columns-2 gap-3 mb-20 lg:mb-40 overflow-hidden lg:overflow-visible">
        <Ecommerce />
        <Health />
        <Education />
        <Fintech />
        <Travel />
        <Manufacture />
      </div>
    </section>
  );
};
