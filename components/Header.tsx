"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full bg-primary-blue/95 backdrop-blur-md z-[1000] text-white py-4">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/MAT_logo.png"
              alt="MAT Technology Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="text-[15px] font-medium hover:text-accent-blue transition-colors">
                首页
              </Link>
            </li>
            <li className="relative group cursor-pointer text-[15px] font-medium">
              <span className="flex items-center gap-1 hover:text-accent-blue transition-colors">
                关于MAT
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 bg-primary-blue min-w-[200px] hidden group-hover:flex flex-col shadow-lg border border-white/5 mt-2 rounded">
                <Link href="/about/company-intro" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue transition-colors">公司介绍</Link>
                <Link href="/about/history" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue transition-colors">公司历程</Link>
                <Link href="/about/experts" className="px-5 py-3 hover:bg-secondary-blue transition-colors">专家介绍</Link>
              </div>
            </li>
            <li className="relative group cursor-pointer text-[15px] font-medium">
              <span className="flex items-center gap-1 hover:text-accent-blue transition-colors">
                MAT技术
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute top-full left-0 bg-primary-blue min-w-[200px] hidden group-hover:flex flex-col shadow-lg border border-white/5 mt-2 rounded">
                <Link href="/tech/tech-intro" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue transition-colors">技术介绍</Link>
                <Link href="/about/credentials" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue transition-colors">资质荣誉</Link>
                <Link href="/tech/reports" className="px-5 py-3 border-b border-white/10 hover:bg-secondary-blue transition-colors">运用报告</Link>
                <Link href="/tech/papers" className="px-5 py-3 hover:bg-secondary-blue transition-colors">学术论文</Link>
              </div>
            </li>
            <li>
              <Link href="/products" className="text-[15px] font-medium hover:text-accent-blue transition-colors">
                MAT产品
              </Link>
            </li>
            <li>
              <Link href="/cases" className="text-[15px] font-medium hover:text-accent-blue transition-colors">
                应用案例
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-[15px] font-medium hover:text-accent-blue transition-colors">
                企业新闻
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Side Panel Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-primary-blue/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-[1100] ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[320px] bg-primary-blue shadow-2xl transform transition-transform duration-300 ease-in-out z-[1200] lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
          <img
            src="/images/MAT_logo.png"
            alt="MAT Technology Logo"
            className="h-8 w-auto"
          />
          <button 
            className="p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="flex flex-col gap-3">
            <li>
              <Link 
                href="/" 
                className="block py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                首页
              </Link>
            </li>
            
            <li>
              <button 
                onClick={() => toggleSubmenu("about")}
                className="w-full flex justify-between items-center py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                <span>关于MAT</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openSubmenu === "about" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === "about" && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-accent-blue pl-6 py-2 overflow-hidden animate-reveal">
                  <Link href="/about/company-intro" className="py-3 text-lg text-white/80 hover:text-white transition-colors">公司介绍</Link>
                  <Link href="/about/history" className="py-3 text-lg text-white/80 hover:text-white transition-colors">公司历程</Link>
                  <Link href="/about/experts" className="py-3 text-lg text-white/80 hover:text-white transition-colors">专家介绍</Link>
                </div>
              )}
            </li>

            <li>
              <button 
                onClick={() => toggleSubmenu("tech")}
                className="w-full flex justify-between items-center py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                <span>MAT技术</span>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openSubmenu === "tech" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubmenu === "tech" && (
                <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-accent-blue pl-6 py-2 overflow-hidden animate-reveal">
                  <Link href="/tech/tech-intro" className="py-3 text-lg text-white/80 hover:text-white transition-colors">技术介绍</Link>
                  <Link href="/about/credentials" className="py-3 text-lg text-white/80 hover:text-white transition-colors">资质荣誉</Link>
                  <Link href="/tech/reports" className="py-3 text-lg text-white/80 hover:text-white transition-colors">运用报告</Link>
                  <Link href="/tech/papers" className="py-3 text-lg text-white/80 hover:text-white transition-colors">学术论文</Link>
                </div>
              )}
            </li>

            <li>
              <Link 
                href="/products" 
                className="block py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                MAT产品
              </Link>
            </li>
            <li>
              <Link 
                href="/cases" 
                className="block py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                应用案例
              </Link>
            </li>
            <li>
              <Link 
                href="/news" 
                className="block py-4 px-5 text-white hover:bg-white/10 rounded-xl transition-all text-xl font-bold border border-white/5 active:scale-[0.98]"
              >
                企业新闻
              </Link>
            </li>
          </ul>
        </nav>
      </div>


    </header>
  );
}
