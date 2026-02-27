import DashboardNav from "@/components/DashboardNav";
import Link from "next/link";
import {
  Star,
  Clock,
  CheckCircle,
  DollarSign,
  Calendar,
  ChevronRight,
  MessageSquare,
  MapPin,
  TrendingUp,
  Briefcase,
} from "lucide-react";

const stats = [
  { label: "Jobs Completed", value: "142", change: "+8 this month", icon: CheckCircle, color: "text-orange-700", bg: "bg-orange-50" },
  { label: "Hours Worked", value: "38h", change: "This week", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Monthly Earnings", value: "R3,800", change: "+R400 vs last month", icon: DollarSign, color: "text-violet-600", bg: "bg-violet-50" },
  { label: "My Rating", value: "4.9★", change: "Based on 47 reviews", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
];

const currentJobs = [
  {
    employer: "Jane Smith",
    avatar: "JS",
    address: "Sandton, JHB",
    role: "Full-time Cleaner",
    daysPerWeek: "Mon – Fri",
    hours: "08:00 – 14:00",
    salary: "R1,800/mo",
    status: "Active",
  },
  {
    employer: "Mike Patel",
    avatar: "MP",
    address: "Fourways, JHB",
    role: "Weekend Cook",
    daysPerWeek: "Sat – Sun",
    hours: "09:00 – 13:00",
    salary: "R1,200/mo",
    status: "Active",
  },
];

const todayTasks = [
  { task: "Vacuum all rooms", room: "Entire house", status: "done", time: "08:30" },
  { task: "Mop kitchen & bathrooms", room: "Kitchen + 2 bathrooms", status: "done", time: "09:15" },
  { task: "Laundry (wash + hang)", room: "Laundry room", status: "in-progress", time: "10:00" },
  { task: "Window cleaning", room: "Lounge & dining room", status: "pending", time: "11:30" },
  { task: "Iron clothes", room: "Guest bedroom", status: "pending", time: "13:00" },
];

const earningsHistory = [
  { period: "March 2025", amount: "R3,800", status: "Pending" },
  { period: "February 2025", amount: "R3,400", status: "Paid" },
  { period: "January 2025", amount: "R3,600", status: "Paid" },
];

const statusConfig = {
  done: { label: "Done", class: "bg-orange-100 text-orange-800" },
  "in-progress": { label: "In Progress", class: "bg-blue-100 text-blue-700" },
  pending: { label: "Pending", class: "bg-gray-100 text-gray-700" },
};

export default function HelperDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="helper" />

      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-stone-900">
                Good morning, Thandi 👋
              </h1>
              <p className="text-gray-700 mt-1">
                You have 5 tasks scheduled for today.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-2">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-semibold text-orange-800">On Duty</span>
            </div>
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
            {/* Left col */}
            <div className="lg:col-span-1 space-y-6">
              {/* Current Jobs */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">My Jobs</h2>
                  <Link href="/dashboard/jobs" className="text-xs text-orange-700 font-semibold hover:underline flex items-center gap-1">
                    View All <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {currentJobs.map((job) => (
                    <div key={job.employer} className="px-5 py-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {job.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-900 text-sm">{job.employer}</span>
                            <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-medium">
                              {job.status}
                            </span>
                          </div>
                          <div className="text-xs text-gray-700 mt-0.5">{job.role}</div>
                          <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                            <MapPin className="w-3 h-3" />
                            {job.address}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
                          <div className="text-gray-600">Days</div>
                          <div className="font-semibold text-gray-700 text-xs">{job.daysPerWeek}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
                          <div className="text-gray-600">Hours</div>
                          <div className="font-semibold text-gray-700 text-xs">{job.hours}</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg px-2 py-1.5 text-center">
                          <div className="text-gray-600">Pay</div>
                          <div className="font-semibold text-gray-700 text-xs">{job.salary}</div>
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
                        <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-gray-200 py-1.5 rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
                          Check In
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Earnings */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">Earnings</h2>
                  <Link href="/dashboard/financials" className="text-xs text-orange-700 font-semibold hover:underline">
                    Details
                  </Link>
                </div>
                <div className="divide-y divide-gray-50">
                  {earningsHistory.map((e, i) => (
                    <div key={i} className="px-5 py-3 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{e.period}</div>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <div className="text-sm font-bold text-gray-900">{e.amount}</div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            e.status === "Paid"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {e.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's tasks */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">Today&apos;s Tasks</h2>
                  <span className="text-xs text-gray-600">Monday, 3 March 2025</span>
                </div>
                <div className="divide-y divide-gray-50">
                  {todayTasks.map((t, i) => {
                    const cfg = statusConfig[t.status as keyof typeof statusConfig];
                    return (
                      <div key={i} className="px-5 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              t.status === "done" ? "bg-emerald-400" :
                              t.status === "in-progress" ? "bg-blue-400" : "bg-gray-300"
                            }`}
                          />
                          <div>
                            <div className={`text-sm font-medium ${t.status === "done" ? "line-through text-gray-600" : "text-gray-900"}`}>
                              {t.task}
                            </div>
                            <div className="text-xs text-gray-600">{t.room} · {t.time}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${cfg.class}`}>
                            {cfg.label}
                          </span>
                          {t.status !== "done" && (
                            <button className="text-xs text-orange-700 font-semibold hover:underline">
                              Mark done
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Earnings chart */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Earnings History</h2>
                  <div className="flex items-center gap-1 text-xs text-orange-700 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +12% this quarter
                  </div>
                </div>
                <div className="flex items-end gap-3 h-28">
                  {[
                    { month: "Oct", val: 65 },
                    { month: "Nov", val: 72 },
                    { month: "Dec", val: 60 },
                    { month: "Jan", val: 88 },
                    { month: "Feb", val: 80 },
                    { month: "Mar", val: 95 },
                  ].map((b) => (
                    <div key={b.month} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full rounded-t-lg bg-gradient-to-t from-emerald-600 to-emerald-400"
                        style={{ height: `${b.val}%` }}
                      />
                      <span className="text-xs text-gray-600">{b.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                  <div>
                    <div className="text-xs text-gray-600">Projected this month</div>
                    <div className="text-xl font-extrabold text-gray-900">R3,800</div>
                  </div>
                  <Link
                    href="/dashboard/financials"
                    className="flex items-center gap-1 text-sm text-orange-700 font-semibold hover:underline"
                  >
                    Full Report <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
                  <h2 className="font-bold text-gray-900">This Week</h2>
                  <Link href="/dashboard/schedule" className="text-xs text-orange-700 font-semibold hover:underline flex items-center gap-1">
                    Full Calendar <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="p-5 space-y-2">
                  {[
                    { day: "Mon 3", employer: "Jane Smith", time: "08:00 – 14:00", active: true },
                    { day: "Tue 4", employer: "Jane Smith", time: "08:00 – 14:00", active: false },
                    { day: "Wed 5", employer: "Jane Smith", time: "08:00 – 14:00", active: false },
                    { day: "Sat 8", employer: "Mike Patel", time: "09:00 – 13:00", active: false },
                    { day: "Sun 9", employer: "Mike Patel", time: "09:00 – 13:00", active: false },
                  ].map((shift, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-xl border ${
                        shift.active ? "border-orange-200 bg-orange-50" : "border-gray-100 bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-8 rounded-full ${shift.active ? "bg-orange-500" : "bg-gray-300"}`} />
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{shift.day}</div>
                          <div className="text-xs text-gray-700">{shift.employer}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-xs text-gray-600 font-medium">{shift.time}</span>
                        {shift.active && (
                          <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-medium">
                            Today
                          </span>
                        )}
                      </div>
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
