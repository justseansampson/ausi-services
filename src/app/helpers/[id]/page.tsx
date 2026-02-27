import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  Star,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  MessageSquare,
  Heart,
  Calendar,
  Award,
} from "lucide-react";

const helperData: Record<string, {
  name: string; avatar: string; color: string; location: string;
  services: string[]; rating: number; reviews: number; rate: string;
  experience: string; availability: string; verified: boolean; bio: string;
  skills: string[]; languages: string[];
  reviewList: { author: string; rating: number; text: string; date: string }[];
}> = {
  "1": {
    name: "Thandi Dlamini",
    avatar: "TD",
    color: "bg-emerald-600",
    location: "Johannesburg, Sandton",
    services: ["Cleaning", "Laundry", "Ironing"],
    rating: 4.9,
    reviews: 47,
    rate: "R100/hr",
    experience: "5 years",
    availability: "Full-time",
    verified: true,
    bio: "Experienced, reliable home cleaner with 5+ years working in upscale Johannesburg households. Meticulous, trustworthy, and excellent with children and pets. I take pride in maintaining beautiful, hygienic homes and am experienced with a wide range of cleaning products and techniques.\n\nI hold a valid South African ID, have excellent references from previous employers, and have completed a professional cleaning certification.",
    skills: ["Deep Cleaning", "Upholstery Cleaning", "Appliance Care", "Pet-Friendly Products", "Child-Safe Cleaning", "Laundry Management", "Ironing & Folding"],
    languages: ["Zulu", "English", "Sotho"],
    reviewList: [
      { author: "Jane S.", rating: 5, text: "Thandi is absolutely phenomenal. Our home has never been this clean. She's reliable, honest, and works incredibly hard.", date: "Feb 2025" },
      { author: "Mark T.", rating: 5, text: "We've had Thandi for 2 years now and wouldn't trade her for anything. She knows exactly what we like.", date: "Jan 2025" },
      { author: "Priya N.", rating: 5, text: "Professional, efficient, and kind. She goes above and beyond every single visit.", date: "Dec 2024" },
    ],
  },
};

export default async function HelperProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const helper = helperData[id] ?? helperData["1"];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Hero */}
        <div className="gradient-hero py-10 px-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start gap-6">
            <div className={`w-24 h-24 rounded-3xl ${helper.color} flex items-center justify-center text-white font-extrabold text-4xl flex-shrink-0`}>
              {helper.avatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-extrabold text-white">{helper.name}</h1>
                {helper.verified && (
                  <div className="flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-300" />
                    Verified
                  </div>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-white/95 text-sm mb-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {helper.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-300" />
                  {helper.rating} ({helper.reviews} reviews)
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {helper.experience} experience
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {helper.availability}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {helper.services.map((s) => (
                  <span key={s} className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <div className="text-white text-right">
                <div className="text-3xl font-extrabold">{helper.rate}</div>
                <div className="text-white/80 text-sm">per hour</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left: CTA */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="text-2xl font-extrabold text-gray-900 mb-1">{helper.rate}</div>
                <div className="text-sm text-gray-700 mb-4">per hour · {helper.availability}</div>
                <Link
                  href="/auth/register?role=owner"
                  className="w-full btn-primary text-white font-semibold py-3 rounded-xl text-sm text-center block mb-3"
                >
                  Hire {helper.name.split(" ")[0]}
                </Link>
                <Link
                  href="/dashboard/messages"
                  className="w-full border border-gray-200 text-gray-700 font-semibold py-3 rounded-xl text-sm text-center block flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Send Message
                </Link>
                <button className="w-full flex items-center justify-center gap-2 text-gray-600 hover:text-red-500 py-2 mt-2 text-sm transition-colors">
                  <Heart className="w-4 h-4" />
                  Save to Favourites
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-600" />
                  Verified Profile
                </h3>
                <div className="space-y-2">
                  {["ID Verified", "Background Check", "References Checked", "Skills Assessment"].map((v) => (
                    <div key={v} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <h3 className="font-bold text-gray-900 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {helper.languages.map((l) => (
                    <span key={l} className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full font-medium">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-gray-900 mb-4">About {helper.name.split(" ")[0]}</h2>
                {helper.bio.split("\n\n").map((p, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed mb-3 text-sm">
                    {p}
                  </p>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  Skills & Specialisations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {helper.skills.map((s) => (
                    <span key={s} className="bg-orange-50 text-orange-800 text-sm px-3 py-1.5 rounded-xl font-medium border border-emerald-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="font-bold text-gray-900">Reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 star-filled fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{helper.rating}</span>
                    <span className="text-gray-600 text-sm">({helper.reviews})</span>
                  </div>
                </div>
                <div className="space-y-5">
                  {helper.reviewList.map((r, i) => (
                    <div key={i} className={i > 0 ? "pt-5 border-t border-gray-50" : ""}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs">
                            {r.author[0]}
                          </div>
                          <span className="font-semibold text-gray-900 text-sm">{r.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {Array.from({ length: r.rating }).map((_, ri) => (
                              <Star key={ri} className="w-3.5 h-3.5 star-filled fill-current" />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{r.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
