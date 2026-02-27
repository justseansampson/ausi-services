"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Users, CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState<"owner" | "helper" | null>(null);
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col gradient-hero w-1/2 p-12 justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white">AUSI Services</span>
        </Link>

        <div>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-6">
            Join South Africa&apos;s largest home services community
          </h2>
          <div className="space-y-4">
            {[
              "Free to register",
              "Verified profiles only",
              "Secure in-app payments",
              "24/7 support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-white/50 text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-white font-semibold hover:underline">
            Sign in here
          </Link>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">
              AUSI <span className="text-emerald-600">Services</span>
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
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 w-12 rounded-full transition-colors ${
                      s < step ? "bg-emerald-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 – Role Selection */}
          {step === 1 && (
            <>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                Who are you?
              </h1>
              <p className="text-gray-500 mb-8">
                Select your role to personalise your experience.
              </p>

              <div className="grid gap-4 mb-8">
                <button
                  onClick={() => setRole("owner")}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    role === "owner"
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Home className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">
                        Home Owner
                      </div>
                      <div className="text-sm text-gray-500">
                        I&apos;m looking to hire a trusted house helper for my home.
                        Browse profiles, manage schedules and track payments.
                      </div>
                    </div>
                    {role === "owner" && (
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setRole("helper")}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    role === "helper"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">
                        House Helper
                      </div>
                      <div className="text-sm text-gray-500">
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

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-emerald-600 font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}

          {/* Step 2 – Personal Details */}
          {step === 2 && (
            <>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                Your Details
              </h1>
              <p className="text-gray-500 mb-8">
                Tell us a bit about yourself.
              </p>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+27 81 234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Johannesburg, Sandton"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
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
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                Secure your account
              </h1>
              <p className="text-gray-500 mb-8">
                Create a strong password to protect your account.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Minimum 8 characters"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat your password"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="#" className="text-emerald-600 font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-emerald-600 font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
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
