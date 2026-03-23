import React from 'react';
import Link from 'next/link';

export default function FacilitiesPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[linear-gradient(135deg,rgb(0,52,113)_0%,rgb(15,23,42)_100%)] text-white pt-36 pb-20 text-center relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full mb-6 text-sm font-medium backdrop-blur-sm">
            <i className="fa-solid fa-ruler-combined text-yellow-400 mr-2"></i> 1600 Sq.Ft Premium Campus
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Built for <span className="text-yellow-400">Extreme Focus</span>
          </h1>
          <p className="text-lg text-blue-200 font-light leading-relaxed">
            Discover Jhansi's most secure and student-friendly coaching infrastructure designed to eliminate distractions and boost performance.
          </p>
        </div>
      </header>

      {/* Facilities Bento Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Facility 1: Library (Spans 2 columns) */}
            <div className="md:col-span-2 bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 flex flex-col justify-center relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <i className="fa-solid fa-book-open-reader text-9xl"></i>
              </div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-lg relative z-10">
                <i className="fa-solid fa-book-bookmark"></i>
              </div>
              <h3 className="text-3xl font-extrabold text-blue-950 mb-4 relative z-10">Dedicated Self-Study Library</h3>
              <p className="text-slate-600 text-lg mb-6 relative z-10 max-w-lg">
                A pin-drop silence zone available exclusively for Sankalp Vision students. Stay back after classes, complete your homework, or revise for tests in a fully air-conditioned and peaceful environment.
              </p>
              <ul className="space-y-2 text-sm text-blue-800 font-medium relative z-10">
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i> Individual Study Desks</li>
                <li className="flex items-center"><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i> Access to Reference Books</li>
              </ul>
            </div>

            {/* Facility 2: CCTV Security */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 flex flex-col justify-between transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <div>
                <div className="w-14 h-14 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-6 text-2xl relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-40"></span>
                  <i className="fa-solid fa-video"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">24/7 CCTV Security</h3>
                <p className="text-slate-400 text-sm">
                  100% campus coverage. We prioritize the safety of our students above everything else. Parents can be absolutely stress-free.
                </p>
              </div>
              <div className="mt-8 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-xs font-bold text-yellow-400 uppercase tracking-wider mb-1">Status</p>
                <p className="text-sm flex items-center">
                  <i className="fa-solid fa-shield-check text-green-400 mr-2"></i> Fully Monitored Campus
                </p>
              </div>
            </div>

            {/* Facility 3: Classrooms */}
            <div className="md:col-span-1 bg-yellow-50 rounded-3xl p-8 border border-yellow-100 transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <div className="w-14 h-14 bg-yellow-400 text-blue-950 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-md">
                <i className="fa-solid fa-chalkboard-user"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-3">4 Spacious Classrooms</h3>
              <p className="text-slate-600 text-sm">
                Well-ventilated, smart classrooms designed for interactive learning. We maintain strict batch limits to ensure every student gets personal attention from the founders.
              </p>
            </div>

            {/* Facility 4: Campus Size */}
            <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 flex items-center justify-between transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]">
              <div className="max-w-md">
                <h3 className="text-2xl font-bold text-blue-950 mb-3">1600 Sq.Ft Infrastructure</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A massive, well-planned campus located in the heart of Jhansi. Easy to commute, safe neighborhood, and a premium vibe that motivates students to perform better.
                </p>
                <Link href="/#demo" className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center group">
                  Visit Campus <i className="fa-solid fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
              <div className="hidden sm:block text-slate-200">
                <i className="fa-solid fa-map-location-dot text-[8rem]"></i>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Campus Tour Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-blue-950">Campus Tour</h3>
            <p className="text-slate-600 mt-2">Glimpses of Sankalp Vision Group of Institute</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery Item 1 */}
            <div className="aspect-square rounded-2xl bg-[linear-gradient(45deg,#f1f5f9,#e2e8f0)] flex items-center justify-center text-slate-400 group overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-camera text-3xl group-hover:scale-110 transition duration-300"></i>
              <div className="absolute inset-0 bg-blue-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-sm font-bold">Classroom View</span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="aspect-square rounded-2xl bg-[linear-gradient(45deg,#f1f5f9,#e2e8f0)] flex items-center justify-center text-slate-400 group overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-camera text-3xl group-hover:scale-110 transition duration-300"></i>
              <div className="absolute inset-0 bg-blue-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-sm font-bold">Library Area</span>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="aspect-square rounded-2xl bg-[linear-gradient(45deg,#f1f5f9,#e2e8f0)] flex items-center justify-center text-slate-400 group overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-camera text-3xl group-hover:scale-110 transition duration-300"></i>
              <div className="absolute inset-0 bg-blue-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-sm font-bold">CCTV Setup</span>
              </div>
            </div>

            {/* Gallery Item 4 */}
            <div className="aspect-square rounded-2xl bg-[linear-gradient(45deg,#f1f5f9,#e2e8f0)] flex items-center justify-center text-slate-400 group overflow-hidden relative cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <i className="fa-solid fa-camera text-3xl group-hover:scale-110 transition duration-300"></i>
              <div className="absolute inset-0 bg-blue-950/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-sm font-bold">Main Entrance</span>
              </div>
            </div>
          </div>
          
          {/* Aaj ka din Grand Opening ka hai! */}
          <p className="text-center text-xs text-slate-500 mt-6 font-medium">
            *Actual campus photos will be updated after the grand opening on 23rd March 2026.
          </p>
        </div>
      </section>

    </main>
  );
}