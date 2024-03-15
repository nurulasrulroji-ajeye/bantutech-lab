import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { CardGroupServices } from "./card-group";

export const OurServices = () => {
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
    <div className="w-full py-20 flex flex-col items-center">
      <div className="lg:max-w-xl max-w-sm flex flex-col items-center gap-6">
        <h1 className="text-center text-3xl font-syne font-semibold  lg:text-4xl">
          Precise{" "}
          <motion.span
            ref={ref}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, y: -50 },
            }}
            animate={control}
            initial="hidden"
            className="text-primary font-bold inline-block"
          >
            Digital
          </motion.span>{" "}
          <motion.span
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, x: -50 },
            }}
            animate={control}
            initial="hidden"
            className="text-primary font-bold inline-block"
          >
            Transformation
          </motion.span>{" "}
          for Your{" "}
          <motion.span
            ref={ref}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, x: 50 },
            }}
            animate={control}
            initial="hidden"
            className="text-primary font-bold inline-block"
          >
            Business
          </motion.span>
        </h1>
        <motion.div
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            hidden: { opacity: 0, scale: 0 },
          }}
          animate={control}
          initial="hidden"
          className="h-[2px] rounded-full w-80 lg:w-full bg-secondary"
        />
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          },
          hidden: { opacity: 0, y: -50 },
        }}
        className="mt-8 lg:mt-20 w-full px-5 flex justify-center"
      >
        <p className="text-center font-comfortaa max-w-sm md:max-w-md lg:max-w-5xl lg:text-lg">
          Entrust the digital journey of your business to Bantutech Labs, the
          forefront provider of application and website development solutions.
          With a focus on excellence and innovation, we offer a range of premium
          services to help you achieve your digital business goals.
        </p>
      </motion.div>
      <CardGroupServices />
    </div>
  );
};
