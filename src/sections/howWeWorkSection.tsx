// components/HowWeWork.jsx
"use client";
import React from 'react';

import { motion } from "framer-motion";
import { fadeIn } from "../../animation/variants";
import { useInView } from "react-intersection-observer";

const HowWeWorkSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refQuote, inViewQuote] = useInView({ triggerOnce: false });

  const workSteps = [
    {
      id: '01',
      title: 'Contato',
      description: 'Você entra em contato conosco informando sua situação.'
    },
    {
      id: '02',
      title: 'Visita',
      description: 'Nossa equipe técnica irá até você para avaliar detalhadamente o problema.'
    },
    {
      id: '03',
      title: 'Orçamento',
      description: 'Apresentamos um orçamento justo, transparente e sem compromisso.'
    },
    {
      id: '04',
      title: 'Execução',
      description: 'Executamos o(s) serviço(s) com qualidade, eficiência e garantia.'
    }
  ];

  return (
    <section
      className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      id="HowWeWork"
      ref={ref}
    >
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-5 lg:flex-row lg:py-16 xl:max-w-[1380px]"
      >
        <div className="max-w-6xl mx-auto p-5">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Como trabalhamos</h2>
              <p className="text-lg text-gray-700 mb-8">
                Trabalhamos com profissionalismo e dedicação, oferecendo soluções duradouras e de alta qualidade para seus problemas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6" >
              {workSteps.map((step) => (
                <div key={step.id} className="relative">
                  <div className="absolute -top-3 -left-3 bg-powerblue-light text-white w-12 h-12 flex items-center justify-center rounded-lg">
                    <span className="font-bold">{step.id}</span>
                  </div>
                  <div className="bg-powerblue-dark p-6 pt-10 rounded-lg shadow-sm h-full">
                    <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-white">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeWorkSection;