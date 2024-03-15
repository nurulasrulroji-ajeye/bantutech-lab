import {
  PiInstagramLogoDuotone,
  PiTwitterLogoDuotone,
  PiDiscordLogoDuotone,
  PiDribbbleLogoDuotone,
  PiMediumLogoDuotone,
} from "react-icons/pi";
import { TSocmed } from "../../../utils/type";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SocmedData: TSocmed[] = [
  {
    icon: <PiInstagramLogoDuotone />,
    href: "https://www.instagram.com/ajeye_/channel/",
  },
  {
    icon: <PiTwitterLogoDuotone />,
    href: "https://www.instagram.com/ajeye_/channel/",
  },
  {
    icon: <PiDiscordLogoDuotone />,
    href: "https://www.instagram.com/ajeye_/channel/",
  },
  {
    icon: <PiDribbbleLogoDuotone />,
    href: "https://www.instagram.com/ajeye_/channel/",
  },
  {
    icon: <PiMediumLogoDuotone />,
    href: "https://www.instagram.com/ajeye_/channel/",
  },
];

export const SocmedList = () => {
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
    <div className="w-fit flex flex-col gap-3">
      <motion.h5
        ref={ref}
        className="text-white font-syne font-semibold lg:text-center"
        variants={{
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, x: 50 },
        }}
        animate={control}
        initial="hidden"
      >
        Follow Us:
      </motion.h5>
      <div className="w-full flex gap-2">
        {SocmedData.map((item, idx) => (
          <motion.a
            className="w-8 h-8 rounded-full bg-light flex justify-center items-center text-xl text-primary hover:bg-primary hover:border hover:border-lighten hover:text-lighten transition-colors ease-in-out duration-500 shadow-md"
            key={idx}
            href={item.href}
            target="_blank"
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: (idx + 1) / 4 },
              },
              hidden: { opacity: 0, y: 30 },
            }}
            animate={control}
            initial="hidden"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};
