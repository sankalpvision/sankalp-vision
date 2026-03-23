"use client";

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Lead Captured Successfully! We will contact you soon.');
  };

  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="bg-[linear-gradient(135deg,#1e3a8a_0%,#3b82f6_100%)] text-white pt-32 pb-16 md:pt-40 md:pb-24 mt-0 md:mt-10 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1.5 rounded-full mb-6 animate-pulse text-sm md:text-base">
            🎉 Grand Opening on 24th March 2026!
          </div>
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unlock Your True Potential with<br />
            <span className="text-yellow-400">Jhansi's Best Faculty</span>
          </h1>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-blue-100 font-light leading-relaxed">
            Expert Coaching for 9th to 12th standard in PCM, PCB & English. Join Sankalp Vision Group of Institute to secure your future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-900 font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 shadow-lg transition-all active:scale-95 text-center">
              Register Now
            </Link>
            <Link href="/about" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-blue-900 transition-all active:scale-95 text-center">
              Know More
            </Link>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <i className="fa-solid fa-graduation-cap text-[15rem] md:text-[25rem] -rotate-12 translate-x-20"></i>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900 mb-4">Premium Learning Environment</h2>
          <p className="text-slate-500 mb-12 max-w-xl mx-auto">Jhansi's most student-focused infrastructure designed for results.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <i className="fa-solid fa-book-open-reader text-4xl text-blue-500 mb-5 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-bold mb-2 text-blue-950">Dedicated Library</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A peaceful self-study space designed for extreme focus.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <i className="fa-solid fa-chalkboard-user text-4xl text-blue-500 mb-5 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-bold mb-2 text-blue-950">4 Smart Classes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Spacious classrooms spread across Jhansi's prime 1600 sq.ft campus.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <i className="fa-solid fa-video text-4xl text-blue-500 mb-5 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-bold mb-2 text-blue-950">CCTV Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">100% secure campus with 24/7 high-definition camera surveillance.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <i className="fa-solid fa-user-tie text-4xl text-blue-500 mb-5 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-lg font-bold mb-2 text-blue-950">Expert Founders</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Learn directly from mentors Sanskar Malviya & Vikash Rajpoot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section id="courses" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-blue-900">Our Target Courses</h2>
            <p className="text-slate-600 mt-3">Specialized batches to guarantee board excellence for 2026-27.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-8 border-blue-500 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-xl text-slate-800">Class 9th & 10th</h3>
                <p className="text-slate-500 text-sm mt-1">Science, Maths & English Foundation</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase">Foundation</span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-8 border-yellow-500 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-xl text-slate-800">Class 11th & 12th (PCM)</h3>
                <p className="text-slate-500 text-sm mt-1">Physics, Chemistry, Maths & English</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter">Boards/JEE</span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-8 border-green-500 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-xl text-slate-800">Class 11th & 12th (PCB)</h3>
                <p className="text-slate-500 text-sm mt-1">Physics, Chemistry, Biology & English</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-tighter">Boards/NEET</span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border-l-8 border-purple-500 flex items-center justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-bold text-xl text-slate-800">Spoken English</h3>
                <p className="text-slate-500 text-sm mt-1">Fluency, Grammar & Personality Dev.</p>
              </div>
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase">Skill Up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action & Form */}
      <section id="contact" className="py-20 bg-blue-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">Join Our 3-Day Free Demo!</h2>
            <p className="mb-10 text-blue-200 text-lg font-light leading-relaxed">
              Admissions are open for the upcoming session starting March 24th. Limited seats available per batch to ensure personal attention.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 justify-center lg:justify-start group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                  <i className="fa-solid fa-location-dot text-xl"></i>
                </div>
                <p className="text-blue-100 font-medium">Near Eldeco Gate, Rajgarh Main Road, Jhansi</p>
              </div>
              <div className="flex items-center gap-5 justify-center lg:justify-start group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 transition-colors">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div className="flex flex-col text-left">
                  <a href="tel:+917266098673" className="text-blue-100 hover:text-yellow-400 transition-colors">+91 72660 98673</a>
                  <a href="tel:+917503879879" className="text-blue-100 hover:text-yellow-400 transition-colors">+91 75038 79879</a>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/917266098673" target="_blank" className="mt-10 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition transform hover:-translate-y-1">
              <i className="fa-brands fa-whatsapp text-2xl"></i> Message on WhatsApp
            </a>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-slate-800 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 opacity-10 rounded-bl-full"></div>
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-950">Book Your Demo Seat</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Student Name</label>
                <input type="text" className="w-full px-5 py-3 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" placeholder="Enter full name" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number</label>
                <input type="tel" className="w-full px-5 py-3 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all" placeholder="+91" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Select Class</label>
                <select className="w-full px-5 py-3 border-2 border-slate-100 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer">
                  <option>9th Standard</option>
                  <option>10th Standard</option>
                  <option>11th PCM</option>
                  <option>11th PCB</option>
                  <option>12th PCM</option>
                  <option>12th PCB</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white font-black py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95 uppercase tracking-wide">
                Submit Details
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}