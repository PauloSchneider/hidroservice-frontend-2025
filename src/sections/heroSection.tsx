"use client";
import { Button } from "@nextui-org/react";

import { IoLogoWhatsapp } from "react-icons/io5";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";
import { CompanySocialNetwork } from "@/app/globals";

import HeroSVG from "@/app/heroSVG";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      ref={ref}
      className="pt-32 relative mx-auto flex w-full items-center justify-center bg-powerblue-dark bg-[url('/hero-background.png')] bg-cover bg-center bg-no-repeat py-10 3xl:max-w-[1580px] 3xl:rounded-b-2xl" 
      id="Home"
    >
      <motion.div
        variants={fadeIn("up", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
      >
        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center gap-7 px-8 text-center text-white lg:text-start 2xl:w-6/12">
              <h1 className="text-3xl font-bold md:text-5xl 2xl:text-6xl">
                A MELHOR ESCOLHA PARA O SEU IMÓVEL
              </h1>
              <p className="text-lg font-normal md:text-lg">
                Vazamentos, entupimentos, problemas hidráulicos? Conte com a nossa equipe especializada.
              </p>
              <a href={CompanySocialNetwork.whatsapp} target="_blank" className="h-14 w-full">
                <Button
                  className="text-lg h-14 w-full font-medium text-white"
                  color="primary"
                  startContent={<IoLogoWhatsapp size={30} className="ml-2" />}
                  
                >
                  Mande um WhatsApp
                </Button>
              </a>
            </div>

            <div className="aspect-auto h-auto w-full pl-10 lg:pl-0 2xl:w-6/12">
              <HeroSVG />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
