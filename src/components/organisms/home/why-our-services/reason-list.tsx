import { PiSealCheckDuotone } from "react-icons/pi";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Reason = {
  icon: React.ReactNode;
  reason: string;
};

const dataReason: Reason[] = [
  {
    icon: <PiSealCheckDuotone />,
    reason: "Deep expertise in application and website development.",
  },
  {
    icon: <PiSealCheckDuotone />,
    reason: "Striking design and exceptional functionality.",
  },
  {
    icon: <PiSealCheckDuotone />,
    reason: "A consultative approach to understand your unique needs.",
  },
  {
    icon: <PiSealCheckDuotone />,
    reason: "Full support to ensure long-term success.",
  },
];

export const ReasonList = () => {
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
    <div className="px-5 py-4 lg:pl-20 w-full h-full flex justify-center gap-6 mt-3 lg:mt-0 flex-col">
      <motion.h4
        ref={ref}
        initial="hidden"
        animate={control}
        variants={{
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7 },
          },
          hidden: { opacity: 0, x: 50 },
        }}
        className="text-primary font-comfortaa text-2xl font-bold"
      >
        Why Choose Our Services?
      </motion.h4>
      <ul className="flex flex-col gap-3">
        {dataReason.map((item, idx) => (
          <li key={idx} className="flex gap-4 items-center">
            <motion.span
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: (idx + 1) / 2 },
                },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-2xl text-primary"
            >
              {item.icon}
            </motion.span>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={control}
              variants={{
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: (idx + 1) / 2 },
                },
                hidden: { opacity: 0, x: 50 },
              }}
              className="text-sm leading-snug font-comfortaa lg:text-base"
            >
              {item.reason}
            </motion.p>
          </li>
        ))}
      </ul>
    </div>
  );
};
