import React, { useEffect } from "react";
import { WhyOurTeam } from "./why-our-team";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CardAji } from "./card-aji";
import { CardBangde } from "./card-bangde";

export type TIcon = {
  icon: React.ReactNode;
};

export const Ourteams = () => {
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
    <section className="w-full px-5 pt-20 lg:pt-40 lg:px-20 flex flex-col pb-20 overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <motion.h5
          className="font-syne font-bold text-sm lg:text-base text-primary"
          ref={ref}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, y: -50 },
          }}
          animate={control}
          initial="hidden"
        >
          Meet Our Dynamic Team
        </motion.h5>
        <motion.h3
          ref={ref}
          variants={{
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            hidden: { opacity: 0, scale: 0 },
          }}
          animate={control}
          initial="hidden"
          className="text-2xl font-syne font-bold text-center lg:text-3xl max-w-sm"
        >
          {" "}
          Architects of Your Digital Success
        </motion.h3>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-10 mt-10 md:items-start">
        <WhyOurTeam />
        <CardAji />
        <CardBangde />
      </div>
    </section>
  );
};
