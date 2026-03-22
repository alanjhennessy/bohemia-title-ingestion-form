import React from 'react';
import { Music, Mic2, ChevronDown, ChevronUp, Plus } from "lucide-react";

export function NightOps() {
  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100 font-sans">
      {/* Navbar */}
      <nav className="h-12 bg-black border-b border-zinc-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400 text-lg leading-none">&bull;</span>
          <span className="font-bold text-zinc-100 text-sm">Bohemia Label Services</span>
        </div>
        <button className="border border-cyan-500/50 text-cyan-400 text-xs px-3 py-1 rounded hover:bg-cyan-500/10 transition-colors font-['JetBrains_Mono']">
          Intake Form
        </button>
      </nav>

      {/* Hero */}
      <header className="h-44 bg-black flex flex-col justify-center px-6 lg:px-12 border-b border-zinc-800">
        <div className="max-w-6xl w-full mx-auto">
          <p className="text-zinc-600 font-['JetBrains_Mono'] text-sm mb-2">// submit release metadata</p>
          <h1 className="font-black text-4xl text-zinc-100 tracking-tight">
            New Title <span className="text-cyan-500">Ingestion</span>
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl w-full mx-auto py-8 px-6 lg:px-12 space-y-6">
        
        {/* Album Information Card */}
        <section className="bg-[#141417] border border-cyan-500/50 rounded-xl overflow-hidden border-l-4 border-l-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.05)]">
          <div className="bg-zinc-900/40 px-5 py-4 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-lg p-2">
                <Music size={18} />
              </div>
              <h2 className="uppercase font-bold text-zinc-300 tracking-wider text-sm">Album Information</h2>
            </div>
            <button className="text-zinc-500 hover:text-cyan-400 transition-colors">
              <ChevronUp size={20} />
            </button>
          </div>
          
          <div className="p-6 bg-zinc-900/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Album Title</label>
                <input 
                  type="text" 
                  defaultValue="Faith" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Album Version</label>
                <input 
                  type="text" 
                  defaultValue="Deluxe Edition" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Album Display Artist</label>
                <input 
                  type="text" 
                  defaultValue="George Michael" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">UPC</label>
                <input 
                  type="text" 
                  defaultValue="5099747552922" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-cyan-400 font-['JetBrains_Mono'] outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Label</label>
                <input 
                  type="text" 
                  defaultValue="Epic Records" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Release Date</label>
                <input 
                  type="text" 
                  defaultValue="1987-11-01" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 font-['JetBrains_Mono'] outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Track Details Section Header */}
        <div className="flex items-center justify-between pt-4 pb-2">
          <div className="flex items-center gap-3">
            <div className="text-cyan-500">
              <Mic2 size={24} />
            </div>
            <h2 className="uppercase font-bold text-zinc-100 text-lg tracking-wide">Track Details</h2>
          </div>
          <button className="flex items-center gap-1.5 border border-cyan-500 text-cyan-400 text-xs px-4 py-2 rounded font-['JetBrains_Mono'] hover:bg-cyan-500/10 transition-colors">
            <Plus size={14} />
            ADD TRACK
          </button>
        </div>

        {/* Track 1 Card */}
        <section className="bg-[#141417] border border-zinc-800 rounded-xl overflow-hidden">
          <div className="bg-zinc-900/20 px-5 py-3 flex items-center justify-between border-b border-zinc-800/50">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-500 text-black w-8 h-8 rounded flex items-center justify-center font-['JetBrains_Mono'] font-bold text-sm">
                1
              </div>
              <h3 className="font-medium text-zinc-300 text-sm">Track 1 &mdash; Faithful Heart</h3>
            </div>
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <ChevronDown size={20} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Track Title</label>
                <input 
                  type="text" 
                  defaultValue="Faithful Heart" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Track Version</label>
                <input 
                  type="text" 
                  defaultValue="Album Version" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">ISRC</label>
                <input 
                  type="text" 
                  defaultValue="GBAAA8700001" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-cyan-400 font-['JetBrains_Mono'] outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Track Primary Artists</label>
                <input 
                  type="text" 
                  defaultValue="George Michael" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Producer</label>
                <input 
                  type="text" 
                  defaultValue="George Michael" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['JetBrains_Mono'] text-xs text-zinc-500 uppercase tracking-widest block">Track Sequence</label>
                <input 
                  type="text" 
                  defaultValue="1" 
                  className="w-full bg-[#0D0D10] border border-zinc-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg px-3 py-2 text-sm text-zinc-100 font-['JetBrains_Mono'] outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="py-6 flex items-center">
          <div className="flex-grow border-t border-zinc-800"></div>
          <span className="px-4 text-zinc-600 font-['JetBrains_Mono'] text-xs">
            // CLASSICAL &amp; ADDITIONAL
          </span>
          <div className="flex-grow border-t border-zinc-800"></div>
        </div>

        {/* Submit Actions */}
        <div className="flex justify-end pt-4 pb-12">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold font-['JetBrains_Mono'] rounded-lg px-10 py-3 uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]">
            SUBMIT_METADATA &rarr;
          </button>
        </div>

      </main>
    </div>
  );
}
