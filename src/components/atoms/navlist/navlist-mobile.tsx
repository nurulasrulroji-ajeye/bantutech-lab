import { Sling as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { TNavList } from "../../../utils/type";
import { MessageUs } from "../message-us";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

type NavlistMobileProps = {
  data: TNavList[];
  path: string;
  scrollPos: number;
  openMsg: () => void;
};

export const NavlistMobile = ({
  data,
  scrollPos,
  path,
  openMsg,
}: NavlistMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useClickAway(ref, (e: Event) => {
    if (!ref.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={ref} className="flex gap-2 md:hidden">
      <MessageUs path={path} onOpenMsg={openMsg} />
      <Hamburger
        size={20}
        direction="right"
        color={path === "/" ? (scrollPos > 50 ? "#4942E4" : "#fff") : "#4942E4"}
        toggled={isOpen}
        toggle={setIsOpen}
      />
      {isOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            key="navmob"
            initial={{ x: `100%`, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            className={clsx(
              path === "/"
                ? scrollPos > 50
                  ? "bg-primary"
                  : "bg-white/15 backdrop-blur-md"
                : "bg-primary",
              "absolute top-[4.5rem] w-2/3 right-4 z-[-1] p-5 rounded-lg shadow-md"
            )}
          >
            <ul className="flex flex-col text-center">
              {data.map((item, idx) => (
                <motion.li
                  initial={{ y: -100 * (idx + 1), opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.3,
                    stiffness: 400,
                    damping: 20,
                    duration: 0.5,
                  }}
                  key={item.title}
                  onClick={() => navigate(item.href)}
                  className={clsx(
                    path === item.href
                      ? "text-primary bg-lighten font-bold rounded-md shadow-md"
                      : "text-lighten font-semibold",
                    "w-full font-comfortaa text-lg py-2"
                  )}
                >
                  {item.title}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
