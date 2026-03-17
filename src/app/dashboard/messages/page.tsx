"use client";

import { useState } from "react";
import DashboardNav from "@/components/DashboardNav";
import { Search, Send, Phone, Video, MoreHorizontal, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: 1,
    name: "Thandi Dlamini",
    avatar: "TD",
    color: "bg-emerald-600",
    role: "Full-time Cleaner",
    lastMessage: "Good morning! I've arrived and will start with the kitchen.",
    time: "08:03",
    unread: 0,
    online: true,
  },
  {
    id: 2,
    name: "Lerato Sithole",
    avatar: "LS",
    color: "bg-blue-600",
    role: "Part-time Cook",
    lastMessage: "Could we adjust this Saturday's hours to 10am?",
    time: "Yesterday",
    unread: 2,
    online: false,
  },
  {
    id: 3,
    name: "AUSI Support",
    avatar: "AS",
    color: "bg-violet-600",
    role: "Support Team",
    lastMessage: "Your verification is complete! You're all set.",
    time: "Mon",
    unread: 0,
    online: true,
  },
];

const messagesByConvo: Record<number, Array<{ text: string; from: "me" | "them"; time: string; read?: boolean }>> = {
  1: [
    { text: "Hi Thandi! Reminder for today – please focus on the guest room first.", from: "me", time: "07:45", read: true },
    { text: "Of course! I'll start there right away.", from: "them", time: "07:52" },
    { text: "Good morning! I've arrived and will start with the kitchen.", from: "them", time: "08:03" },
    { text: "Perfect, thank you! Also, the cleaning products are under the sink.", from: "me", time: "08:10", read: true },
  ],
  2: [
    { text: "Hi Lerato! Can you confirm Saturday?", from: "me", time: "Fri 10:00", read: true },
    { text: "Yes, confirmed! See you Saturday.", from: "them", time: "Fri 10:15" },
    { text: "Could we adjust this Saturday's hours to 10am?", from: "them", time: "Yesterday 18:30" },
  ],
  3: [
    { text: "Welcome to AUSI Signature Staffing! We've verified your account.", from: "them", time: "Mon 09:00" },
    { text: "Your verification is complete! You're all set.", from: "them", time: "Mon 09:02" },
    { text: "Thank you so much!", from: "me", time: "Mon 10:15", read: true },
  ],
};

export default function MessagesPage() {
  const [activeConvo, setActiveConvo] = useState(1);
  const [draft, setDraft] = useState("");

  const active = conversations.find((c) => c.id === activeConvo)!;
  const messages = messagesByConvo[activeConvo] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav role="owner" />
      <main className="lg:pl-64 pt-14 lg:pt-0 pb-16 lg:pb-0 h-screen flex flex-col">
        <div className="flex flex-1 overflow-hidden max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 gap-5">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
            <div className="px-4 py-4 border-b border-gray-50">
              <h2 className="font-bold text-gray-900 mb-3">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
              {conversations.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveConvo(c.id)}
                  className={cn(
                    "w-full px-4 py-3.5 flex items-start gap-3 text-left hover:bg-gray-50 transition-colors",
                    activeConvo === c.id && "bg-orange-50"
                  )}
                >
                  <div className="relative flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {c.avatar}
                    </div>
                    {c.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 text-sm">{c.name}</span>
                      <span className="text-xs text-gray-600">{c.time}</span>
                    </div>
                    <p className="text-xs text-gray-700 truncate mt-0.5">{c.lastMessage}</p>
                  </div>
                  {c.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {c.unread}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full ${active.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {active.avatar}
                  </div>
                  {active.online && (
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{active.name}</div>
                  <div className="text-xs text-gray-700">
                    {active.online ? "Online now" : "Last seen recently"} · {active.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-600 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.from === "me" ? "justify-end" : "justify-start")}>
                  {msg.from === "them" && (
                    <div className={`w-8 h-8 rounded-full ${active.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 mr-2 mt-auto`}>
                      {active.avatar}
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm",
                      msg.from === "me"
                        ? "btn-primary text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-900 rounded-bl-sm"
                    )}
                  >
                    <p>{msg.text}</p>
                    <div className={cn(
                      "flex items-center justify-end gap-1 mt-1",
                      msg.from === "me" ? "text-white/80" : "text-gray-600"
                    )}>
                      <span className="text-xs">{msg.time}</span>
                      {msg.from === "me" && msg.read && <Check className="w-3 h-3" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 py-4 border-t border-gray-50">
              <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                />
                <button
                  className={cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center transition-colors",
                    draft ? "btn-primary text-white" : "bg-gray-200 text-gray-600"
                  )}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
