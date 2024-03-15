import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { TbChevronsDown } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export const WhyOurTeam = () => {
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
    <div className="w-full flex flex-col gap-4 items-center">
      <motion.h4
        className="font-comfortaa text-xl lg:text-2xl font-bold "
        ref={ref}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: -50 },
        }}
        animate={control}
        initial="hidden"
      >
        Why Our Team?
      </motion.h4>
      <motion.div
        className="w-full md:max-w-sm flex flex-col gap-3"
        ref={ref}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: 50 },
        }}
        animate={control}
        initial="hidden"
      >
        <Disclosure>
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="w-full flex justify-between items-center bg-lighten py-3 px-4 rounded-lg shadow-md hover:bg-light hover:shadow-lg transition-all ease-in-out duration-500">
                <p className="font-comfortaa text-sm font-bold text-primary">
                  Expertise
                </p>
                <span
                  className={clsx(
                    open ? "rotate-180" : "",
                    "text-xl text-primary transition-all ease-in-out duration-700"
                  )}
                >
                  <TbChevronsDown />
                </span>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-5 font-semibold text-lg font-comfortaa">
                  Each team member is a specialist in their domain.
                </Disclosure.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="w-full flex justify-between items-center bg-lighten py-3 px-4 rounded-lg shadow-md hover:bg-light hover:shadow-lg transition-all ease-in-out duration-500">
                <p className="font-comfortaa text-sm font-bold text-primary">
                  Collaboration
                </p>
                <span
                  className={clsx(
                    open ? "rotate-180" : "",
                    "text-xl text-primary transition-all ease-in-out duration-700"
                  )}
                >
                  <TbChevronsDown />
                </span>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-5 font-semibold text-lg font-comfortaa">
                  We work seamlessly together, bringing a synergy to every
                  project.
                </Disclosure.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="w-full flex justify-between items-center bg-lighten py-3 px-4 rounded-lg shadow-md hover:bg-light hover:shadow-lg transition-all ease-in-out duration-500">
                <p className="font-comfortaa text-sm font-bold text-primary">
                  Innovation
                </p>
                <span
                  className={clsx(
                    open ? "rotate-180" : "",
                    "text-xl text-primary transition-all ease-in-out duration-700"
                  )}
                >
                  <TbChevronsDown />
                </span>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-5 font-semibold text-lg font-comfortaa">
                  Our team thrives on pushing boundaries and exploring new
                  possibilities.
                </Disclosure.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <React.Fragment>
              <Disclosure.Button className="w-full flex justify-between items-center bg-lighten py-3 px-4 rounded-lg shadow-md hover:bg-light hover:shadow-lg transition-all ease-in-out duration-500">
                <p className="font-comfortaa text-sm font-bold text-primary">
                  Client-Centric
                </p>
                <span
                  className={clsx(
                    open ? "rotate-180" : "",
                    "text-xl text-primary transition-all ease-in-out duration-700"
                  )}
                >
                  <TbChevronsDown />
                </span>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="px-4 pb-5 font-semibold text-lg font-comfortaa">
                  Your success is our priority, and our team is committed to
                  exceeding your expectations.
                </Disclosure.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Disclosure>
      </motion.div>
    </div>
  );
};
