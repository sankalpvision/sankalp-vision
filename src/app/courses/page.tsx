import React from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[radial-gradient(circle_at_80%_20%,rgb(0,52,113)_0%,rgb(0,12,29)_100%)] text-white pt-36 pb-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <i className="fa-solid fa-book-open-reader text-[15rem]"></i>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center bg-blue-900/50 border border-blue-400/30 text-blue-200 px-4 py-1.5 rounded-full mb-6 text-sm font-medium">
            <i className="fa-solid fa-star text-yellow-400 mr-2"></i> Admissions Open for 2026-27 Session
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Master Your Subjects.<br />
            <span className="text-yellow-400">Secure Your Future.</span>
          </h1>
          <p className="text-lg text-blue-100 font-light leading-relaxed">
            Expert offline coaching with limited batch sizes, premium study material, and regular mock tests right here in Jhansi.
          </p>
        </div>
      </header>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">Explore Our Programs</h2>
            <h3 className="text-3xl font-extrabold text-blue-950">Targeted Learning Paths</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Course Card 1: Foundation Batch */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.1)] group">
              <div className="absolute top-6 right-6 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Foundation Batch</div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-seedling"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Class 9th & 10th</h3>
              <p className="text-slate-500 text-sm mb-6">Building a strong base for board exams and future competitive preparation.</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Core Subjects Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Science</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Mathematics</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">English</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> NCERT focused conceptual clarity.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Weekly doubt-clearing sessions.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Smart notes and chapter-wise tests.</li>
              </ul>
              <Link href="/#demo" className="block w-full text-center bg-slate-100 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-3 rounded-xl transition-colors">
                Select This Program
              </Link>
            </div>

            {/* Course Card 2: Target Engineering */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.1)] group">
              <div className="absolute top-6 right-6 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">Target Engineering</div>
              <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-atom"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Class 11th & 12th (PCM)</h3>
              <p className="text-slate-500 text-sm mb-6">Advanced curriculum mapped for Board Toppers and JEE Aspirants.</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Core Subjects Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Physics</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Chemistry</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Mathematics</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">English</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Advanced formula sheets & derivations.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Access to the dedicated self-study library.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> High-level numerical practice.</li>
              </ul>
              <Link href="/#demo" className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 rounded-xl transition-colors shadow-md">
                Select This Program
              </Link>
            </div>

            {/* Course Card 3: Target Medical */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.1)] group">
              <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Target Medical</div>
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-microscope"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Class 11th & 12th (PCB)</h3>
              <p className="text-slate-500 text-sm mb-6">In-depth biological concepts for Board Excellence and NEET preparation.</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Core Subjects Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Physics</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Chemistry</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Biology</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">English</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Detailed diagrammatic study materials.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Access to the dedicated self-study library.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Objective question banks.</li>
              </ul>
              <Link href="/#demo" className="block w-full text-center bg-green-400 hover:bg-green-500 text-blue-950 font-bold py-3 rounded-xl transition-colors shadow-md">
                Select This Program
              </Link>
            </div>

            {/* Course Card 4: Skill Up */}
            <div className="bg-white rounded-3xl p-8 border-2 border-slate-100 relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.1)] group">
              <div className="absolute top-6 right-6 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">Skill Up</div>
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-comments"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-950 mb-2">Spoken English & Grammar</h3>
              <p className="text-slate-500 text-sm mb-6">Build confidence and professional communication skills for the real world.</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Grammar Rules</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Fluency</span>
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">Personality Dev.</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 text-sm text-slate-600">
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Interactive group discussions.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Vocabulary building exercises.</li>
                <li className="flex items-start"><i className="fa-solid fa-check text-green-500 mt-1 mr-3"></i> Interview & presentation prep.</li>
              </ul>
              <Link href="/#demo" className="block w-full text-center bg-slate-100 hover:bg-blue-950 hover:text-white text-blue-950 font-bold py-3 rounded-xl transition-colors">
                Select This Program
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-4">Confused about which stream to choose?</h3>
          <p className="text-slate-600 mb-8">Sanskar Sir & Vikash Sir provide free career counseling for students entering class 11th. Book a session with us before deciding.</p>
          <a href="https://wa.me/+910000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white font-bold px-8 py-3 rounded-full hover:bg-green-600 transition shadow-lg hover:-translate-y-1">
            <i className="fa-brands fa-whatsapp text-2xl mr-2"></i> Message on WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}