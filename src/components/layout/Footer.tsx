import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-slate-300 pt-16 pb-8 border-t-4 border-yellow-500 no-print">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-extrabold flex items-center tracking-tight text-white">
              <i className="fa-solid fa-building-columns text-yellow-500 mr-2.5 text-2xl"></i>
              Sankalp<span className="font-normal text-slate-400">Vision</span>
            </Link>
            <p className="text-[14px] leading-relaxed text-slate-400">
              Jhansi's premier high-performance learning ecosystem. We build mindsets that crack board exams and competitive tests with absolute clarity.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://wa.me/917266098673" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  About Founders
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Student Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Resources */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-6 tracking-wide">Resources</h3>
            <ul className="space-y-3 text-[14px]">
              <li>
                <Link href="/library" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Digital Library
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Notice Board
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-yellow-400 transition-colors flex items-center group">
                  <i className="fa-solid fa-chevron-right text-[10px] mr-2 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-yellow-500"></i>
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-white text-[16px] font-bold mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-[14px]">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-yellow-500"></i>
                <span className="text-slate-400">Near Eldeco Gate, Rajgarh Main Road,<br />Jhansi, Uttar Pradesh - 284135</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-phone mt-1 mr-3 text-yellow-500"></i>
                <div className="flex flex-col">
                  <a href="tel:+917266098673" className="text-slate-400 hover:text-white transition-colors">+91 72660 98673</a>
                  <a href="tel:+917503879879" className="text-slate-400 hover:text-white transition-colors mt-1">+91 75038 79879</a>
                </div>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-yellow-500"></i>
                <a href="mailto:info@sankalpvision.in" className="text-slate-400 hover:text-white transition-colors">info@sankalpvision.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[13px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sankalp Vision Group of Institute. All Rights Reserved.</p>
          <p className="flex items-center">
            Digitally Engineered by <span className="text-white font-semibold ml-1 tracking-wide">Grow Brand</span>
          </p>
        </div>

      </div>
    </footer>
  );
}