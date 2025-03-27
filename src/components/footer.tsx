import React from "react";
import Image from "next/image";

import LogoVertical from "../../public/logo_vertical.svg";
import { CompanyInfo } from "@/app/globals";
import WhatsAppButton from "./whatsAppButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:border-gamtech mx-auto w-full cursor-default items-center bg-powerblue-dark shadow-xl md:px-0 px-4 py-6 text-white">
      <section className="mx-auto flex flex-col items-center justify-center gap-2 px-8 pt-4 text-xs w-full"> 
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-4 w-full"> 
          <div className="flex flex-col items-center justify-center md:items-center md:flex-grow">
            <p className="px-5 text-center text-sm text-white">2024 - {currentYear} {CompanyInfo.company}</p>
            <h3 className="text-base font-medium uppercase">Atendimento</h3>
            <p>Segunda a sexta-feira, das 08:00h às 12:00h e 13:30h às 18:00h</p>
            <p>Sábado das 08:00h às 12:00h</p>
            <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-medium uppercase">Telefone - </h3>
                <p>{CompanyInfo.phone}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <h3 className="font-medium uppercase">E-mail - </h3>
                <p>{CompanyInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </footer>
  );
  
}
