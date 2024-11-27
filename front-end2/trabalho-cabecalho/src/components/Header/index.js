"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./styles.css";
import Image from "next/image"; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const closeMenuOnClickOutside = (e) => {
    const menu = document.querySelector('.nav');
    const menuButton = document.querySelector('.menu-toggle');
    if (menu && !menu.contains(e.target) && !menuButton.contains(e.target)) {
      setIsOpen(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOnClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeMenuOnClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <Image src="/images/logo.avif" alt="Logo" className="logo"  width="130" height="50"/>
    

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Abrir menu"
      >
        {/* ☰ */}
        <Image src='/images/icone-trocar.png' alt='barra' width='50'  height="50"></Image>
      </button>
      <nav className={`nav ${isOpen ? "active" : ""}`}>
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
