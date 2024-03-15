import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Card } from "../../../molecules";
import { MobileApp, WebApp } from "../../../../assets";
import { useInView } from "react-intersection-observer";

export const CardGroupServices = () => {
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
    <>
      <div className="w-full gap-5 lg:gap-8 flex flex-col md:flex-row px-5 lg:px-40 mt-8 lg:mt-20">
        <motion.div
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
            hidden: { opacity: 0, scale: 0.5 },
          }}
          animate={control}
          initial="hidden"
          className="w-full"
        >
          <Card>
            <div className="w-full flex flex-col gap-3 lg:gap-5 p-4 font-comfortaa lg:p-6">
              <motion.img
                src={MobileApp}
                alt="mobileapp"
                className="aspect-square w-20 drop-shadow-md lg:w-32"
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 },
                  },
                  hidden: { opacity: 0, scale: 1.5 },
                }}
                animate={control}
                initial="hidden"
              />
              <motion.h4
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.5 },
                  },
                  hidden: { opacity: 0, y: 50 },
                }}
                animate={control}
                initial="hidden"
                className="font-bold lg:text-xl text-primary"
              >
                Mobile App Development
              </motion.h4>
              <motion.p
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.5 },
                  },
                  hidden: { opacity: 0, x: 50 },
                }}
                animate={control}
                initial="hidden"
                className="pt-3 text-sm lg:text-base"
              >
                Transform your creative ideas into robust mobile applications.
              </motion.p>
            </div>
          </Card>
        </motion.div>
        <motion.div
          className="w-full"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            hidden: { opacity: 0, y: 100 },
          }}
          animate={control}
          initial="hidden"
          ref={ref}
        >
          <Card>
            <div className="w-full flex flex-col gap-3 lg:gap-5 p-4 font-comfortaa lg:p-6">
              <motion.img
                src={WebApp}
                alt="webapp"
                className="aspect-square w-20 drop-shadow-md lg:w-32"
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.7, delay: 0.3 },
                  },
                  hidden: { opacity: 0, scale: 0 },
                }}
                animate={control}
                initial="hidden"
              />
              <motion.h4
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, delay: 0.5 },
                  },
                  hidden: { opacity: 0, y: -50 },
                }}
                animate={control}
                initial="hidden"
                className="font-bold lg:text-xl text-primary"
              >
                Website App Development
              </motion.h4>
              <motion.p
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7, delay: 0.5 },
                  },
                  hidden: { opacity: 0, x: -50 },
                }}
                animate={control}
                initial="hidden"
                className="pt-3 text-sm lg:text-base"
              >
                Transform your creative ideas into robust website applications.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
};
