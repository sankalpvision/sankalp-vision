import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[radial-gradient(circle_at_50%_0%,rgb(0,52,113)_0%,rgb(0,12,29)_100%)] text-white pt-36 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            The Visionaries Behind <span className="text-yellow-400">Sankalp</span>
          </h1>
          <p className="text-lg text-blue-200 font-light leading-relaxed">
            We didn't just build a coaching center. We built a high-performance learning ecosystem for the ambitious students of Jhansi.
          </p>
        </div>
      </header>

      {/* Meet Your Mentors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Meet Your Mentors</h2>
            <h3 className="text-3xl font-extrabold text-blue-950">Guidance From The Best</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Mentor 1: Sanskar Malviya */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden text-blue-800 text-3xl font-bold">
                  SM
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-950">Sanskar Malviya</h4>
                  <p className="text-blue-600 font-medium text-sm mt-1">Co-Founder & Academic Director</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "Education is not just about completing the syllabus; it's about building a mindset that cracks competitive exams." With years of expertise in core subjects, Sanskar Sir ensures that every student masters the fundamentals of PCM/PCB with absolute clarity.
              </p>
              <div className="flex flex-wrap gap-3 relative z-10">
                <span className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  <i className="fa-solid fa-graduation-cap text-blue-500 mr-1"></i> Expert Faculty
                </span>
                <span className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  <i className="fa-solid fa-lightbulb text-yellow-500 mr-1"></i> Strategy Lead
                </span>
              </div>
            </div>

            {/* Mentor 2: Vikash Rajpoot */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-5 rounded-bl-full pointer-events-none"></div>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center overflow-hidden text-blue-800 text-3xl font-bold">
                  VR
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-950">Vikash Rajpoot</h4>
                  <p className="text-blue-600 font-medium text-sm mt-1">Co-Founder & Operations Head</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "A student's environment dictates their focus." Vikash Sir is the driving force behind Sankalp Vision's premium infrastructure. He ensures that our 1600 sq.ft campus, dedicated library, and smart classes provide a frictionless experience for students to thrive.
              </p>
              <div className="flex flex-wrap gap-3 relative z-10">
                <span className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  <i className="fa-solid fa-building-columns text-blue-500 mr-1"></i> Operations
                </span>
                <span className="bg-white border border-slate-200 text-slate-600 text-xs px-3 py-1.5 rounded-full font-medium">
                  <i className="fa-solid fa-shield-halved text-green-500 mr-1"></i> Student Welfare
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision, Mission, Promise Section */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="group">
              <i className="fa-solid fa-eye text-4xl text-yellow-400 mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                To become the most trusted educational institution in Jhansi, producing top-tier board results and laying strong foundations for JEE & NEET.
              </p>
            </div>
            <div className="group">
              <i className="fa-solid fa-bullseye text-4xl text-yellow-400 mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                To provide a highly secure, distraction-free environment equipped with a dedicated library and expert mentorship for every student.
              </p>
            </div>
            <div className="group">
              <i className="fa-solid fa-handshake text-4xl text-yellow-400 mb-4 group-hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-3">Our Promise</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                No overcrowding. Only focused batches. We promise individual attention to every 9th-12th standard student who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grand Opening CTA Section - Updated to 24th March */}
      <section className="py-16 bg-yellow-400 text-blue-950 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Meet Us at the Grand Opening!</h2>
          <p className="text-lg mb-8 font-medium">
            Join us on March 24th, 2026, to experience our campus, see the library, and book your free demo class.
          </p>
          <Link href="/#demo" className="bg-blue-950 text-white font-bold px-10 py-4 rounded-xl shadow-[0_10px_20px_rgba(23,37,84,0.3)] hover:bg-blue-900 transition-all text-lg inline-flex items-center group hover:-translate-y-1">
            <i className="fa-regular fa-calendar-check mr-3 group-hover:scale-110 transition-transform"></i> 
            Register for 24th March
          </Link>
        </div>
      </section>

    </main>
  );
}