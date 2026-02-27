import DashboardNav from "@/components/DashboardNav";
import Link from "next/link";
import { MapPin, Clock, Star, DollarSign, CheckCircle, XCircle, ChevronRight } from "lucide-react";

const activeJobs = [
  {
    employer: "Jane Smith",
    avatar: "JS",
    address: "12 Sandton Drive, Sandton, JHB",
    role: "Full-time Cleaner",
    daysPerWeek: "Mon – Fri",
    hours: "08:00 – 14:00",
    salary: "R4,000/mo",
    started: "Jan 2024",
    rating: 5.0,
    status: "Active",
    color: "bg-emerald-600",
  },
  {
    employer: "Mike Patel",
    avatar: "MP",
    address: "5 William Nicol, Fourways, JHB",
    role: "Weekend Cook",
    daysPerWeek: "Sat – Sun",
    hours: "09:00 – 13:00",
    salary: "R2,240/mo",
    started: "Jun 2024",
    rating: 4.8,
    status: "Active",
    color: "bg-blue-600",
  },
];

const applications = [
  {
    employer: "Sarah Johnson",
    address: "Rosebank, JHB",
    role: "Part-time Cleaner",
    daysPerWeek: "Tue & Thu",
    hours: "09:00 – 13:00",
    salary: "R1,800/mo",
    appliedDate: "28 Feb 2025",
    status: "pending",
    color: "bg-orange-500",
  },
  {
    employer: "Linda Botha",
    address: "Centurion, PTA",
    role: "Full-time Domestic",
    daysPerWeek: "Mon – Fri",
    hours: "07:00 – 15:00",
    salary: "R4,500/mo",
    appliedDate: "25 Feb 2025",
    status: "rejected",
    color: "bg-gray-400",
  },
];

const jobHistory = [
  { employer: "Tom Williams", role: "Cleaner", period: "Jan 2023 – Dec 2023", rating: 4.9, amount: "R36,000" },
  { employer: "Priya Naidoo", role: "Cook + Cleaner", period: "Jun 2022 – Dec 2022", rating: 5.0, amount: "R21,000" },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="helper" />
      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">My Jobs</h1>
            <p className="text-gray-500 mt-1">Manage your current placements and applications</p>
          </div>

          {/* Active jobs */}
          <section className="mb-8">
            <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-4">
              Active Placements ({activeJobs.length})
            </h2>
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <div key={job.employer} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${job.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {job.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900">{job.employer}</h3>
                          <p className="text-sm text-gray-500">{job.role}</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                          {job.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 text-sm text-gray-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.address}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                      { icon: Clock, label: "Days", value: job.daysPerWeek },
                      { icon: Clock, label: "Hours", value: job.hours },
                      { icon: DollarSign, label: "Salary", value: job.salary },
                      { icon: Star, label: "Rating", value: `${job.rating} ★` },
                    ].map((d) => (
                      <div key={d.label} className="bg-gray-50 rounded-xl p-3">
                        <div className="text-xs text-gray-400 mb-0.5">{d.label}</div>
                        <div className="text-sm font-semibold text-gray-800">{d.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Started {job.started}</span>
                    <div className="flex gap-2">
                      <Link
                        href="/dashboard/messages"
                        className="border border-gray-200 text-gray-600 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                      >
                        Message
                      </Link>
                      <Link
                        href="/dashboard/schedule"
                        className="btn-primary text-white px-4 py-2 rounded-xl font-medium flex items-center gap-1"
                      >
                        Schedule <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section className="mb-8">
            <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-4">
              Applications ({applications.length})
            </h2>
            <div className="space-y-3">
              {applications.map((app, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${app.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {app.employer[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{app.employer}</h3>
                          <p className="text-sm text-gray-500">{app.role} · {app.address}</p>
                        </div>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                            app.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {app.status === "pending" ? (
                            <Clock className="w-3 h-3" />
                          ) : (
                            <XCircle className="w-3 h-3" />
                          )}
                          {app.status === "pending" ? "Pending" : "Not Selected"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                        <span>{app.daysPerWeek} · {app.hours}</span>
                        <span className="font-semibold text-gray-700">{app.salary}</span>
                        <span>Applied {app.appliedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Job history */}
          <section>
            <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-4">
              Work History
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-50">
                {jobHistory.map((h, i) => (
                  <div key={i} className="px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                        {h.employer[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{h.employer}</div>
                        <div className="text-sm text-gray-500">{h.role} · {h.period}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end">
                        <Star className="w-3.5 h-3.5 star-filled fill-current" />
                        <span className="font-bold text-gray-900">{h.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">{h.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
