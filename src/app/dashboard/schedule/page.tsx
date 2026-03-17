import DashboardNav from "@/components/DashboardNav";
import { Clock, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [3, 4, 5, 6, 7, 8, 9];
const hours = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

const shifts = [
  { day: 0, helper: "Thandi", startHour: 1, duration: 6, color: "bg-orange-100 border-emerald-300 text-emerald-800" },
  { day: 1, helper: "Thandi", startHour: 1, duration: 6, color: "bg-orange-100 border-emerald-300 text-emerald-800" },
  { day: 2, helper: "Thandi", startHour: 1, duration: 6, color: "bg-orange-100 border-emerald-300 text-emerald-800" },
  { day: 3, helper: "Thandi", startHour: 1, duration: 6, color: "bg-orange-100 border-emerald-300 text-emerald-800" },
  { day: 4, helper: "Thandi", startHour: 1, duration: 6, color: "bg-orange-100 border-emerald-300 text-emerald-800" },
  { day: 5, helper: "Lerato", startHour: 2, duration: 4, color: "bg-blue-100 border-blue-300 text-blue-800" },
  { day: 6, helper: "Lerato", startHour: 2, duration: 4, color: "bg-blue-100 border-blue-300 text-blue-800" },
];

const upcomingEvents = [
  { date: "Mon 3 Mar", time: "08:00 – 14:00", helper: "Thandi Dlamini", task: "General Cleaning + Laundry", status: "confirmed" },
  { date: "Tue 4 Mar", time: "08:00 – 14:00", helper: "Thandi Dlamini", task: "Deep Clean Bathrooms", status: "confirmed" },
  { date: "Wed 5 Mar", time: "08:00 – 14:00", helper: "Thandi Dlamini", task: "Kitchen + Windows", status: "confirmed" },
  { date: "Sat 8 Mar", time: "09:00 – 13:00", helper: "Lerato Sithole", task: "Meal Prep + Cooking", status: "confirmed" },
  { date: "Sun 9 Mar", time: "09:00 – 13:00", helper: "Lerato Sithole", task: "Sunday Lunch + Prep", status: "pending" },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="owner" />
      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Schedule</h1>
              <p className="text-gray-700 mt-1">Manage your helpers&apos; weekly roster</p>
            </div>
            <button className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Shift
            </button>
          </div>

          {/* Week nav */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <h2 className="font-bold text-gray-900">3 – 9 March 2025</h2>
              <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Calendar grid */}
            <div className="overflow-x-auto">
              <div className="min-w-[700px]">
                {/* Day headers */}
                <div className="grid grid-cols-8 border-b border-gray-100">
                  <div className="py-3 px-3 text-xs text-gray-600 font-medium text-right">Time</div>
                  {days.map((d, i) => (
                    <div key={d} className={`py-3 text-center border-l border-gray-50 ${i === 0 ? "bg-orange-50" : ""}`}>
                      <div className="text-xs text-gray-600 font-medium">{d}</div>
                      <div className={`text-lg font-bold ${i === 0 ? "text-orange-700" : "text-gray-700"}`}>
                        {dates[i]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time rows */}
                {hours.map((h, hi) => (
                  <div key={h} className="grid grid-cols-8 border-b border-gray-50 min-h-[48px]">
                    <div className="px-3 py-2 text-xs text-gray-600 text-right flex items-start pt-2">{h}</div>
                    {days.map((_, di) => {
                      const shift = shifts.find((s) => s.day === di && s.startHour === hi);
                      return (
                        <div key={di} className={`border-l border-gray-50 relative ${di === 0 ? "bg-orange-50/30" : ""}`}>
                          {shift && (
                            <div
                              className={`absolute inset-x-1 top-1 border rounded-lg px-2 py-1 text-xs font-semibold z-10 ${shift.color}`}
                              style={{ height: `${shift.duration * 48 - 6}px` }}
                            >
                              {shift.helper}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-sm text-gray-600">Thandi Dlamini</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="text-sm text-gray-600">Lerato Sithole</span>
            </div>
          </div>

          {/* Upcoming shifts list */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Upcoming Shifts</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-center w-16">
                      <div className="text-xs text-gray-600 font-medium">{ev.date.split(" ")[0]}</div>
                      <div className="text-lg font-extrabold text-gray-900">{ev.date.split(" ")[1]}</div>
                      <div className="text-xs text-gray-600">{ev.date.split(" ").slice(2).join(" ")}</div>
                    </div>
                    <div className="w-px h-12 bg-gray-100" />
                    <div>
                      <div className="font-semibold text-gray-900">{ev.task}</div>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-sm text-gray-700">{ev.helper}</span>
                        <span className="flex items-center gap-1 text-sm text-gray-700">
                          <Clock className="w-3.5 h-3.5" />
                          {ev.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      ev.status === "confirmed"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {ev.status === "confirmed" ? "Confirmed" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
