"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);

  // prevent body scroll when sidebar open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (p: string) => {
    if (p === "/") return pathname === "/";
    return pathname.startsWith(p);
  };

  const navClass = (p: string) =>
    isActive(p)
      ? "text-orange-600 font-semibold"
      : "text-gray-700 hover:text-orange-600 transition";

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartX.current = e.touches[0].clientX;
      touchCurrentX.current = touchStartX.current;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1 || touchStartX.current === null) return;
      touchCurrentX.current = e.touches[0].clientX;
    };

    const onTouchEnd = () => {
      if (touchStartX.current === null || touchCurrentX.current === null) {
        touchStartX.current = null;
        touchCurrentX.current = null;
        return;
      }

      const delta = (touchCurrentX.current || 0) - touchStartX.current;
      const openThreshold = 80; // px to open when starting at edge
      const closeThreshold = 50; // px to close when open
      const edgeLimit = 30; // starting x must be within this to open

      // open: swipe right starting from left edge
      if (!open && touchStartX.current < edgeLimit && delta > openThreshold) setOpen(true);

      // close: swipe left when open
      if (open && delta < -closeThreshold) setOpen(false);

      touchStartX.current = null;
      touchCurrentX.current = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [open]);

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold text-black">ABC College</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={navClass('/')} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
              <Link href="/academics" className={navClass('/academics')} aria-current={isActive('/academics') ? 'page' : undefined}>Academics</Link>
              <Link href="/about" className={navClass('/about')} aria-current={isActive('/about') ? 'page' : undefined}>About</Link>
              <Link href="/admissions" className={navClass('/admissions')} aria-current={isActive('/admissions') ? 'page' : undefined}>Admissions</Link>
              <Link href="/contact" className={navClass('/contact')} aria-current={isActive('/contact') ? 'page' : undefined}>Contact</Link>
            </div>

            <div className="flex items-center">
              {/* Apply button visible on md+ */}
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login" className="hidden md:inline-block border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition">Student Login</Link>
                <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                  Apply Now
                </button>
              </div>

              {/* Hamburger - mobile only */}
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="md:hidden ml-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <svg className="h-6 w-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sliding sidebar + overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-50 transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-semibold text-black">ABC College</span>
          </Link>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md">
            <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

          <nav className="p-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className={`block text-lg ${isActive('/') ? 'text-orange-600 font-semibold' : 'text-gray-800'}`} aria-current={isActive('/') ? 'page' : undefined}>Home</Link>
          <Link href="/academics" onClick={() => setOpen(false)} className={`block text-lg ${isActive('/academics') ? 'text-orange-600 font-semibold' : 'text-gray-800'}`} aria-current={isActive('/academics') ? 'page' : undefined}>Academics</Link>
          <Link href="/about" onClick={() => setOpen(false)} className={`block text-lg ${isActive('/about') ? 'text-orange-600 font-semibold' : 'text-gray-800'}`} aria-current={isActive('/about') ? 'page' : undefined}>About</Link>
          <Link href="/admissions" onClick={() => setOpen(false)} className={`block text-lg ${isActive('/admissions') ? 'text-orange-600 font-semibold' : 'text-gray-800'}`} aria-current={isActive('/admissions') ? 'page' : undefined}>Admissions</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={`block text-lg ${isActive('/contact') ? 'text-orange-600 font-semibold' : 'text-gray-800'}`} aria-current={isActive('/contact') ? 'page' : undefined}>Contact</Link>

          <div className="pt-4 space-y-3">
            <Link href="/login" onClick={() => setOpen(false)} className="block w-full text-center text-orange-600 font-semibold px-4 py-3 rounded-lg border border-orange-100 hover:bg-orange-50">Student Login</Link>
            <button onClick={() => setOpen(false)} className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg">Apply Now</button>
          </div>
        </nav>
      </aside>
    </>
  );
}
