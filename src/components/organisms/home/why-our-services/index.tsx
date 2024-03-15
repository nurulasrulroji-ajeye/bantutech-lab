import { Client4 } from "../../../../assets";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReasonList } from "./reason-list";

export const WhyOurServices = () => {
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
    <div className="w-full grid lg:grid-cols-2 col-span-1 gap-4 lg:mt-20 mt-10 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={control}
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, x: -100 },
        }}
        className="overflow-hidden relative rounded-r-xl shadow-md hover:shadow-lg transition-shadow ease-in-out duration-500"
      >
        <div className="absolute inset-0 z-[1] bg-black/40 flex justify-center items-center">
          <motion.p
            initial="hidden"
            animate={control}
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.7, delay: 0.4 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            className="text-white max-w-xs text-xs font-comfortaa lg:text-lg lg:max-w-sm"
          >
            Start your digital transformation today with Bantutech Labs. We are
            not just service providers; we are your partners in achieving
            success in the digital world.
          </motion.p>
        </div>
        <motion.img
          src={Client4}
          alt="success"
          initial="hidden"
          animate={control}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, delay: 0.4 },
            },
            hidden: { opacity: 0, scale: 1.2 },
          }}
          className="object-cover aspect-video w-full h-auto relative"
        />
      </motion.div>
      <ReasonList />
    </div>
  );
};
