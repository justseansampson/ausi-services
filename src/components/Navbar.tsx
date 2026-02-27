"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logos/ausi-logo.png"
              alt="AUSI Signature Staffing"
              width={36}
              height={36}
              className="rounded-lg object-contain"
            />
            <span className="font-bold text-xl text-stone-900 font-brand">
              AUSI <span style={{ color: "var(--clay)" }}>Signature Staffing</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#how-it-works" className="text-stone-700 hover:text-stone-900 nav-link text-sm font-medium">
              How It Works
            </Link>
            <Link href="/#features" className="text-stone-700 hover:text-stone-900 nav-link text-sm font-medium">
              Features
            </Link>
            <Link href="/browse" className="text-stone-700 hover:text-stone-900 nav-link text-sm font-medium">
              Browse Helpers
            </Link>
            <Link href="/auth/login" className="text-stone-700 hover:text-stone-900 nav-link text-sm font-medium">
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="btn-primary text-white text-sm font-semibold px-5 py-2 rounded-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/#how-it-works" className="text-stone-800 font-medium" onClick={() => setOpen(false)}>
            How It Works
          </Link>
          <Link href="/#features" className="text-stone-800 font-medium" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/browse" className="text-stone-800 font-medium" onClick={() => setOpen(false)}>
            Browse Helpers
          </Link>
          <Link href="/auth/login" className="text-stone-800 font-medium" onClick={() => setOpen(false)}>
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="btn-primary text-white font-semibold px-5 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
