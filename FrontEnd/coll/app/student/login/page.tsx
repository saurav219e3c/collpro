"use client";
import { useState } from "react";
import Link from "next/link";

export default function StudentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setStatus("Please fill both email and password.");
      return;
    }

    // Demo: replace with real auth call
    console.log({ email, password });
    setStatus("Logged in (demo). Redirecting...");

    setTimeout(() => setStatus(null), 2500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Login</h2>
        <p className="text-sm text-gray-600 mb-6">Sign in to access your dashboard, courses, and placements.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email or Student ID</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 text-black font-semibold"
              placeholder="student@abccollege.edu or ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 text-black font-semibold"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>
            <Link href="#" className="text-sm text-orange-600">Forgot?</Link>
          </div>

          <div>
            <button type="submit" className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold">Login</button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center">
          <span className="text-black font-medium">Don&apos;t have an account?</span>{' '}
          <Link href="/contact" className="text-orange-600 font-semibold">Contact our admissions team</Link>{' '}
        </p>

        {status && <p className="mt-3 text-sm text-gray-600 text-center">{status}</p>}
      </div>
    </div>
  );
}
