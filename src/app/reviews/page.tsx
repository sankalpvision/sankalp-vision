import React from 'react';
import Link from 'next/link';

export default function ReviewsPage() {
  return (
    <main className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* Hero Section */}
      <header className="bg-[linear-gradient(135deg,rgb(0,52,113)_0%,rgb(15,23,42)_100%)] text-white pt-36 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <i className="fa-solid fa-quote-right text-[15rem]"></i>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full mb-6 text-sm font-medium">
            <i className="fa-solid fa-star text-yellow-400 mr-2"></i> Trusted by Hundreds of Students
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Hear It From Our <span className="text-yellow-400">Achievers</span>
          </h1>
          <p className="text-lg text-blue-200 font-light leading-relaxed max-w-2xl mx-auto">
            Discover how the mentorship of Sanskar Sir and Vikash Sir has transformed average students into board toppers and confident achievers.
          </p>
        </div>
      </header>

      {/* Video Reviews Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-blue-950">Watch Their Journey</h2>
            <p className="text-slate-500 mt-2">Real words, real results.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Video Card 1 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer aspect-video flex items-center justify-center shadow-lg">
              <img src="https://via.placeholder.com/600x400/1e293b/475569?text=Student+Video+1" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300" />
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-950 text-2xl pl-1 shadow-xl z-10 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-white font-bold">"Physics made so easy!"</p>
                <p className="text-slate-300 text-xs">Mentored by Sanskar Sir</p>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer aspect-video flex items-center justify-center shadow-lg">
              <img src="https://via.placeholder.com/600x400/1e293b/475569?text=Student+Video+2" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300" />
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-950 text-2xl pl-1 shadow-xl z-10 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-white font-bold">"Best environment for self-study"</p>
                <p className="text-slate-300 text-xs">Mentored by Vikash Sir</p>
              </div>
            </div>

            {/* Video Card 3 */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden relative group cursor-pointer aspect-video flex items-center justify-center shadow-lg">
              <img src="https://via.placeholder.com/600x400/1e293b/475569?text=Student+Video+3" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300" />
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-950 text-2xl pl-1 shadow-xl z-10 group-hover:scale-110 transition duration-300">
                <i className="fa-solid fa-play"></i>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-white font-bold">"Scored 95% in Boards"</p>
                <p className="text-slate-300 text-xs">PCM Batch</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Text Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Review Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:border-yellow-400">
              <i className="fa-solid fa-quote-left text-4xl text-blue-100 absolute top-6 right-6"></i>
              <div className="flex text-yellow-400 text-sm mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "Sanskar Sir ke concepts itne clear hote hain ki ghar aakar zyada ratna nahi padta. Class mein hi 80% cheezein yaad ho jati hain. Highly recommended for PCM students!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">AK</div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm">Aman Khare</h4>
                  <p className="text-xs text-slate-500">Class 12th PCM</p>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:border-yellow-400">
              <i className="fa-solid fa-quote-left text-4xl text-blue-100 absolute top-6 right-6"></i>
              <div className="flex text-yellow-400 text-sm mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "Vikash Sir always ensures ki bache properly focus kar rahe hain. Unka guidance aur discipline ek average student ko bhi topper banne par majboor kar deta hai."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">RS</div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm">Riya Sharma</h4>
                  <p className="text-xs text-slate-500">Class 11th PCB</p>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] hover:border-yellow-400">
              <i className="fa-solid fa-quote-left text-4xl text-blue-100 absolute top-6 right-6"></i>
              <div className="flex text-yellow-400 text-sm mb-4">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                "Sankalp Vision ka sabse best part unka library system hoga. Self-study ke liye aisi shanti aur environment Jhansi mein doosri kisi coaching mein nahi milti."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">MJ</div>
                <div>
                  <h4 className="font-bold text-blue-950 text-sm">Mohit Jain</h4>
                  <p className="text-xs text-slate-500">Class 10th Foundation</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#0a192f] text-white text-center border-b-4 border-yellow-500">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Be Our Next Success Story</h2>
          <p className="text-blue-200 mb-8">Admissions are open for the upcoming session. Secure your seat today.</p>
          <Link href="/#demo" className="bg-yellow-400 text-blue-950 font-bold px-10 py-4 rounded-xl shadow-[0_10px_20px_rgba(250,204,21,0.2)] hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-300 text-lg inline-block">
            Book Your Free Demo
          </Link>
        </div>
      </section>

    </main>
  );
}