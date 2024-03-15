import React, { useState } from "react";
import clsx from "clsx";
import { useScrollStore } from "../../../store";
import { MessageUs, NavlistDekstop, NavlistMobile } from "../../atoms";
import { NavListData } from "../../../utils/constant";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../../molecules/modal";
import { FormMessage } from "./form-message";
import { BoomSvg } from "../../../assets";
import { motion } from "framer-motion";

export const Navbar = () => {
  const scrollPos = useScrollStore.use.scrollPos();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openMsg, setOpenMsg] = useState(false);
  const [inputText, setInputText] = useState({
    name: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState(false);
  const disabled = inputText.name.length > 0 && inputText.message.length > 0;
  const onSend = () => {
    setErrMsg(true);
    if (!disabled) return;
    setErrMsg(false);
    const waUrl = `https://wa.me/+62881010464853?text=*Hi, i'm ${inputText.name} %0a%0a ${inputText.message}`;
    window.open(waUrl, "_blank")?.focus;
    setOpenMsg(false);
    setInputText({ message: "", name: "" });
  };

  return (
    <React.Fragment>
      <nav
        className={clsx(
          "fixed top-0 backdrop-blur-sm inset-x-0 px-4 lg:px-40 py-2 items-center md:py-5 lg:py-6 z-50 flex justify-between",
          scrollPos > 50 ? "bg-white shadow-md" : "bg-white/10",
          "transition-all ease-in-out duration-500"
        )}
      >
        <div
          className={clsx(
            pathname === "/"
              ? scrollPos > 50
                ? "text-primary"
                : "text-lighten"
              : "text-primary",
            "font-syne text-sm lg:text-base font-extrabold leading-none text-right cursor-pointer"
          )}
          onClick={() => {
            navigate("/");
          }}
        >
          <h1>Bantutech</h1>
          <p className="text-xs text-[0.6rem] leading-none">Labs</p>
        </div>
        <NavlistDekstop
          data={NavListData}
          path={pathname}
          scrollPos={scrollPos}
        />
        <NavlistMobile
          data={NavListData}
          path={pathname}
          scrollPos={scrollPos}
          openMsg={() => setOpenMsg(true)}
        />
        <div className="hidden md:block">
          <MessageUs path={pathname} onOpenMsg={() => setOpenMsg(true)} />
        </div>
      </nav>
      <Modal open={openMsg} close={() => setOpenMsg(false)} withBackdrop>
        <div className="w-full px-4 md:px-0">
          <div className="bg-white w-full px-5 pt-8 pb-5 rounded-lg shadow-md relative">
            <motion.div
              animate={openMsg ? "open" : "hide"}
              initial="hide"
              variants={{
                open: {
                  rotate: 0,
                  transition: { type: "spring", restDelta: 0.5, delay: 0.3 },
                },
                hide: { rotate: 180 },
              }}
              className="absolute -top-20 -right-10"
            >
              <BoomSvg className="text-[10rem] text-primary" />
            </motion.div>
            <div className="w-full mb-6">
              <motion.h1
                animate={openMsg ? "open" : "hide"}
                initial="hide"
                variants={{
                  open: {
                    y: 0,
                    transition: { type: "spring", restDelta: 0.5, delay: 0.3 },
                  },
                  hide: { y: -20 },
                }}
                className="text-primary font-syne font-bold text-3xl md:text-4xl leading-tight"
              >
                Hi !
              </motion.h1>
              <motion.p
                animate={openMsg ? "open" : "hide"}
                initial="hide"
                variants={{
                  open: {
                    scale: 1,
                    transition: { type: "spring", restDelta: 0.5, delay: 0.3 },
                  },
                  hide: { scale: 0.8 },
                }}
                className="font-comfortaa"
              >
                Discuss your ideas with us.
              </motion.p>
            </div>
            <FormMessage
              inputText={inputText}
              setInputText={setInputText}
              onSend={onSend}
              isError={errMsg}
            />
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
