import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import clsx from "clsx";
import { FinanceSvg } from "../../../assets";

export const Fintech = () => {
  const [hover, setHover] = useState(false);
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
      ref={ref}
      animate={control}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.7 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        hover
          ? "bg-primary shadow-inner shadow-secondary transition-all ease-in-out duration-500"
          : "",
        "w-full aspect-square md:aspect-[6/5] flex justify-center items-center shadow-md mb-3 rounded-lg border-2 border-primary "
      )}
    >
      <div className=" w-full px-4 md:max-w-sm md:text-center flex flex-col gap-6">
        <div className="w-full flex flex-col items-start md:items-center">
          <FinanceSvg className="text-[5rem]" />
          <h1
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "text-xl font-syne font-bold"
            )}
          >
            Finance & Banking
          </h1>
          <p
            className={clsx(
              hover ? "text-lighten" : "text-primary",
              "font-comfortaa font-bold"
            )}
          >
            Secure, Seamless, and Smart Finance Solutions
          </p>
        </div>
        <p
          className={clsx(hover ? "text-light" : "", "text-sm font-comfortaa")}
        >
          Navigate the complexities of the financial world with our secure and
          innovative solutions. From robust banking applications to financial
          management tools, we're your trusted partner in fintech.
        </p>
      </div>
    </motion.div>
  );
};
