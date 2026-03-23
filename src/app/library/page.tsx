"use client";

import React from 'react';
import Link from 'next/link';

export default function DigitalLibraryPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[linear-gradient(135deg,rgb(0,52,113)_0%,rgb(15,23,42)_100%)] text-white pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute right-0 top-10 opacity-10">
          <i className="fa-solid fa-folder-open text-[15rem]"></i>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-100 px-4 py-1.5 rounded-full mb-6 text-sm font-medium">
            <i className="fa-solid fa-lock mr-2 text-yellow-400"></i> Exclusive for Enrolled Students
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Sankalp Digital <span className="text-yellow-400">Library</span>
          </h1>
          <p className="text-lg text-blue-200 font-light leading-relaxed max-w-2xl mx-auto">
            Download your premium class notes, formula sheets, and mock test papers directly from here.
          </p>
        </div>
      </header>

      {/* Main Content: Filters + Notes Grid */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-8">
          
          {/* Sidebar - Filters */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-28">
              <h3 className="text-lg font-bold text-blue-950 mb-4 flex items-center">
                <i className="fa-solid fa-filter text-blue-500 mr-2"></i> Filters
              </h3>
              
              {/* Class Filter */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Select Class</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <input type="radio" name="class" defaultChecked className="form-radio text-blue-600 h-4 w-4 accent-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Class 12th</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <input type="radio" name="class" className="form-radio text-blue-600 h-4 w-4 accent-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Class 11th</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <input type="radio" name="class" className="form-radio text-blue-600 h-4 w-4 accent-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Class 10th</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors">
                    <input type="radio" name="class" className="form-radio text-blue-600 h-4 w-4 accent-blue-600" />
                    <span className="text-sm font-medium text-slate-700">Class 9th</span>
                  </label>
                </div>
              </div>

              {/* Subject Filter */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Subject</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer shadow-sm">All</span>
                  <span className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors">Physics</span>
                  <span className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors">Chemistry</span>
                  <span className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors">Maths</span>
                  <span className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-medium px-3 py-1.5 rounded-md cursor-pointer transition-colors">Biology</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Area - Search & Grid */}
          <div className="flex-1">
            
            {/* Search Bar */}
            <div className="mb-8 relative">
              <input 
                type="text" 
                placeholder="Search for a chapter (e.g., Thermodynamics)..." 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-slate-700"
              />
              <i className="fa-solid fa-search absolute left-5 top-[22px] text-slate-400"></i>
            </div>

            {/* Notes Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              
              {/* Note Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 relative group flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Physics</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1 line-clamp-2">Ch 1: Electric Charges and Fields</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Complete handwritten notes by Sanskar Sir. Includes PYQs.</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400"><i className="fa-solid fa-database mr-1"></i> 3.2 MB</span>
                  <button 
                    onClick={() => alert('Downloading PDF...')} 
                    className="bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-700 text-sm font-bold px-4 py-2 rounded-lg transition-colors flex items-center active:scale-95"
                  >
                    <i className="fa-solid fa-download mr-2"></i> Download
                  </button>
                </div>
              </div>

              {/* Note Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 relative group flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center text-xl">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Maths</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1 line-clamp-2">Ch 3: Matrices & Determinants</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Formula sheet and top 50 expected board questions.</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400"><i className="fa-solid fa-database mr-1"></i> 1.8 MB</span>
                  <button 
                    onClick={() => alert('Downloading PDF...')} 
                    className="bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-700 text-sm font-bold px-4 py-2 rounded-lg transition-colors flex items-center active:scale-95"
                  >
                    <i className="fa-solid fa-download mr-2"></i> Download
                  </button>
                </div>
              </div>

              {/* Note Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 relative group flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Chemistry</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1 line-clamp-2">Organic Chemistry Reactions</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Name reactions master sheet by Vikash Sir.</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-xs font-medium text-slate-400"><i className="fa-solid fa-database mr-1"></i> 5.0 MB</span>
                  <button 
                    onClick={() => alert('Downloading PDF...')} 
                    className="bg-slate-100 hover:bg-blue-600 hover:text-white text-blue-700 text-sm font-bold px-4 py-2 rounded-lg transition-colors flex items-center active:scale-95"
                  >
                    <i className="fa-solid fa-download mr-2"></i> Download
                  </button>
                </div>
              </div>
              
              {/* Locked Note Card (Mock Test) */}
              <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 relative flex flex-col h-full opacity-80 cursor-not-allowed">
                {/* Lock Overlay */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] rounded-2xl z-10 flex flex-col items-center justify-center">
                  <i className="fa-solid fa-lock text-3xl text-slate-400 mb-2"></i>
                  <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm">Unlock after Admission</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-200 text-slate-500 rounded-xl flex items-center justify-center text-xl">
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                  <span className="bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">Mock Test</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Full Syllabus Grand Test 1</h3>
                <p className="text-sm text-slate-500 mb-6 flex-1">Targeted for 2026 Boards. Highly confidential.</p>
              </div>

            </div>

            {/* Pagination */}
            <div className="mt-10 flex justify-center">
              <div className="inline-flex bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <button className="px-4 py-2 text-slate-400 hover:bg-slate-50 hover:text-blue-600 font-medium text-sm transition-colors border-r border-slate-200 cursor-not-allowed">Previous</button>
                <button className="px-4 py-2 bg-blue-50 text-blue-700 font-bold text-sm border-r border-slate-200">1</button>
                <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 font-medium text-sm border-r border-slate-200 transition-colors">2</button>
                <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 font-medium text-sm transition-colors">Next</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}