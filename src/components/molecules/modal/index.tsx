import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import clsx from "clsx";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  size?: "sm" | "md" | "lg";
  close: () => void;
  withBackdrop?: boolean;
};

export const Modal = ({
  children,
  close,
  open,
  withBackdrop = false,
  size = "md",
}: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const onClose = () => {
    document.body.style.overflow = "auto";
    close();
  };
  return ReactDOM.createPortal(
    <motion.div
      animate={open ? "open" : "hidden"}
      initial="hidden"
      variants={{
        open: {
          visibility: "visible",
          transition: { duration: 0.3 },
        },
        hidden: {
          visibility: "hidden",
          transition: { duration: 1.2, delay: 0.4 },
        },
      }}
      className="fixed inset-0 z-[9999] flex justify-center items-center"
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <div
          className={clsx(
            withBackdrop ? "bg-black/20 backdrop-blur-sm" : "",
            " inset-0 absolute z-0"
          )}
          onClick={onClose}
        />
        <motion.div
          animate={open ? "open" : "close"}
          initial="close"
          variants={{
            open: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", bounce: 0.5, stiffness: 80 },
            },
            close: { y: "-100%", opacity: 0 },
          }}
          className={clsx(
            size === "md"
              ? "md:max-w-md"
              : size === "sm"
              ? "max-w-sm"
              : size === "lg"
              ? "max-w-lg"
              : "md:max-w-md",
            "relative w-full"
          )}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>,
    modalRoot
  );
};
