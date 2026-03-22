import React from "react";
import { Music, Mic2, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export function WarmStudio() {
  return (
    <div className="min-h-screen bg-[#FDFAF5] font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Navbar */}
      <nav className="h-14 bg-[#F5EFE0] border-b border-amber-200 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-700"></div>
          <span className="font-['Playfair_Display'] font-bold text-stone-800 text-lg tracking-wide">
            Bohemia Label Services
          </span>
        </div>
        <div>
          <span className="text-amber-700 font-semibold text-sm tracking-wide">
            Intake Form
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-stone-900 h-52 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Subtle background texture/pattern could go here, for now just a deep color */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-500 via-transparent to-transparent"></div>
        
        <h1 className="font-['Playfair_Display'] text-4xl text-amber-50 font-bold mb-3 relative z-10">
          New Title Ingestion
        </h1>
        <p className="text-stone-400 font-['Inter'] text-sm tracking-wide relative z-10">
          Submit your release metadata
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto -mt-10 px-6 pb-32 relative z-20 space-y-8">
        
        {/* Album Information Card */}
        <section className="bg-[#FFFEF9] border border-amber-200/60 rounded-2xl shadow-sm shadow-amber-100/80 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8 border-b border-amber-100 pb-6">
              <div className="flex items-center gap-4">
                <div className="bg-amber-700 text-white p-2.5 rounded-xl shadow-inner">
                  <Music size={20} strokeWidth={2.5} />
                </div>
                <h2 className="font-['Playfair_Display'] font-bold text-2xl text-stone-800">
                  Album Information
                </h2>
              </div>
              <button className="text-stone-400 hover:text-amber-700 transition-colors">
                <ChevronUp size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Album Title
                </label>
                <input
                  type="text"
                  defaultValue="Faith"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Album Version
                </label>
                <input
                  type="text"
                  defaultValue="Deluxe Edition"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Album Display Artist
                </label>
                <input
                  type="text"
                  defaultValue="George Michael"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  UPC
                </label>
                <input
                  type="text"
                  defaultValue="5099747552922"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Label
                </label>
                <input
                  type="text"
                  defaultValue="Epic Records"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Release Date
                </label>
                <input
                  type="date"
                  defaultValue="1987-11-01"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Header */}
        <div className="flex items-center justify-between pt-6 pb-2">
          <div className="flex items-center gap-3">
            <Mic2 className="text-amber-700" size={24} />
            <h2 className="font-['Playfair_Display'] font-bold text-2xl text-stone-800">
              Track Details
            </h2>
          </div>
          <button className="flex items-center gap-2 bg-amber-100/50 hover:bg-amber-200/50 text-amber-800 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors border border-amber-200/50">
            <span>+ Add Track</span>
          </button>
        </div>

        {/* Track 1 Card */}
        <section className="bg-[#FFFEF9] border border-amber-200/60 rounded-2xl shadow-sm shadow-amber-100/80 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-amber-100">
              <div className="flex items-center gap-4">
                <div className="bg-amber-700 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-inner">
                  1
                </div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-stone-800">
                  Track 1 — Faithful Heart
                </h3>
              </div>
              <button className="text-stone-400 hover:text-amber-700 transition-colors">
                <ChevronUp size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <div className="space-y-2 md:col-span-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Track Title
                </label>
                <input
                  type="text"
                  defaultValue="Faithful Heart"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Track Version
                </label>
                <input
                  type="text"
                  defaultValue="Album Version"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  ISRC
                </label>
                <input
                  type="text"
                  defaultValue="GBAAA8700001"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow font-mono"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Track Primary Artists
                </label>
                <input
                  type="text"
                  defaultValue="George Michael"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold tracking-widest uppercase text-stone-500 font-['Inter']">
                  Producer
                </label>
                <input
                  type="text"
                  defaultValue="George Michael"
                  className="w-full bg-[#FAF7F0] border border-amber-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-shadow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Submit Actions */}
        <div className="pt-8 flex justify-end">
          <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-800 text-white rounded-xl px-10 py-4 font-bold text-lg transition-all shadow-md shadow-amber-900/20 hover:shadow-lg hover:-translate-y-0.5">
            Submit Metadata
            <ArrowRight size={20} />
          </button>
        </div>

      </main>
    </div>
  );
}
