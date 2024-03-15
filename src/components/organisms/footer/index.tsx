import { TiChevronRightOutline } from "react-icons/ti";
import { NavListData } from "../../../utils/constant";
import { SocmedList } from "../../atoms/socmed-list";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        hidden: { opacity: 0, y: 200 },
      }}
      animate={control}
      initial="hidden"
      className="w-full bg-primary"
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="fill-white"
        ></path>
      </svg>
      <div className="w-full flex flex-col pt-8 px-5 gap-6 lg:justify-center">
        <div className="w-full flex justify-start lg:justify-center">
          <h3 className="font-syne font-bold text-2xl text-white max-w-[65%] md:max-w-xs md:text-3xl lg:max-w-sm lg:text-4xl lg:text-center">
            Stay Connected with Us
          </h3>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 lg:mt-6 justify-center items-start lg:px-32">
          <div className="w-full flex flex-col gap-3">
            <h5 className="text-white font-syne font-semibold">
              Quick Links:{" "}
            </h5>
            <ul className="flex flex-col gap-2">
              {NavListData.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => navigate(item.href)}
                  className="flex gap-3 items-center text-lighten font-comfortaa text-sm font-bold cursor-pointer"
                >
                  <span>
                    <TiChevronRightOutline />
                  </span>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h5 className="text-white font-syne font-semibold">
              Contact Information:{" "}
            </h5>
            <ul className="flex flex-col gap-2">
              <li className=" text-lighten font-comfortaa text-sm font-bold">
                Email: bantutech@labs.com
              </li>
              <li className=" text-lighten font-comfortaa text-sm font-bold">
                Phone: +62 8234 5678 901
              </li>
              <li className=" text-lighten font-comfortaa text-sm font-bold">
                Address: Jl. Assakinah blok julung No.62, Kebagusan, Pasar
                Minggu, Jakarta Selatan
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-1">
            <h5 className="text-white font-syne font-semibold">
              Working Hours:
            </h5>
            <p className="text-lighten font-comfortaa text-sm font-bold">
              Everyday: 6 AM - 10 PM (local time)
            </p>
          </div>
        </div>
        <div className="w-full flex justify-start lg:justify-center mt-6">
          <SocmedList />
        </div>
      </div>
      <div className=" w-full flex justify-center mt-10 py-6 border-t border-light">
        <p className="text-xs font-comfortaa font-semibold text-light ">
          Copyright © 2024{" "}
          <span className="text-white font-bold">Bantutech Labs</span>. All
          rights reserved.
        </p>
      </div>
    </motion.div>
  );
};
