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
        <div className="flex w-full flex-col gap-4 p-5 text-center lg:w-1/2 bg-gray-100 rounded-lg shadow-sm h-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-xl font-light uppercase text-powerblue-light">
              Localização e Contato
            </span>
            <h2 className="text-3xl font-bold xl:text-5xl">{CompanyInfo.company}</h2>
          </div>

          <div>
            <div className="flex items-center justify-center gap-2">
              <IoLocation size={30} className="ml-2 text-powerblue-light" />
              <p className="text-lg font-normal md:text-base xl:text-lg">
                {CompanyInfo.address}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 ">
              <p className="text-lg font-normal md:text-base xl:text-lg">
                Atendemos a toda Estrela/RS e demais cidades da região.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <IoCall size={30} className="ml-2 text-powerblue-light" />
              <p className="text-lg font-normal md:text-base xl:text-lg">
              {CompanyInfo.phone}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <IoMail size={30} className="ml-2 text-powerblue-light" />
              <p className="text-lg font-normal md:text-base xl:text-lg">
              {CompanyInfo.email}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <a href={CompanySocialNetwork.whatsapp} target="_blank" className="h-14 w-full">
              <Button
                className="h-14 w-full text-base font-medium text-white"
                color="primary"
                startContent={<IoLogoWhatsapp size={30} className="ml-2" />}
                
              >
                Mande um WhatsApp
              </Button>
            </a>
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
