import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; // Footer import kar liya
import "./globals.css";

// 1. Sankalp Vision Brand Fonts Setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

// 2. Powerful SEO Metadata (Google Search ke liye)
export const metadata: Metadata = {
  title: "Sankalp Vision Group of Institute | Premium Coaching in Jhansi",
  description: "Jhansi's top coaching institute for 9th to 12th (PCM/PCB). Providing a distraction-free environment, dedicated self-study library, and expert mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${merriweather.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* FontAwesome for Icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      
      {/* Body background aur text colors globally set kiye hain */}
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans">
        
        {/* Premium Navbar Sabse Upar */}
        <Navbar />

        {/* Tumhare Baaki Pages (Home, About, Courses etc.) Yahan Render Honge */}
        <main className="flex-1 pt-20"> 
          {children}
        </main>

        {/* Premium Footer Sabse Neeche */}
        <Footer />
        
      </body>
    </html>
  );
}