import DashboardNav from "@/components/DashboardNav";
import { TrendingUp, Download, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";

const summaryStats = [
  { label: "Total Paid (2025)", value: "R9,600", icon: CheckCircle, color: "text-orange-700", bg: "bg-orange-50" },
  { label: "Pending Payment", value: "R3,200", icon: AlertCircle, color: "text-yellow-600", bg: "bg-yellow-50" },
  { label: "Avg Monthly Spend", value: "R3,200", icon: DollarSign, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Hours Paid", value: "192h", icon: Clock, color: "text-violet-600", bg: "bg-violet-50" },
];

const payHistory = [
  { period: "March 2025", helper: "Thandi Dlamini", hours: 40, rate: "R100/hr", amount: "R4,000", status: "pending", date: "Due 1 Apr" },
  { period: "March 2025", helper: "Lerato Sithole", hours: 28, rate: "R80/hr", amount: "R2,240", status: "pending", date: "Due 1 Apr" },
  { period: "February 2025", helper: "Thandi Dlamini", hours: 40, rate: "R100/hr", amount: "R4,000", status: "paid", date: "1 Mar 2025" },
  { period: "February 2025", helper: "Lerato Sithole", hours: 28, rate: "R80/hr", amount: "R2,240", status: "paid", date: "1 Mar 2025" },
  { period: "January 2025", helper: "Thandi Dlamini", hours: 38, rate: "R100/hr", amount: "R3,800", status: "paid", date: "1 Feb 2025" },
  { period: "January 2025", helper: "Lerato Sithole", hours: 24, rate: "R80/hr", amount: "R1,920", status: "paid", date: "1 Feb 2025" },
];

const monthlyData = [
  { month: "Oct", thandi: 3800, lerato: 1920 },
  { month: "Nov", thandi: 4000, lerato: 2240 },
  { month: "Dec", thandi: 3600, lerato: 1600 },
  { month: "Jan", thandi: 3800, lerato: 1920 },
  { month: "Feb", thandi: 4000, lerato: 2240 },
  { month: "Mar", thandi: 4000, lerato: 2240 },
];

export default function FinancialsPage() {
  const maxVal = Math.max(...monthlyData.map((d) => d.thandi + d.lerato));

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="owner" />
      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Financials</h1>
              <p className="text-gray-700 mt-1">Track payments and manage payslips</p>
            </div>
            <button className="border border-gray-200 bg-white text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {summaryStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-700 mt-0.5">{s.label}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Spending chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-gray-900">Monthly Spending Breakdown</h2>
                <div className="flex items-center gap-1 text-xs text-orange-700 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Stable
                </div>
              </div>

              <div className="flex items-end gap-4 h-40 mb-4">
                {monthlyData.map((d) => {
                  const thandiH = (d.thandi / maxVal) * 100;
                  const leratoH = (d.lerato / maxVal) * 100;
                  return (
                    <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex flex-col gap-0.5" style={{ height: "100%" }}>
                        <div className="flex-1 flex flex-col justify-end">
                          <div
                            className="w-full rounded-t-sm bg-blue-400"
                            style={{ height: `${leratoH}%` }}
                          />
                          <div
                            className="w-full bg-orange-500"
                            style={{ height: `${thandiH}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">{d.month}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-orange-500" />
                  <span className="text-xs text-gray-700">Thandi Dlamini</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-blue-400" />
                  <span className="text-xs text-gray-700">Lerato Sithole</span>
                </div>
              </div>
            </div>

            {/* Current month breakdown */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 mb-4">March 2025</h2>
              <div className="space-y-4">
                {[
                  { helper: "Thandi", hours: 40, rate: 100, color: "bg-orange-500" },
                  { helper: "Lerato", hours: 28, rate: 80, color: "bg-blue-400" },
                ].map((h) => {
                  const total = h.hours * h.rate;
                  const pct = (total / (40 * 100 + 28 * 80)) * 100;
                  return (
                    <div key={h.helper}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-gray-700">{h.helper}</span>
                        <span className="font-bold text-gray-900">R{total.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full ${h.color} rounded-full`} style={{ width: `${pct}%` }} />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {h.hours}h × R{h.rate}/hr
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between mb-3">
                  <span className="text-sm text-gray-600">Total Due</span>
                  <span className="text-lg font-extrabold text-gray-900">R6,240</span>
                </div>
                <button className="w-full btn-primary text-white font-semibold py-3 rounded-xl text-sm">
                  Process Payments
                </button>
              </div>
            </div>
          </div>

          {/* Payment history */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900">Payment History</h2>
              <div className="flex items-center gap-3">
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none bg-white">
                  <option>All Helpers</option>
                  <option>Thandi Dlamini</option>
                  <option>Lerato Sithole</option>
                </select>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-50">
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Period</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Helper</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Hours</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Rate</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {payHistory.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 text-sm text-gray-600">{row.period}</td>
                      <td className="px-5 py-4 text-sm font-medium text-gray-900">{row.helper}</td>
                      <td className="px-5 py-4 text-sm text-gray-600">{row.hours}h</td>
                      <td className="px-5 py-4 text-sm text-gray-600">{row.rate}</td>
                      <td className="px-5 py-4 text-sm font-bold text-gray-900">{row.amount}</td>
                      <td className="px-5 py-4 text-sm text-gray-700">{row.date}</td>
                      <td className="px-5 py-4">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            row.status === "paid"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {row.status === "paid" ? "Paid" : "Pending"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button className="text-xs text-gray-600 hover:text-gray-600 flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" />
                          Payslip
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
