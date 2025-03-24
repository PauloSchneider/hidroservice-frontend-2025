import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import Footer from "@/components/footer";

import { CompanyInfo } from "./globals";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: CompanyInfo.company,
  description: "Evite transtornos e prejuízos. Resolva seus vazamentos de forma rápida e eficaz.",
  keywords: "encanador, encanamento, reparo de encanamento, instalação de encanamento, desentupimento, vazamento, detecção de vazamento, conserto de tubulação, manutenção hidráulica, encanador residencial, encanador comercial, cano entupido, vaso sanitário entupido, pia entupida, vazamento de água, infiltração, pressão baixa da água, aquecedor de água com defeito, reparo de válvula, troca de cano, Anta Gorda, Arroio do Meio, Arvorezinha, Bom Retiro do Sul, Canudos do Vale, Capitão, Colinas, Coqueiro Baixo, Cruzeiro do Sul, Doutor Ricardo, Encantado, Estrela, Fazenda Vilanova, Forquetinha, Ilópolis, Imigrante, Lajeado, Marques de Souza, Muçum, Nova Bréscia, Paverama, Poço das Antas, Pouso Novo, Progresso, Putinga, Relvado, Roca Sales, Santa Clara do Sul, Sério, Tabaí, Taquari, Teutônia, Travesseiro, Venâncio Aires, Vespasiano Corrêa  e Westfália",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
