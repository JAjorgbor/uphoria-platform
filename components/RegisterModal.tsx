"use client";
import ModalWrapper from "@/components/elements/ModalWrapper";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

interface Props {
  externalIsOpen?: boolean;
  setExternalIsOpen?: (state: boolean) => void;
  showButton?: boolean;
  buttonText?: string;
}

const RegisterModal: FC<Props> = ({
  externalIsOpen = false,
  setExternalIsOpen,
  showButton = false,
  buttonText = "Register",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {showButton && (
        <button
          className="bg-rose-800 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
          onClick={() => setIsOpen(true)}
        >
          {buttonText}
          <FiArrowRight />
        </button>
      )}
      <ModalWrapper
        title="Get Registered Now"
        isOpen={isOpen || externalIsOpen}
        setIsOpen={setExternalIsOpen ? setExternalIsOpen : setIsOpen}
      >
        <p>
          Message one of our verified agents on telegram for your{" "}
          <span className="text-rose-800">Uphoria</span> registration
        </p>
        <Link
          href="/register"
          className="bg-rose-800 rounded-xl text-white px-3 py-2 inline-flex justify-center items-center gap-2 flex-1"
        >
          Register
          <FiExternalLink />
        </Link>
        
        <div className="flex gap-3 justify-center mt-4 text-sm">
          <Link
            href="https://dynamic-link-for-whatsapp-and-telegram-3x9b.vercel.app/Telegramlink"
            className="flex flex-col items-center gap-2 flex-1 group"
          >
            <Image
              src="/telegram-logo.png"
              alt="telegram logo"
              height={100}
              width={100}
              className="w-8"
            />
            <p className="group-hover:text-rose-800">Telegram</p>
          </Link>
        </div>
      </ModalWrapper>
    </>
  );
};
export default RegisterModal;
