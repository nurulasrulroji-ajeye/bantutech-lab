import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Globe, Client1, Client2 } from "../../../../assets";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Button } from "../../../atoms";
import { Swiper as SweepClass } from "swiper";
import React from "react";

const CarouselData: {
  img: string;
  title: string;
  subTitle: string;
  btnTitle: string;
}[] = [
  {
    img: Globe,
    title: "Bring Your Digital Ideas to Life With Us.",
    subTitle:
      "Trusted Mobile App and Website App Developers to Elevate Your Business.",
    btnTitle: "Start Your Digital Journey",
  },
  {
    img: Client2,
    title: "Full Support, Limitless Maintenance.",
    subTitle:
      "We're Not Just Creators, We Support Your Entire Business Journey.",
    btnTitle: "Meet Our Support Team",
  },
  {
    img: Client1,
    title: "Captivating Design, Exceptional Functionality.",
    subTitle:
      "Transform Your Business Visuals with Elegant App and Website Design.",
    btnTitle: "Explore Our Best Designs",
  },
  // { img: Client4, title: "Hallo", subTitle: "lorem ipsum" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [motionKey, setMotionKey] = React.useState(0);
  const onAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonId = e.currentTarget.id;
    if (buttonId === "button1") {
      console.log("button 1");
    } else if (buttonId === "button2") {
      console.log("btn 2");
    } else {
      console.log("btn last");
    }
  };

  const onSlideChangeTransitionEnd = (swiper: SweepClass) => {
    setCurrentSlide(swiper.activeIndex);
    setMotionKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: function (_, className) {
            return '<span class="' + className + '">' + " " + "</span>";
          },
        }}
        // onSlideChange={onSlideChange}
        onSlideChangeTransitionStart={onSlideChangeTransitionEnd}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        {CarouselData.map((val, idx) => (
          <SwiperSlide key={idx} className=" w-full h-screen overflow-hidden">
            <div className="absolute bg-black/60 flex justify-start items-center inset-0 px-4 lg:px-40">
              <div className="flex flex-col gap-3 lg:gap-6">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={`${currentSlide}-${motionKey}`}
                    initial={{ y: -250, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className="text-white font-syne font-bold text-4xl max-w-xs lg:max-w-md lg:text-6xl inline-block"
                  >
                    {val.title}
                  </motion.h2>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentSlide}-${motionKey}`}
                    initial={{ x: -150, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2.5 }}
                    className="text-lighten font-comfortaa text-lg leading-tight max-w-xs lg:max-w-md lg:text-xl"
                  >
                    {val.subTitle}
                  </motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentSlide}-${motionKey}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 2.5 }}
                  >
                    <Button
                      variant="outlined"
                      id={`button${idx + 1}`}
                      color="outline-light"
                      onClick={onAction}
                    >
                      {val.btnTitle}
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.img
                className="w-full z-[-1] h-screen overflow-hidden object-cover relative"
                src={val.img}
                key={`${currentSlide}-${motionKey}`}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5 }}
                alt="image-hero"
              />
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
