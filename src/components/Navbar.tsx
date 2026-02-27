"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">
              AUSI <span className="text-emerald-600">Services</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#how-it-works" className="text-gray-600 hover:text-gray-900 nav-link text-sm font-medium">
              How It Works
            </Link>
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 nav-link text-sm font-medium">
              Features
            </Link>
            <Link href="/browse" className="text-gray-600 hover:text-gray-900 nav-link text-sm font-medium">
              Browse Helpers
            </Link>
            <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 nav-link text-sm font-medium">
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
            className="md:hidden p-2 text-gray-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link href="/#how-it-works" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
            How It Works
          </Link>
          <Link href="/#features" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="/browse" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
            Browse Helpers
          </Link>
          <Link href="/auth/login" className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
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
