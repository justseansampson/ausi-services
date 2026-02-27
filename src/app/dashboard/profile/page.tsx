"use client";

import { useState } from "react";
import DashboardNav from "@/components/DashboardNav";
import { Camera, Star, MapPin, Clock, Shield, Edit2, Check } from "lucide-react";

const services = ["Cleaning", "Laundry", "Ironing", "Cooking", "Childcare", "Gardening", "Grocery Shopping", "Tutoring"];

export default function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState(["Cleaning", "Laundry", "Ironing"]);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="owner" />
      <main className="lg:pl-64 pt-14 lg:pt-0 pb-20 lg:pb-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-extrabold text-gray-900">My Profile</h1>
            <button
              onClick={() => setEditMode(!editMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                editMode
                  ? "bg-emerald-500 text-white"
                  : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {editMode ? (
                <>
                  <Check className="w-4 h-4" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </>
              )}
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: avatar + stats */}
            <div className="space-y-5">
              {/* Avatar card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-2xl btn-primary flex items-center justify-center text-white font-extrabold text-3xl mx-auto">
                    JS
                  </div>
                  {editMode && (
                    <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
                      <Camera className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>
                <h2 className="font-extrabold text-gray-900 text-xl">Jane Smith</h2>
                <p className="text-gray-500 text-sm mt-1">Home Owner</p>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">Sandton, Johannesburg</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">Verified Account</span>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
                <h3 className="font-bold text-gray-900">Account Summary</h3>
                {[
                  { label: "Helpers Hired", value: "2" },
                  { label: "Member Since", value: "Jan 2024" },
                  { label: "Total Paid Out", value: "R24,000" },
                  { label: "Tasks Created", value: "156" },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{s.label}</span>
                    <span className="font-semibold text-gray-900">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* Reviews received */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4">Reviews from Helpers</h3>
                {[
                  { from: "Thandi D.", text: "Jane is a respectful and organised employer. Always clear with instructions.", rating: 5, time: "2 months ago" },
                  { from: "Lerato S.", text: "Great working environment. Very fair with scheduling and payments.", rating: 5, time: "3 months ago" },
                ].map((r, i) => (
                  <div key={i} className={i > 0 ? "mt-4 pt-4 border-t border-gray-50" : ""}>
                    <div className="flex mb-1">
                      {Array.from({ length: r.rating }).map((_, ri) => (
                        <Star key={ri} className="w-3.5 h-3.5 star-filled fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-medium text-gray-700">{r.from}</span>
                      <span className="text-xs text-gray-400">{r.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: editable details */}
            <div className="lg:col-span-2 space-y-5">
              {/* Personal info */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-5">Personal Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", value: "Jane" },
                    { label: "Last Name", value: "Smith" },
                    { label: "Email", value: "jane.smith@email.com" },
                    { label: "Phone", value: "+27 82 123 4567" },
                    { label: "City", value: "Sandton, Johannesburg" },
                    { label: "ID Number", value: "••••••••••••••" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                        {f.label}
                      </label>
                      {editMode ? (
                        <input
                          defaultValue={f.value}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      ) : (
                        <div className="text-sm text-gray-900 py-2.5 px-3 bg-gray-50 rounded-xl">{f.value}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Home details */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-5">Home Details</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  {[
                    { label: "Property Type", value: "House" },
                    { label: "Bedrooms", value: "4" },
                    { label: "Bathrooms", value: "3" },
                    { label: "Suburb", value: "Sandton" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                        {f.label}
                      </label>
                      {editMode ? (
                        <input
                          defaultValue={f.value}
                          className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      ) : (
                        <div className="text-sm text-gray-900 py-2.5 px-3 bg-gray-50 rounded-xl">{f.value}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                    Services Required
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        onClick={() => editMode && toggleService(s)}
                        className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors border ${
                          selectedServices.includes(s)
                            ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                            : "bg-gray-50 text-gray-500 border-gray-200"
                        } ${editMode ? "cursor-pointer hover:border-emerald-300" : "cursor-default"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-5">Preferences & About</h3>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                    About / Special Instructions
                  </label>
                  {editMode ? (
                    <textarea
                      rows={4}
                      defaultValue="I'm looking for a reliable, trustworthy helper who is great with kids and pets. Our home has 2 dogs. We prefer eco-friendly cleaning products."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    />
                  ) : (
                    <p className="text-sm text-gray-700 bg-gray-50 px-3 py-2.5 rounded-xl leading-relaxed">
                      I&apos;m looking for a reliable, trustworthy helper who is great with kids and pets. Our home has 2 dogs. We prefer eco-friendly cleaning products.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
