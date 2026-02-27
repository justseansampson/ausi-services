"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  Star,
  MapPin,
  Search,
  Filter,
  CheckCircle,
  Clock,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const allHelpers = [
  {
    id: 1,
    name: "Thandi Dlamini",
    avatar: "TD",
    location: "Johannesburg, Sandton",
    services: ["Cleaning", "Laundry", "Ironing"],
    rating: 4.9,
    reviews: 47,
    rate: "R100/hr",
    experience: "5 years",
    availability: "Full-time",
    verified: true,
    bio: "Experienced, reliable home cleaner with 5+ years working in upscale Johannesburg households. Meticulous, trustworthy, and excellent with children.",
    color: "bg-emerald-600",
  },
  {
    id: 2,
    name: "Lerato Sithole",
    avatar: "LS",
    location: "Cape Town, Claremont",
    services: ["Cooking", "Cleaning", "Childcare"],
    rating: 4.8,
    reviews: 32,
    rate: "R120/hr",
    experience: "7 years",
    availability: "Part-time",
    verified: true,
    bio: "Trained cook and cleaner with extensive experience in Cape Town family homes. Passionate about creating a warm, organised home environment.",
    color: "bg-blue-600",
  },
  {
    id: 3,
    name: "Nomsa Khumalo",
    avatar: "NK",
    location: "Durban, Umhlanga",
    services: ["Childcare", "Cooking", "Tutoring"],
    rating: 4.7,
    reviews: 28,
    rate: "R90/hr",
    experience: "3 years",
    availability: "Full-time",
    verified: true,
    bio: "Caring and patient childcare specialist. Holds a childcare certificate and enjoys creating educational activities for young children.",
    color: "bg-violet-600",
  },
  {
    id: 4,
    name: "Precious Ndlovu",
    avatar: "PN",
    location: "Pretoria, Centurion",
    services: ["Cleaning", "Gardening", "Laundry"],
    rating: 4.6,
    reviews: 19,
    rate: "R80/hr",
    experience: "2 years",
    availability: "Part-time",
    verified: false,
    bio: "Hard-working home helper with expertise in deep cleaning and garden maintenance. Punctual and highly organised.",
    color: "bg-orange-600",
  },
  {
    id: 5,
    name: "Grace Mokoena",
    avatar: "GM",
    location: "Johannesburg, Fourways",
    services: ["Cooking", "Cleaning", "Grocery Shopping"],
    rating: 4.9,
    reviews: 61,
    rate: "R110/hr",
    experience: "8 years",
    availability: "Full-time",
    verified: true,
    bio: "Award-winning home cook with 8 years in private households. Specialises in meal planning, healthy cooking, and maintaining immaculate homes.",
    color: "bg-pink-600",
  },
  {
    id: 6,
    name: "Zanele Zulu",
    avatar: "ZZ",
    location: "Johannesburg, Rosebank",
    services: ["Childcare", "Laundry", "Ironing"],
    rating: 4.8,
    reviews: 24,
    rate: "R95/hr",
    experience: "4 years",
    availability: "Full-time",
    verified: true,
    bio: "Dedicated childcare provider and home helper. Loves working with children and creating structured routines.",
    color: "bg-teal-600",
  },
];

const serviceOptions = ["All", "Cleaning", "Cooking", "Childcare", "Laundry", "Gardening", "Ironing", "Tutoring", "Grocery Shopping"];
const availabilityOptions = ["All", "Full-time", "Part-time"];
const locationOptions = ["All", "Johannesburg", "Cape Town", "Durban", "Pretoria"];

export default function BrowsePage() {
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [location, setLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allHelpers.filter((h) => {
    const matchSearch =
      !search ||
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase()) ||
      h.services.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchService = service === "All" || h.services.includes(service);
    const matchAvailability = availability === "All" || h.availability === availability;
    const matchLocation = location === "All" || h.location.includes(location);
    return matchSearch && matchService && matchAvailability && matchLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-16">
        {/* Hero search bar */}
        <div className="gradient-hero py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white mb-3">
              Find Your Perfect House Helper
            </h1>
            <p className="text-white/70 mb-8">
              Browse {allHelpers.length} verified helpers across South Africa
            </p>
            <div className="bg-white rounded-2xl p-2 flex items-center gap-2 shadow-xl max-w-2xl mx-auto">
              <Search className="w-5 h-5 text-gray-400 ml-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by name, location or service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none text-sm"
              />
              <button className="btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold flex-shrink-0">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Service filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-colors border",
                    service === s
                      ? "btn-primary text-white border-transparent"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="ml-auto flex items-center gap-2 bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              More Filters
              <ChevronDown className={cn("w-4 h-4 transition-transform", showFilters && "rotate-180")} />
            </button>
          </div>

          {showFilters && (
            <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-6 shadow-sm grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Availability
                </label>
                <div className="flex flex-wrap gap-2">
                  {availabilityOptions.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAvailability(a)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium border transition-colors",
                        availability === a
                          ? "btn-primary text-white border-transparent"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"
                      )}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {locationOptions.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLocation(l)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium border transition-colors",
                        location === l
                          ? "btn-primary text-white border-transparent"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300"
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-900">{filtered.length}</span> helpers found
            </p>
            <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
              <option>Sort: Top Rated</option>
              <option>Sort: Newest</option>
              <option>Sort: Price: Low to High</option>
              <option>Sort: Price: High to Low</option>
            </select>
          </div>

          {/* Helper cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((helper) => (
              <div
                key={helper.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm card-hover overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${helper.color} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
                    >
                      {helper.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900 truncate">{helper.name}</h3>
                        {helper.verified && (
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {helper.location}
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 star-filled fill-current" />
                          <span className="text-sm font-semibold text-gray-900">{helper.rating}</span>
                          <span className="text-xs text-gray-400">({helper.reviews})</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {helper.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {helper.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {helper.services.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div>
                      <div className="text-lg font-extrabold text-gray-900">{helper.rate}</div>
                      <div className="text-xs text-gray-400">{helper.availability}</div>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/helpers/${helper.id}`}
                        className="border border-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        View
                      </Link>
                      <Link
                        href="/auth/register?role=owner"
                        className="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-xl"
                      >
                        Hire
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No helpers found</h3>
              <p className="text-gray-500">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
