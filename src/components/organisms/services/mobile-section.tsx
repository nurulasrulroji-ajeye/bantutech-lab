import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { MobileDev } from "../../../assets";

export const MobileSection = () => {
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
    <div className="w-full flex flex-col justify-center overflow-hidden">
      <motion.h1
        ref={ref}
        animate={control}
        initial="hidden"
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
          hidden: { opacity: 0, x: -20 },
        }}
        className="text-2xl font-syne font-bold text-primary md:hidden"
      >
        Mobile App Magic
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
          className="w-80 lg:w-[30rem] h-auto md:order-last md:justify-self-end "
          src={MobileDev}
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
            Mobile App Magic
          </motion.h1>
          <motion.h3
            ref={ref}
            animate={control}
            initial="hidden"
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
              hidden: { opacity: 0, x: 20 },
            }}
            className="font-comfortaa text-secondary font-bold text-lg md:text-base"
          >
            Transform Your Ideas into Digital Elegance
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
            Bring your concepts to life with our enchanting mobile app
            development services. We blend creativity with technical prowess to
            craft user-friendly and visually stunning applications. Dive into
            the magic of mobile with Bantutech Labs.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
