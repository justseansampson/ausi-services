"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  DollarSign,
  MessageSquare,
  User,
  LogOut,
  Home,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const ownerNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/owner", icon: LayoutDashboard },
  { label: "Find Helpers", href: "/browse", icon: Users },
  { label: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { label: "Financials", href: "/dashboard/financials", icon: DollarSign },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "My Profile", href: "/dashboard/profile", icon: User },
];

const helperNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard/helper", icon: LayoutDashboard },
  { label: "My Jobs", href: "/dashboard/jobs", icon: Home },
  { label: "Schedule", href: "/dashboard/schedule", icon: Calendar },
  { label: "Earnings", href: "/dashboard/financials", icon: DollarSign },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "My Profile", href: "/dashboard/profile", icon: User },
];

interface Props {
  role?: "owner" | "helper";
}

export default function DashboardNav({ role = "owner" }: Props) {
  const pathname = usePathname();
  const navItems = role === "owner" ? ownerNav : helperNav;

  return (
    <>
      {/* Sidebar – desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-orange-100 min-h-screen fixed left-0 top-0">
        <div className="px-5 py-4 border-b border-orange-100">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logos/ausi-logo.png"
              alt="AUSI Signature Staffing"
              width={32}
              height={32}
              className="rounded-lg object-contain"
            />
            <span className="font-bold text-lg text-stone-900 font-brand">
              AUSI <span style={{ color: "var(--clay)" }}>Signature Staffing</span>
            </span>
          </Link>
        </div>

        <div className="px-3 py-4 flex-1">
          <p className="px-3 mb-2 text-xs font-semibold text-stone-700 uppercase tracking-wider">
            {role === "owner" ? "Home Owner" : "House Helper"}
          </p>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    active
                      ? "text-white"
                      : "text-stone-700 hover:bg-orange-50 hover:text-stone-900"
                  )}
                  style={active ? { background: "var(--clay)" } : {}}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* African geometric accent strip */}
        <div className="h-1 african-border" />

        <div className="px-3 py-4 border-t border-orange-100">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:bg-orange-50 hover:text-stone-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Top bar – mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-orange-100 flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/ausi-logo.png"
            alt="AUSI Signature Staffing"
            width={28}
            height={28}
            className="rounded-md object-contain"
          />
          <span className="font-bold text-base text-stone-900 font-brand">
            AUSI <span style={{ color: "var(--clay)" }}>Signature Staffing</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2 text-stone-800">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: "var(--clay)" }}>
            JS
          </div>
        </div>
      </header>

      {/* Bottom nav – mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-orange-100 flex justify-around px-2 py-2">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs font-medium transition-colors",
                active ? "" : "text-stone-800"
              )}
              style={active ? { color: "var(--clay)" } : {}}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label.split(" ")[0]}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
