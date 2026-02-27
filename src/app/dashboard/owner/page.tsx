import DashboardNav from "@/components/DashboardNav";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  MapPin,
  DollarSign,
  Calendar,
  ChevronRight,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Tasks Completed", value: "24", change: "+3 this week", icon: CheckCircle, color: "text-orange-700", bg: "bg-orange-50" },
  { label: "Hours This Month", value: "68", change: "Thandi: 40h, Lerato: 28h", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Pending Tasks", value: "5", change: "2 overdue", icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Monthly Spend", value: "R3,200", change: "+R200 vs last month", icon: DollarSign, color: "text-violet-600", bg: "bg-violet-50" },
];

const myHelpers = [
  {
    name: "Thandi Dlamini",
    avatar: "TD",
    role: "Full-time Cleaner",
    rating: 4.9,
    status: "On duty",
    location: "Arrived 08:02",
    nextShift: "Mon, 9 Mar · 08:00",
  },
  {
    name: "Lerato Sithole",
    avatar: "LS",
    role: "Part-time Cook",
    rating: 4.8,
    status: "Off duty",
    location: "Last seen: Fri 14:30",
    nextShift: "Wed, 11 Mar · 10:00",
  },
];

const recentTasks = [
  { task: "Deep clean living room", helper: "Thandi", status: "done", date: "Today" },
  { task: "Prepare weekly meal plan", helper: "Lerato", status: "in-progress", date: "Today" },
  { task: "Laundry & ironing", helper: "Thandi", status: "done", date: "Yesterday" },
  { task: "Garden maintenance", helper: "Unassigned", status: "pending", date: "Fri 7 Mar" },
  { task: "Grocery shopping list", helper: "Lerato", status: "done", date: "Thu 6 Mar" },
];

const recentPayments = [
  { name: "Thandi Dlamini", amount: "R1,800", date: "1 Mar 2025", status: "Paid" },
  { name: "Lerato Sithole", amount: "R1,400", date: "1 Mar 2025", status: "Paid" },
  { name: "Thandi Dlamini", amount: "R1,800", date: "1 Feb 2025", status: "Paid" },
];

const statusConfig = {
  done: { label: "Done", class: "bg-orange-100 text-orange-800" },
  "in-progress": { label: "In Progress", class: "bg-blue-100 text-blue-700" },
  pending: { label: "Pending", class: "bg-orange-100 text-orange-700" },
};

export default function OwnerDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="owner" />

      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-stone-900">
                Good morning, Jane 👋
              </h1>
              <p className="text-stone-800 mt-1">
                Here&apos;s what&apos;s happening at your home today.
              </p>
            </div>
            <Link
              href="/browse"
              className="hidden sm:flex btn-primary text-white text-sm font-semibold px-4 py-2 rounded-lg items-center gap-2"
            >
              Find a Helper
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-sm font-medium text-gray-600 mt-0.5">{s.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{s.change}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* My Helpers */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">My Helpers</h2>
                  <Link href="/browse" className="text-xs text-orange-700 font-semibold hover:underline">
                    + Add
                  </Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {myHelpers.map((h) => (
                    <div key={h.name} className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {h.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900 text-sm">{h.name}</span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                h.status === "On duty"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {h.status}
                            </span>
                          </div>
                          <div className="text-xs text-gray-700 mt-0.5">{h.role}</div>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="flex items-center gap-1 text-xs text-gray-700">
                              <Star className="w-3 h-3 star-filled fill-current" />
                              {h.rating}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-700">
                              <MapPin className="w-3 h-3" />
                              {h.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                            <Calendar className="w-3 h-3" />
                            Next: {h.nextShift}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Link
                          href="/dashboard/messages"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-gray-200 py-1.5 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Message
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-gray-200 py-1.5 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick payments */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">Recent Payments</h2>
                  <Link href="/dashboard/financials" className="text-xs text-orange-700 font-semibold hover:underline">
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentPayments.map((p, i) => (
                    <div key={i} className="px-5 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{p.name}</div>
                        <div className="text-xs text-gray-600">{p.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-gray-900">{p.amount}</div>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-medium">
                          {p.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tasks + Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Task list */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">Recent Tasks</h2>
                  <button className="text-xs text-orange-700 font-semibold hover:underline">
                    + Add Task
                  </button>
                </div>
                <div className="divide-y divide-gray-50">
                  {recentTasks.map((t, i) => {
                    const cfg = statusConfig[t.status as keyof typeof statusConfig];
                    return (
                      <div key={i} className="px-5 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              t.status === "done" ? "bg-emerald-400" :
                              t.status === "in-progress" ? "bg-blue-400" : "bg-orange-400"
                            }`}
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">{t.task}</div>
                            <div className="text-xs text-gray-600">{t.helper} · {t.date}</div>
                          </div>
                        </div>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${cfg.class}`}>
                          {cfg.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Spending chart placeholder */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Monthly Spending</h2>
                  <div className="flex items-center gap-1 text-xs text-orange-700 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +6% vs last month
                  </div>
                </div>
                {/* Bar chart mock */}
                <div className="flex items-end gap-3 h-32">
                  {[
                    { month: "Oct", val: 60 },
                    { month: "Nov", val: 75 },
                    { month: "Dec", val: 55 },
                    { month: "Jan", val: 80 },
                    { month: "Feb", val: 70 },
                    { month: "Mar", val: 85 },
                  ].map((b) => (
                    <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg btn-primary opacity-80"
                        style={{ height: `${b.val}%` }}
                      />
                      <span className="text-xs text-gray-600">{b.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <div>
                    <div className="text-xs text-gray-600">This Month</div>
                    <div className="text-xl font-extrabold text-gray-900">R3,200</div>
                  </div>
                  <Link
                    href="/dashboard/financials"
                    className="flex items-center gap-1 text-sm text-orange-700 font-semibold hover:underline"
                  >
                    Full Report <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Schedule preview */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">This Week&apos;s Schedule</h2>
                  <Link href="/dashboard/schedule" className="text-xs text-orange-700 font-semibold hover:underline flex items-center gap-1">
                    Full Calendar <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="grid grid-cols-7 divide-x divide-gray-50">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div key={day} className={`px-2 py-3 text-center ${i === 0 ? "bg-orange-50" : ""}`}>
                      <div className="text-xs text-gray-600 mb-1">{day}</div>
                      <div className={`text-sm font-bold ${i === 0 ? "text-orange-700" : "text-gray-700"}`}>
                        {3 + i}
                      </div>
                      {i < 5 && (
                        <div className="mt-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 mx-auto" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
