'use client'
import React, { useEffect, useRef, useState } from "react";
import { Col, Container } from '@citrica/objects';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { siteConfig } from "@/config/site";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import Icon from "../atoms/icon";


const Navbar = () => {
  const [active, setActive] = useState("Inicio");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  // change nav color scrolling
  const [colorbg, setcolorbg] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 500) {
      setcolorbg(true)
    } else {
      setcolorbg(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  // Function to handle clicks outside of the menu
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <nav className={`w-screen fixed box-border z-30 h-16 ${colorbg ? "bg-[rgba(48,43,43,0.65)]" : "bg-black"}`}>
      <Container>
        <Col cols={{ lg: 12, md: 6, sm: 4 }} className="h-16 flex justify-between items-center pt-3 pb-3">
          {/* Logo */}
          {pathname === '/' ? (
            <div>
              <picture >
                <Link href={"/"} >
                  <img src='/img/citrica-logo.png' alt="logo-citrica" className="h-10" />
                </Link>
              </picture>
            </div>
          ) : (
            <div className="flex cursor-pointer">
              <picture >
                <Link href={"/"} >
                  <img src={colorbg ? '/img/citrica-logo.png' : '/img/citrica-logo.png'} alt="logo-galix" className="h-10" />
                </Link>
              </picture>
            </div>
          )}
          {/* Desktop Navigation */}
          <ul className="only-lg-flex list-none gap-9">
            {siteConfig.navLinks.map((nav, index) => (
              <li
                key={index}
                className={`flex cursor-pointer nav_link ${active === nav.href ? "nav_link_active" : ""}`}
                onClick={() => setActive(nav.href)}
              >
                <Link
                  className={`text-white ${pathname === '/'
                    ? (active === nav.href ? 'text-[#F7BB58]' : 'text-[#FFFFFF]')
                    : colorbg
                      ? (active === nav.href ? 'text-[#F7BB58]' : 'text-[#FFFFFF]')
                      : (active === nav.href ? 'text-[#F7BB58]' : 'text-[#000000]')
                    }`}
                  href={`${nav.href}`}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
          <div ref={menuRef} className="only-sm-md-flex justify-end items-center p-1 flex-1">
            <Button size="sm" variant="light" onPress={() => onOpen()}>
              <Icon name="Menu" color="#FFF" size={24} strokeWidth={2}/>
            </Button>
          </div>
        </Col>
      </Container>
      {/* Mobile Navigation */}
      <Drawer isOpen={isOpen} size={"xs"} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Menú</DrawerHeader>
              <DrawerBody>
                <ul className="list-none flex justify-start items-start flex-1 flex-col">
                  {siteConfig.navLinks.map((nav, index) => (
                    <li
                      key={index}
                      className={`font-medium cursor-pointer text-[16px] ${index === siteConfig.navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => {
                        setActive(nav.href);
                        onClose();
                      }}
                    >
                      <Link href={`${nav.href}`}>
                        {nav.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Navbar;
