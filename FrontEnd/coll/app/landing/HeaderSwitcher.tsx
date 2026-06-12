"use client";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";

export default function HeaderSwitcher() {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // Show a compact orange back-button header on the student login route
  if (pathname === "/student/login" || pathname.startsWith("/student/login/")) {
    return (
      // small fixed back button (no horizontal bar)
      <button
        aria-label="Go back"
        onClick={() => router.back()}
        className="fixed top-4 left-4 z-50 inline-flex items-center justify-center bg-orange-600 text-white w-10 h-10 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    );
  }

  return <Header />;
}
