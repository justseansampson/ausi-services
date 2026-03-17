import Link from "next/link";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col gradient-hero w-1/2 p-10 justify-between" style={{ color: "#ffffff" }}>
        {/* Top – brand name */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/images/logos/ausi-logo.png" alt="AUSI Signature Staffing" width={36} height={36} className="rounded-lg object-contain" />
          <span className="font-bold text-xl font-brand" style={{ color: "#ffffff" }}>AUSI Signature Staffing</span>
        </Link>

        {/* Middle – large logo + headline */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40 scale-110"
              style={{ background: "radial-gradient(circle, #E8A820 0%, #C4622D 60%, transparent 100%)" }} />
            <Image
              src="/images/logos/ausi-logo.png"
              alt="AUSI Signature Staffing"
              width={220}
              height={220}
              className="relative rounded-3xl drop-shadow-2xl"
              priority
            />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight mb-3" style={{ color: "#ffffff" }}>
            Welcome back to your home management hub
          </h2>
          <p className="text-lg font-light" style={{ color: "rgba(255,255,255,0.9)" }}>
            Sign in to manage your helpers, schedules, and payments.
          </p>
        </div>

        {/* Bottom – testimonial */}
        <div className="flex items-center gap-4 rounded-2xl p-4 border" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
          <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.2)", color: "#ffffff" }}>
            SM
          </div>
          <div>
            <p className="font-medium text-sm" style={{ color: "#ffffff" }}>
              &ldquo;AUSI makes managing my household staff effortless.&rdquo;
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>Sarah M. – Home Owner, Sandton</p>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <Image src="/images/logos/ausi-logo.png" alt="AUSI Signature Staffing" width={32} height={32} className="rounded-lg object-contain" />
            <span className="font-bold text-lg text-stone-900">
              AUSI <span style={{ color: "var(--clay)" }}>Signature Staffing</span>
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-stone-900 mb-2">Sign In</h1>
          <p className="text-stone-800 mb-8">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-orange-700 font-semibold hover:underline">
              Register here
            </Link>
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Your password"
                  className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent transition pr-12"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-700 hover:text-stone-700"
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-stone-700 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-orange-700 focus:ring-orange-600" />
                Remember me
              </label>
              <Link href="#" className="text-sm text-orange-700 font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Quick login demo buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/dashboard/owner"
                className="btn-primary text-white font-semibold py-3 rounded-xl text-sm text-center"
              >
                Sign In as Owner
              </Link>
              <Link
                href="/dashboard/helper"
                className="bg-gray-900 text-white font-semibold py-3 rounded-xl text-sm text-center hover:bg-gray-800 transition-colors"
              >
                Sign In as Helper
              </Link>
            </div>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-orange-100" />
            </div>
            <div className="relative flex justify-center text-xs text-stone-800 bg-stone-50 px-3">
              or continue with
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 border border-orange-100 bg-white py-3 rounded-xl text-sm font-medium text-stone-800 hover:bg-stone-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border border-orange-100 bg-white py-3 rounded-xl text-sm font-medium text-stone-800 hover:bg-stone-50 transition-colors">
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
