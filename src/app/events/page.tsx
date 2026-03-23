"use client";

import React from 'react';
import Link from 'next/link';

export default function NoticeBoardPage() {
  return (
    <main className="bg-[#f1f5f9] text-slate-800 min-h-screen flex flex-col font-sans">
      
      {/* Hero Section (Hidden during print) */}
      <header className="bg-[linear-gradient(135deg,rgb(0,52,113)_0%,rgb(15,23,42)_100%)] text-white pt-32 pb-16 text-center relative overflow-hidden print:hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Institute <span className="text-yellow-400">Circulars</span>
          </h1>
          <p className="text-blue-200 font-light max-w-2xl mx-auto">
            Official announcements, holiday declarations, and batch schedules.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="flex-1 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar - Recent Notices (Hidden during print) */}
        <aside className="w-full lg:w-80 shrink-0 print:hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-28">
            <div className="bg-blue-950 px-6 py-4">
              <h3 className="text-white font-bold flex items-center">
                <i className="fa-solid fa-bell text-yellow-400 mr-2"></i> Recent Notices
              </h3>
            </div>
            <div className="divide-y divide-slate-100">
              
              {/* Active Notice */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 cursor-pointer">
                <p className="text-xs text-blue-600 font-bold mb-1">14 March 2026</p>
                <h4 className="text-sm font-bold text-slate-800 leading-tight">Declaration of Holi Holidays</h4>
                <p className="text-xs text-slate-500 mt-1">Ref: SVGI/2026/03/01</p>
              </div>

              {/* Other Notices */}
              <div className="p-4 hover:bg-slate-50 cursor-pointer transition group">
                <p className="text-xs text-slate-400 font-medium mb-1">10 March 2026</p>
                <h4 className="text-sm font-medium text-slate-700 leading-tight group-hover:text-blue-600">Grand Opening Ceremony Details</h4>
                <p className="text-xs text-slate-400 mt-1">Ref: SVGI/2026/03/02</p>
              </div>
              <div className="p-4 hover:bg-slate-50 cursor-pointer transition group">
                <p className="text-xs text-slate-400 font-medium mb-1">05 March 2026</p>
                <h4 className="text-sm font-medium text-slate-700 leading-tight group-hover:text-blue-600">Batch Timing Adjustments</h4>
                <p className="text-xs text-slate-400 mt-1">Ref: SVGI/2026/03/03</p>
              </div>

            </div>
            <div className="p-4 bg-slate-50 text-center border-t border-slate-100">
              <Link href="#" className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All Archive <i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>
            </div>
          </div>
        </aside>

        {/* Document View Area */}
        <div className="flex-1 flex flex-col items-center">
          
          {/* Action Bar (Hidden during print) */}
          <div className="w-full max-w-3xl flex justify-between items-center mb-4 print:hidden">
            <p className="text-sm text-slate-500 font-medium">
              <i className="fa-regular fa-file-pdf mr-1"></i> Official Document View
            </p>
            <button 
              onClick={() => window.print()} 
              className="bg-slate-800 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition flex items-center shadow-md active:scale-95"
            >
              <i className="fa-solid fa-print mr-2"></i> Print / Download PDF
            </button>
          </div>

          {/* The Official Letter Paper */}
          <div className="bg-white font-serif border-t-[8px] border-[#1e3a8a] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] w-full max-w-3xl min-h-[1056px] p-10 md:p-16 relative print:shadow-none print:border-none print:w-full print:min-h-0 print:p-0 print:m-0">
            
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <i className="fa-solid fa-building-columns text-[30rem]"></i>
            </div>

            {/* Letterhead Header */}
            <div className="flex flex-col items-center border-b-2 border-slate-800 pb-6 mb-8 relative z-10 text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-3xl mb-3 shadow-md print:shadow-none print:border print:border-slate-300">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-blue-950 uppercase tracking-wide">Sankalp Vision Group of Institute</h1>
              <p className="text-sm text-slate-600 font-medium mt-1">Premier Coaching for 9th to 12th (PCM/PCB)</p>
              <p className="text-xs text-slate-500 mt-1">Jhansi, Uttar Pradesh - 284001 | Ph: +91 XXXXX XXXXX | info@sankalpvision.in</p>
            </div>

            {/* Meta Info */}
            <div className="flex justify-between items-center mb-8 text-sm font-bold text-slate-800 relative z-10">
              <p>Ref No: <span className="text-slate-600 font-normal">SVGI/2026/03/01</span></p>
              <p>Date: <span className="text-slate-600 font-normal">14 March 2026</span></p>
            </div>

            {/* Subject */}
            <div className="mb-8 relative z-10">
              <p className="text-base text-slate-800">
                <span className="font-bold">Subject:</span> <span className="underline underline-offset-4 decoration-slate-400 font-bold">Declaration of Holiday on Account of Holi Festival.</span>
              </p>
            </div>

            {/* Body */}
            <div className="text-slate-800 text-justify leading-relaxed space-y-5 relative z-10">
              <p>Dear Students and Parents,</p>
              <p>This is to formally notify all the students enrolled across the 9th, 10th, 11th, and 12th standard batches that the institute will remain completely closed from <strong>March 24th, 2026, to March 26th, 2026</strong>, on account of the Holi festival.</p>
              <p>Please note that the dedicated library facilities and the administrative office will also remain non-operational during these dates. We advise all students to utilize this break for self-revision and clearing their backlogs using the digital study material provided on the student portal.</p>
              <p>Regular classes and library operations will resume as per the standard schedule from <strong>March 27th, 2026 (Wednesday)</strong>. Attendance on the reopening day is strictly mandatory, especially for the Board batches.</p>
              <p>We wish you and your family a very safe, colorful, and joyous Holi.</p>
            </div>

            {/* Signatures */}
            <div className="mt-20 flex justify-between items-end relative z-10">
              
              {/* Sanskar Sir */}
              <div className="text-center">
                <div className="border-b border-slate-400 w-40 mb-2 pb-1">
                  <p className="text-blue-600 font-[cursive] text-2xl italic mb-1 opacity-80">Sanskar M.</p>
                </div>
                <p className="font-bold text-sm text-slate-800">Mr. Sanskar Malviya</p>
                <p className="text-xs text-slate-500">Academic Director</p>
              </div>

              {/* Seal */}
              <div className="w-24 h-24 border-2 border-blue-900 rounded-full flex items-center justify-center opacity-40 rotate-12">
                <div className="text-center">
                  <p className="text-[0.6rem] font-bold uppercase text-blue-900 tracking-tighter">Official Seal</p>
                  <i className="fa-solid fa-check-double text-blue-900 text-xl mt-1"></i>
                </div>
              </div>

              {/* Vikash Sir */}
              <div className="text-center">
                <div className="border-b border-slate-400 w-40 mb-2 pb-1">
                  <p className="text-blue-600 font-[cursive] text-2xl italic mb-1 opacity-80">Vikash R.</p>
                </div>
                <p className="font-bold text-sm text-slate-800">Mr. Vikash Rajpoot</p>
                <p className="text-xs text-slate-500">Operations Head</p>
              </div>

            </div>

            {/* Footer Note */}
            <div className="absolute bottom-10 left-0 w-full text-center mt-16 print:relative print:bottom-auto print:mt-10">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">This is a digitally generated authentic document.</p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}