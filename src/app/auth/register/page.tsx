"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Home, Users, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState<"owner" | "helper" | null>(null);
  const [step, setStep] = useState(1);

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
          <h2 className="text-3xl font-extrabold leading-tight mb-6" style={{ color: "#ffffff" }}>
            Join South Africa&apos;s largest home services community
          </h2>
          <div className="space-y-3 text-left w-full max-w-xs">
            {[
              "Free to register",
              "Verified profiles only",
              "Secure in-app payments",
              "24/7 support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#E8A820" }} />
                <span className="font-medium" style={{ color: "#ffffff" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom – sign in link */}
        <div className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold underline" style={{ color: "#ffffff" }}>
            Sign in here
          </Link>
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

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s <= step
                      ? "btn-primary text-white"
                      : "bg-gray-100 text-stone-700"
                  }`}
                >
                  {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 w-12 rounded-full transition-colors ${
                      s < step ? "bg-orange-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 – Role Selection */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-extrabold text-stone-900 mb-2">
                Who are you?
              </h1>
              <p className="text-stone-800 mb-8">
                Select your role to personalise your experience.
              </p>

              <div className="grid gap-4 mb-8">
                <button
                  onClick={() => setRole("owner")}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    role === "owner"
                      ? "border-orange-500 bg-orange-50"
                      : "border-orange-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-orange-700" />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 mb-1">
                        Home Owner
                      </div>
                      <div className="text-sm text-stone-800">
                        I&apos;m looking to hire a trusted house helper for my home.
                        Browse profiles, manage schedules and track payments.
                      </div>
                    </div>
                    {role === "owner" && (
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setRole("helper")}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    role === "helper"
                      ? "border-blue-500 bg-blue-50"
                      : "border-orange-100 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 mb-1">
                        House Helper
                      </div>
                      <div className="text-sm text-stone-800">
                        I offer home services and want to connect with home
                        owners seeking professional, reliable help.
                      </div>
                    </div>
                    {role === "helper" && (
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              </div>

              <button
                onClick={() => role && setStep(2)}
                disabled={!role}
                className="w-full btn-primary text-white font-semibold py-3.5 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>

              <p className="text-center text-sm text-stone-800 mt-4">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-orange-700 font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}

          {/* Step 2 – Personal Details */}
          {step === 2 && (
            <>
              <h1 className="text-3xl font-extrabold text-stone-900 mb-2">
                Your Details
              </h1>
              <p className="text-stone-800 mb-8">
                Tell us a bit about yourself.
              </p>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+27 81 234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Johannesburg, Sandton"
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-orange-100 text-stone-800 font-semibold py-3.5 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 btn-primary text-white font-semibold py-3.5 rounded-xl"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* Step 3 – Password & Finish */}
          {step === 3 && (
            <>
              <h1 className="text-3xl font-extrabold text-stone-900 mb-2">
                Secure your account
              </h1>
              <p className="text-stone-800 mb-8">
                Create a strong password to protect your account.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-800 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className="w-full px-4 py-3 rounded-xl border border-orange-100 bg-white text-stone-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition"
                  />
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-orange-700 focus:ring-orange-600"
                  />
                  <span className="text-sm text-stone-700">
                    I agree to the{" "}
                    <Link href="#" className="text-orange-700 font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-orange-700 font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-orange-100 text-stone-800 font-semibold py-3.5 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  Back
                </button>
                <Link
                  href={role === "owner" ? "/dashboard/owner" : "/dashboard/helper"}
                  className="flex-1 btn-primary text-white font-semibold py-3.5 rounded-xl text-center"
                >
                  Create Account
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
