"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Landing() {
  const images = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - full background carousel with overlay text */}
      <section id="home" className="relative">
        <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[88vh] overflow-hidden">
          {/* Background slides */}
          {images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${i === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              style={{ backgroundImage: `url(${src})` }}
              aria-hidden={i === index ? 'false' : 'true'}
            />
          ))}

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Overlay content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">Shape Your Future at Our Academy</h1>
              <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow">
                World-class education with cutting-edge facilities and experienced faculty dedicated to your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#academics" className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Explore Academics</Link>
                <Link href="#about" className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Slide indicators (bottom right) */}
          <div className="absolute right-6 bottom-6 z-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Show slide ${i + 1}`}>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15K+</div>
              <p className="text-gray-600 font-semibold">Active Students</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-gray-600 font-semibold">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600 font-semibold">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section id="academics" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Choose from our wide range of academic programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Engineering</h3>
                <p className="text-gray-600 mb-4">
                  Cutting-edge engineering programs with hands-on laboratory experience and industry internships.
                </p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">Learn More →</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Business & Management</h3>
                <p className="text-gray-600 mb-4">
                  Develop leadership and entrepreneurial skills with our comprehensive business programs.
                </p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">Learn More →</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Computer Science</h3>
                <p className="text-gray-600 mb-4">
                  Master the latest technologies in AI, web development, and cloud computing.
                </p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">Excellence in education and student development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from industry professionals and academic experts with years of experience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Campus</h3>
                <p className="text-gray-600">
                  State-of-the-art facilities including labs, libraries, and sports complexes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Support</h3>
                <p className="text-gray-600">
                  Dedicated placement cell and alumni network for your professional growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                  <span className="text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">
                  International partnerships and exchange programs for global exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful graduates who have transformed their futures with us.
          </p>
          <Link href="#admissions" className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">Apply Today</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
