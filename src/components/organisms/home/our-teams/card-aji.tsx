import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { TIcon } from ".";
import { Aji } from "../../../../assets";
import { Card } from "../../../molecules";
import {
  BiLogoFigma,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { PiFramerLogoDuotone } from "react-icons/pi";
import { HiMiniSquaresPlus } from "react-icons/hi2";

const dataTSAji: TIcon[] = [
  { icon: <IoLogoJavascript /> },
  { icon: <BiLogoTypescript /> },
  { icon: <BiLogoReact /> },
  { icon: <BiLogoVuejs /> },
  { icon: <BiLogoFigma /> },
  { icon: <BiLogoRedux /> },
  { icon: <PiFramerLogoDuotone /> },
  { icon: <HiMiniSquaresPlus /> },
];

export const CardAji = () => {
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
    <motion.div
      className="w-full md:order-first"
      ref={ref}
      variants={{
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, x: -50 },
      }}
      animate={control}
      initial="hidden"
    >
      <Card className="flex flex-col gap-5 ">
        <div className="w-full flex items-center gap-3">
          <div className="w-20 h-20 border border-primary shadow-md rounded-full overflow-hidden flex-none">
            <motion.img
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.4 },
                },
                hidden: { opacity: 0, y: 50 },
              }}
              animate={control}
              initial="hidden"
              src={Aji}
              alt="aji"
              className="aspect-square object-contain"
            />
          </div>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.4 },
              },
              hidden: { opacity: 0, y: -50 },
            }}
            animate={control}
            initial="hidden"
          >
            <h4 className="font-comfortaa font-bold">Nurul Asrul Roji</h4>
            <p className="text-sm font-comfortaa font-bold text-primary">
              Frontend Engineer
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-3">
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.6 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            animate={control}
            initial="hidden"
            className="border border-light w-fit p-2 rounded-md text-xs font-comfortaa"
          >
            <span className="font-bold">Total YOE:</span> 4 Years
          </motion.div>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.7 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            animate={control}
            initial="hidden"
            className="border border-light w-fit p-2 rounded-md text-xs font-comfortaa"
          >
            <span className="font-bold">Client/Company:</span> Opinia Media
            Technology, Asuransi Astra, Astra International
          </motion.div>
          <motion.div
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, delay: 0.9 },
              },
              hidden: { opacity: 0, scale: 0 },
            }}
            animate={control}
            initial="hidden"
            className="w-fit bg-lighten p-2 rounded-md flex flex-col gap-2"
          >
            <p className="text-sm font-comfortaa font-bold">Tech Stack: </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {dataTSAji.map((item, idx) => (
                <motion.div
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.8, delay: (idx + 1) / 2 },
                    },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  animate={control}
                  initial="hidden"
                  key={idx}
                  className="w-7 h-7 rounded-full bg-secondary text-xl text-white flex justify-center items-center hover:border hover:border-primary hover:bg-lighten hover:text-primary transition-all ease-in-out duration-500"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};
