"use client";
import Link from "next/link";
import React from "react";

import ContactSVG from "@/app/contactSVG";
import { Button } from "@nextui-org/react";
import { IoLogoWhatsapp, IoLocation, IoCall, IoMail } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

import { CompanyInfo, CompanySocialNetwork } from "../app/globals";


const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="Contacts"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full flex-col gap-4 p-5 bg-gray-100 rounded-lg shadow-sm h-full">
            <div className="flex flex-col items-center justify-center gap-1 w-full">
              <span className="text-xl font-bold uppercase text-powerblue-light">
                Localização e Contato
              </span>
              <h2 className="text-3xl font-bold xl:text-5xl">{CompanyInfo.company}</h2>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 w-full">
                <IoLocation size={30} className="text-powerblue-light" />
                <p className="text-lg font-normal md:text-base xl:text-lg">
                  {CompanyInfo.address}
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 w-full my-2">
                <p className="text-lg font-normal md:text-base xl:text-lg">
                  Atendemos a toda Estrela/RS e demais cidades da região.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 w-full">
                <IoMail size={30} className="text-powerblue-light" />
                <p className="text-lg font-normal md:text-base xl:text-lg">
                  {CompanyInfo.email}
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full p-5 bg-gray-100 rounded-lg shadow-sm h-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
              <p className="text-lg font-normal md:text-base xl:text-lg text-center">
                Estamos no WhatsApp. Clique e fale conosco.
              </p>
              <a href={CompanySocialNetwork.whatsapp} target="_blank" className="w-full max-w-md">
                <Button
                  className="h-14 w-full text-lg font-medium text-white"
                  color="success"
                  startContent={<IoLogoWhatsapp size={30} className="ml-2" />}
                >
                  {CompanyInfo.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="h-auto w-full p-5 lg:w-1/2">
          <ContactSVG />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
