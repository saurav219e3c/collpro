"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterSwitcher() {
  const pathname = usePathname() || "/";

  // Hide the footer on student login route(s)
  if (pathname === "/student/login" || pathname.startsWith("/student/login/")) return null;

  return <Footer />;
}
