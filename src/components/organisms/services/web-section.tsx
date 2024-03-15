import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { WebDev } from "../../../assets";

export const WebSection = () => {
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
    <div className="mt-20 w-full flex flex-col lg:pb-40 pb-24 overflow-hidden">
      <motion.h1
        ref={ref}
        animate={control}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          hidden: { opacity: 0, x: -20 },
        }}
        className="text-2xl font-syne font-bold text-primary md:hidden mb-6"
      >
        Web Wonders
      </motion.h1>
      <div className=" w-full grid grid-cols-1 place-items-center md:grid-cols-2">
        <motion.img
          ref={ref}
          animate={control}
          initial="hidden"
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
            hidden: { opacity: 0, scale: 0.8 },
          }}
          className="w-80 lg:w-[30rem] h-auto md:justify-self-start "
          src={WebDev}
          alt="mobile-dev"
        />
        <div className="">
          <motion.h1
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, x: -20 },
            }}
            className="lg:text-3xl text-2xl font-syne font-bold text-primary hidden md:inline-block"
          >
            Web Wonders
          </motion.h1>
          <motion.h3
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, x: 20 },
            }}
            className="font-comfortaa text-secondary font-bold text-lg md:text-base mt-6 md:mt-0"
          >
            Journey Through Spectacular Websites
          </motion.h3>
          <motion.p
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, y: 20 },
            }}
            className="md:pt-10 pt-6 font-comfortaa "
          >
            Embark on a digital adventure with our website development services.
            From corporate showcases to dynamic e-commerce platforms, we create
            web wonders that captivate and convert. Elevate your online presence
            with Bantutech Labs.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
