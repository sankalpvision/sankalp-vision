"use client";

import React from 'react';

export default function ContactPage() {
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Grow Brand has recorded your enquiry. We will contact you soon.');
  };

  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[linear-gradient(135deg,rgb(0,52,113)_0%,rgb(15,23,42)_100%)] text-white pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <i className="fa-solid fa-map-location-dot text-[20rem]"></i>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-lg text-blue-200 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions about batches, fees, or our library? Reach out to us directly or visit our 1600 sq.ft campus in Jhansi.
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-sm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div>
              <h2 className="text-3xl font-extrabold text-blue-950 mb-8">Visit Our Campus</h2>
              
              <div className="space-y-6">
                
                {/* Address Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 group cursor-pointer hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    <i className="fa-solid fa-location-dot group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg mb-1">Jhansi Campus</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Near Eldeco Gate, Rajgarh Main Road,<br />
                      Jhansi, Uttar Pradesh - 284135
                    </p>
                  </div>
                </div>

                {/* Phone Card (UPDATED NUMBERS) */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 group cursor-pointer hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-yellow-500 group-hover:text-white transition duration-300">
                    <i className="fa-solid fa-phone-volume group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg mb-1">Call for Admissions</h4>
                    <p className="text-slate-600 text-sm font-medium hover:text-blue-600 transition">
                      <a href="tel:+917266098673">+91 72660 98673 (Sanskar Sir)</a>
                    </p>
                    <p className="text-slate-600 text-sm font-medium hover:text-blue-600 transition">
                      <a href="tel:+917503879879">+91 75038 79879 (Vikash Sir)</a>
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4 group cursor-pointer hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl shrink-0 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                    <i className="fa-solid fa-envelope-open-text group-hover:scale-110 transition-transform duration-300"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-950 text-lg mb-1">Email Us</h4>
                    <p className="text-slate-600 text-sm font-medium hover:text-blue-600 transition"><a href="mailto:admission@sankalpvision.in">admission@sankalpvision.in</a></p>
                    <p className="text-slate-600 text-sm font-medium hover:text-blue-600 transition"><a href="mailto:info@sankalpvision.in">info@sankalpvision.in</a></p>
                  </div>
                </div>

              </div>

              {/* WhatsApp CTA (Using Sanskar Sir's number) */}
              <div className="mt-10 bg-green-50 border border-green-200 p-8 rounded-3xl text-center">
                <i className="fa-brands fa-whatsapp text-5xl text-green-500 mb-4"></i>
                <h4 className="text-xl font-bold text-slate-800 mb-2">Want a quick reply?</h4>
                <p className="text-sm text-slate-600 mb-6">
                  Message us directly on WhatsApp for instant details about batches starting March 24th.
                </p>
                <a href="https://wa.me/917266098673" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition transform hover:-translate-y-1">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative h-fit">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl pointer-events-none"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 rounded-full opacity-10 blur-xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-2 text-center relative z-10">Send an Enquiry</h3>
              <p className="text-slate-500 text-sm text-center mb-8 relative z-10">We usually respond within 2 hours.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    placeholder="e.g., Rahul Kumar" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-3 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                      placeholder="+91" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Class / Standard</label>
                    <select className="w-full px-5 py-3 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all cursor-pointer">
                      <option>9th/10th</option>
                      <option>11th PCM/PCB</option>
                      <option>12th PCM/PCB</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Your Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-5 py-3 border border-slate-200 rounded-xl text-slate-800 bg-slate-50 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" 
                    placeholder="I want to know about the fee structure and library timings..." 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-950 text-white font-bold py-4 rounded-xl shadow-md hover:bg-blue-900 transition-all hover:shadow-lg flex items-center justify-center group">
                  Submit Enquiry <i className="fa-solid fa-arrow-right-long ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-slate-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115340.23176632426!2d78.49073385458066!3d25.402283311666498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481cb!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0" 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 pointer-events-none border-t-4 border-yellow-400"></div>
      </section>

    </main>
  );
}