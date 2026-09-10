"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "READY TO WEAR", href: "/ready-to-wear" },
  { label: "THE BRAND", href: "/the-brand" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [cartCount] = useState(0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <nav className="relative flex items-center justify-between h-14" style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-[0.3em] uppercase text-teal-500 shrink-0"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          MEK BOUTIQUE
        </Link>

        {/* Center Nav Links */}
        <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-black hover:opacity-50 transition-opacity duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex items-center">
          <Link href="/shopping-cart" className="flex items-center hover:opacity-50 transition-opacity duration-200">
            <span className="text-sm">Shopping cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
