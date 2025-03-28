"use client";
import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const services: { title: string; text: string }[] = [
  {
    title: "LOCALIZAÇÃO DE VAZAMENTOS",
    text: "Localizamos o vazamento utilizando dos melhores equipamentos tecnológicos do mercado, assim <strong>evitando danos ao seu imóvel durante a localização</strong> do vazamento.",
  },
  {
    title: "REPAROS HIDRÁULICOS",
    text: "Com mão de obra especializada e materiais de alta qualidade, garantimos um resultado superior em seu reparo.",
  },
  {
    title: "TROCA DE CHUVEIRO E ETC.",
    text: "Trocamos seu chuveiro, torneira ou qualquer parte hidráulica.",
  },
  {
    title: "LIMPEZA DE RESERVATÓRIOS",
    text: "Realizamos a limpeza de reservatórios de água, mantendo a saúde e a qualidade da água que você consome.",
  },
  {
    title: "DESENTUPIMENTO",
    text: "Desentupimentos de pias e de ralos.",
  },
  {
    title: "SEU PROBLEMA, NOSSA PRIORIDADE",
    text: "Não encontrou a solução que procurava? Entre em contato e solicite uma visita técnica. Nossa equipe está pronta para responder suas perguntas e resolver seus problemas.",
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  return (
    <section
      className="mx-auto w-full overflow-hidden p-20"
      id="Services"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="flex w-full flex-col items-center justify-center gap-6 px-1 py-3 md:p-5 md:items-start md:justify-start">
          <div className="text-center md:text-start">
            <h2 className="text-5xl font-bold text-gray-900">
              Serviços de primeira qualidade para seu imóvel!
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                className="flex flex-col items-start justify-start rounded-bl-2xl rounded-tr-2xl bg-powerblue-dark p-4 md:p-5 text-white"
                key={index}
              >
                <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
                <p className="text-lg text-white" dangerouslySetInnerHTML={{ __html: service.text }}></p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
