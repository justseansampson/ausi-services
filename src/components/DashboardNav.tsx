"use client";

import Link from "next/link";
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
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-100 min-h-screen fixed left-0 top-0">
        <div className="px-6 py-5 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-gray-900">
              AUSI <span className="text-emerald-600">Services</span>
            </span>
          </Link>
        </div>

        <div className="px-3 py-4 flex-1">
          <p className="px-3 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
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
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="px-3 py-4 border-t border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Top bar – mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 flex items-center justify-between px-4 h-14">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg btn-primary flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-base text-gray-900">
            AUSI <span className="text-emerald-600">Services</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-500">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
            JS
          </div>
        </div>
      </header>

      {/* Bottom nav – mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 flex justify-around px-2 py-2">
        {navItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs font-medium transition-colors",
                active ? "text-emerald-600" : "text-gray-500"
              )}
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
