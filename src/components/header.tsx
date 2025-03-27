"use client";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { CompanySocialNetwork } from "@/app/globals";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { title: string; href: string }[] = [
    {
      title: "Como Trabalhamos",
      href: "#HowHeWork",
    },
    {
      title: "Serviços",
      href: "#Services",
    },
    {
      title: "Contato",
      href: "#Contact",
    },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-powerblue-dark bg-opacity-30 py-2 h-32"
    >
      <NavbarContent justify="start" className="pr-16">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link href="#" className="ml-6">
          <NavbarBrand>
            <Image
              src={Logo}
              alt="HIDROSERVICE"
              sizes="100vw"
              height={0}
              width={0}
              className="h-auto w-auto"
            />
          </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden md:flex justify-center flex-1 gap-8 ml-16" justify="center">
        <NavbarItem> 
          <Link
            className="text-white text-lg font-medium transition-all duration-300 hover:font-bold"
            href="#HowWeWork"
          >
            Como Trabalhamos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white text-lg font-medium transition-all duration-300 hover:font-bold"
            href="#Services"
          >
            Serviços
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white text-lg font-medium transition-all duration-300 hover:font-bold"
            href="#Contacts"
          >
            Contatos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex cursor-pointer items-center justify-center gap-2">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href={CompanySocialNetwork.instagram}
              variant="flat"
              isIconOnly
              target="_blank"
              className="rounded-full"
              startContent={
                <FaInstagram
                  size={40}
                  className="rounded-full border-2 p-2 text-white"
                />
              }
            />
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href={CompanySocialNetwork.whatsapp}
              variant="flat"
              isIconOnly
              target="_blank"
              className="rounded-full"
              startContent={
                <FaWhatsapp
                  size={40}
                  className="rounded-full border-2 p-2 text-white"
                />
              }
            />
          </NavbarItem>
        </div>
      </NavbarContent>
      <NavbarMenu className="pt-20">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
