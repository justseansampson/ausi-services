import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Shield,
  Clock,
  DollarSign,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Home,
  Sparkles,
  Users,
  MessageSquare,
} from "lucide-react";

const stats = [
  { value: "2,500+", label: "Verified Helpers" },
  { value: "8,400+", label: "Happy Homeowners" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: Shield,
    title: "Verified & Vetted",
    desc: "Every helper undergoes background checks, reference verification, and skills assessment before joining AUSI.",
    bg: "bg-orange-50", color: "text-orange-700",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Manage weekly rosters, book one-off tasks, and get automated reminders — all from one calendar view.",
    bg: "bg-green-50", color: "text-green-700",
  },
  {
    icon: DollarSign,
    title: "Easy Payments",
    desc: "Track hours, generate pay slips, and process payments securely. Full financial history at your fingertips.",
    bg: "bg-amber-50", color: "text-amber-700",
  },
  {
    icon: MapPin,
    title: "Live Location",
    desc: "Know when your helper has arrived and track real-time location during working hours for peace of mind.",
    bg: "bg-red-50", color: "text-red-700",
  },
  {
    icon: MessageSquare,
    title: "In-App Messaging",
    desc: "Communicate directly with your helper or employer through secure, private in-app chat.",
    bg: "bg-orange-50", color: "text-orange-700",
  },
  {
    icon: CheckCircle,
    title: "Task Management",
    desc: "Create household task lists, assign chores, set priorities, and confirm completion with photo proof.",
    bg: "bg-yellow-50", color: "text-yellow-700",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your profile",
    desc: "Sign up as a Home Owner or House Helper. Add your details, preferences, and requirements.",
  },
  {
    step: "02",
    title: "Find your match",
    desc: "Browse verified helpers by location, skills, availability and ratings — or get matched automatically.",
  },
  {
    step: "03",
    title: "Set up employment",
    desc: "Agree on terms, set a schedule, and sign a digital service agreement in minutes.",
  },
  {
    step: "04",
    title: "Manage with ease",
    desc: "Track tasks, attendance, payments, and communication all from your personal dashboard.",
  },
];

const testimonials = [
  {
    name: "Sarah Mokoena",
    role: "Home Owner · Sandton",
    avatar: "SM",
    rating: 5,
    text: "AUSI transformed how I manage my home. Finding a reliable helper and keeping track of everything used to be stressful — now it's effortless.",
  },
  {
    name: "Thandi Dlamini",
    role: "House Helper · Johannesburg",
    avatar: "TD",
    rating: 5,
    text: "I found consistent work within a week of joining. The app makes it so easy to manage my schedule and get paid on time every month.",
  },
  {
    name: "Johan van der Berg",
    role: "Home Owner · Cape Town",
    avatar: "JB",
    rating: 5,
    text: "The live tracking and task management features give me complete peace of mind. I always know what's happening at home.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="gradient-hero pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Kente-inspired dot pattern overlay */}
        <div className="absolute inset-0 pattern-overlay opacity-40" />

        {/* Decorative earthy blobs */}
        <div className="absolute top-16 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--gold)" }} />
        <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--clay)" }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left – copy */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles className="w-4 h-4" style={{ color: "var(--gold)" }} />
                South Africa&apos;s #1 Home Services Platform
              </div>

              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                Connect with Trusted{" "}
                <span style={{ color: "#E8A820" }}>House Helpers</span>
              </h1>

              <p className="text-xl text-white mb-8 leading-relaxed font-light">
                AUSI Signature Staffing brings home owners and professional house helpers
                together. Manage schedules, track tasks, process payments, and
                build lasting working relationships — all in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth/register?role=owner"
                  className="bg-white font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ color: "var(--espresso)" }}
                >
                  I need a Helper
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/auth/register?role=helper"
                  className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  I&apos;m a Helper
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right – large logo */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div className="relative">
                {/* Glowing ring behind the logo */}
                <div className="absolute inset-0 rounded-full blur-3xl opacity-30 scale-110"
                  style={{ background: "radial-gradient(circle, var(--gold) 0%, var(--clay) 60%, transparent 100%)" }} />
                <Image
                  src="/images/logos/ausi-logo.png"
                  alt="AUSI Signature Staffing"
                  width={340}
                  height={340}
                  className="relative rounded-3xl drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold mb-1" style={{ color: "var(--clay)", fontFamily: "'Sankofa Display', sans-serif" }}>
                {s.value}
              </div>
              <div className="text-sm text-stone-800 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--clay)" }}>
              Simple Process
            </span>
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4"
             >
              How AUSI Works
            </h2>
            <p className="text-stone-800 max-w-xl mx-auto text-lg leading-relaxed">
              Get started in minutes. Whether you&apos;re looking for help or
              offering your services, AUSI makes it seamless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 card-hover h-full">
                <div className="text-5xl font-extrabold leading-none mb-4" style={{ color: i % 2 === 0 ? "#fde8d8" : "#dcedcf", fontFamily: "'Sankofa Display', sans-serif" }}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-stone-800 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--clay)" }}>
              Everything You Need
            </span>
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4"
             >
              Powerful Features
            </h2>
            <p className="text-stone-800 max-w-xl mx-auto text-lg leading-relaxed">
              AUSI is packed with tools to make managing your home help
              relationship smooth, transparent, and professional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-2xl p-6 border border-orange-100 shadow-sm card-hover">
                  <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{f.title}</h3>
                  <p className="text-stone-800 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "var(--clay)" }}>
              Real Stories
            </span>
            <h2 className="text-4xl font-extrabold text-stone-900 mb-4"
             >
              What Our Community Says
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 card-hover">
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 star-filled fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                    <div className="text-xs text-stone-700">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="gradient-hero py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6"
           >
            Ready to get started?
          </h2>
          <p className="text-xl text-white/95 mb-8">
            Join thousands of home owners and helpers building better working
            relationships with AUSI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register?role=owner"
              className="bg-white font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              style={{ color: "var(--espresso)" }}
            >
              <Home className="w-5 h-5" />
              Find a Helper Today
            </Link>
            <Link
              href="/auth/register?role=helper"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Users className="w-5 h-5" />
              Join as a Helper
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="text-stone-700 py-12 px-4" style={{ background: "var(--espresso)" }}>
        {/* African geometric top border */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logos/ausi-logo.png"
                  alt="AUSI Signature Staffing"
                  width={32}
                  height={32}
                  className="rounded-lg object-contain"
                />
                <span className="font-bold text-white">
                  AUSI Signature Staffing
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                South Africa&apos;s trusted platform connecting home owners with professional house helpers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/browse" className="hover:text-white transition-colors">Browse Helpers</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Account</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/auth/login" className="hover:text-white transition-colors">Sign In</Link></li>
                <li><Link href="/auth/register" className="hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Gold divider */}
          <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, var(--clay), var(--gold), var(--forest))" }} />

          <div className="text-sm text-center">
            © {new Date().getFullYear()} AUSI Signature Staffing. All rights reserved. · Made with ❤️ in South Africa
          </div>
        </div>
      </footer>
    </div>
  );
}
