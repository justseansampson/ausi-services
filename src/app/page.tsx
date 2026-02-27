import Navbar from "@/components/Navbar";
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
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc: "Manage weekly rosters, book one-off tasks, and get automated reminders — all from one calendar view.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: DollarSign,
    title: "Easy Payments",
    desc: "Track hours, generate pay slips, and process payments securely. Full financial history at your fingertips.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: MapPin,
    title: "Live Location",
    desc: "Know when your helper has arrived and track real-time location during working hours for peace of mind.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: MessageSquare,
    title: "In-App Messaging",
    desc: "Communicate directly with your helper or employer through secure, private in-app chat.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: CheckCircle,
    title: "Task Management",
    desc: "Create household task lists, assign chores, set priorities, and confirm completion with photo proof.",
    color: "bg-teal-50 text-teal-600",
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

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              South Africa&apos;s #1 Home Services Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Connect with Trusted{" "}
              <span className="text-emerald-300">House Helpers</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              AUSI Services brings home owners and professional house helpers
              together. Manage schedules, track tasks, process payments, and
              build lasting working relationships — all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/register?role=owner"
                className="btn-primary bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 shadow-lg"
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
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Simple Process
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              How AUSI Works
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Get started in minutes. Whether you&apos;re looking for help or
              offering your services, AUSI makes it seamless.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover h-full">
                  <div className="text-5xl font-extrabold text-emerald-100 mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Everything You Need
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              AUSI is packed with tools to make managing your home help
              relationship smooth, transparent, and professional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Real Stories
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
              >
                <div className="flex mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 star-filled fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of home owners and helpers building better working
            relationships with AUSI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register?role=owner"
              className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">AUSI Services</span>
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
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} AUSI Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
