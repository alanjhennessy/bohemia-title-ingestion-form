import React from "react";
import { Music, Mic2, ChevronUp, Plus, ArrowRight } from "lucide-react";

export function FreshWave() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-pink-200">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}} />
      
      {/* Navbar */}
      <nav className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="font-['Space_Grotesk'] font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
          Bohemia Label Services
        </div>
        <button className="bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full px-4 py-1.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm">
          Intake Form
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative h-52 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative background note */}
        <div className="absolute text-9xl text-white/20 select-none pointer-events-none transform -rotate-12 translate-y-4">
          ♪
        </div>
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-4xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            New Title Ingestion
          </h1>
          <p className="text-white/80 text-lg font-medium">
            Submit your release metadata
          </p>
        </div>
      </div>

      {/* Main Content Form */}
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-10">
        
        {/* Album Information Card */}
        <section className="bg-white border-2 border-violet-300 rounded-3xl p-6 shadow-sm shadow-violet-100/50 transition-all">
          <div className="flex items-center justify-between mb-8 cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-violet-500 to-pink-500 text-white rounded-xl p-2.5 shadow-md group-hover:scale-105 transition-transform">
                <Music size={24} />
              </div>
              <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-gray-900">
                Album Information
              </h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 group-hover:bg-violet-100 transition-colors">
              <ChevronUp size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">Album Title</label>
              <input 
                type="text" 
                defaultValue="Faith"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">Album Version</label>
              <input 
                type="text" 
                defaultValue="Deluxe Edition"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">Album Display Artist</label>
              <input 
                type="text" 
                defaultValue="George Michael"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">UPC</label>
              <input 
                type="text" 
                defaultValue="5099747552922"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">Label</label>
              <input 
                type="text" 
                defaultValue="Epic Records"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-500 pl-4 block">Release Date</label>
              <input 
                type="date" 
                defaultValue="1987-11-01"
                className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
              />
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-violet-500 to-pink-500 text-white rounded-xl p-2 shadow-md">
                <Mic2 size={20} />
              </div>
              <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-gray-900">
                Track Details
              </h2>
            </div>
            <button className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:opacity-90 transition-all hover:-translate-y-0.5">
              <Plus size={18} />
              <span>Add Track</span>
            </button>
          </div>

          {/* Track 1 Card */}
          <div className="bg-white border-2 border-violet-300 rounded-3xl p-6 shadow-sm shadow-violet-100/50 transition-all">
            <div className="flex items-center justify-between mb-8 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-violet-500 to-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-gray-900">
                  Track 1 — Faithful Heart
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center text-violet-500 group-hover:bg-violet-100 transition-colors">
                <ChevronUp size={20} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">Track Title</label>
                <input 
                  type="text" 
                  defaultValue="Faithful Heart"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">Track Version</label>
                <input 
                  type="text" 
                  defaultValue="Album Version"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">ISRC</label>
                <input 
                  type="text" 
                  defaultValue="GBAAA8700001"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">Track Primary Artists</label>
                <input 
                  type="text" 
                  defaultValue="George Michael"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">Producer</label>
                <input 
                  type="text" 
                  defaultValue="George Michael"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-500 pl-4 block">Track Sequence</label>
                <input 
                  type="number" 
                  defaultValue="1"
                  className="w-full h-12 px-5 bg-gray-50 border-2 border-gray-200 focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 rounded-full text-sm text-gray-900 outline-none transition-all font-medium"
                />
              </div>
            </div>
            
            {/* Classical Divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent flex-1"></div>
              <span className="text-gray-400 font-semibold text-xs tracking-wider uppercase">Classical & Additional</span>
              <div className="h-px bg-gradient-to-r from-violet-200 via-violet-200 to-transparent flex-1"></div>
            </div>
          </div>

          <button className="w-full border-2 border-dashed border-violet-300 text-violet-500 rounded-3xl py-4 hover:bg-violet-50 transition-colors font-semibold flex items-center justify-center gap-2 text-lg group">
            <Plus className="group-hover:rotate-90 transition-transform" />
            Add another track
          </button>
        </section>

        {/* Submit Actions */}
        <div className="pt-8 pb-12 flex justify-center">
          <button className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white rounded-full px-12 py-4 font-bold text-lg shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 hover:-translate-y-1 transition-all">
            <span>Submit Metadata</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>
    </div>
  );
}
