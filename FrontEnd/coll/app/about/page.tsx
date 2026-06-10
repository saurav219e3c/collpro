import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow">About the Academy</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">We prepare students for meaningful careers and civic life through exceptional teaching, research, and community engagement.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#mission" className="bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100">Our Mission</Link>
            <Link href="#team" className="border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">Meet the Team</Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900">Mission & Vision</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">Our mission is to empower learners with knowledge, critical thinking, and practical skills. We envision an inclusive institution where students from diverse backgrounds thrive, innovate, and contribute to society.</p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Academic Excellence</h3>
                  <p className="mt-2 text-gray-600">Rigorous programs, research-led teaching and strong industry partnerships.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">Student Success</h3>
                  <p className="mt-2 text-gray-600">Comprehensive support services, career guidance and experiential learning.</p>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="p-6 bg-blue-600 text-white rounded-lg">
                <h4 className="font-bold text-lg">Quick Facts</h4>
                <ul className="mt-3 text-sm">
                  <li>Established: 1998</li>
                  <li>Students: 15,000+</li>
                  <li>Programs: 80+</li>
                </ul>
              </div>

              <div className="p-6 bg-gray-100 rounded-lg">
                <h4 className="font-semibold">Contact</h4>
                <p className="text-sm text-gray-600 mt-2">Email: info@academy.edu<br/>Phone: +1 (555) 123-4567</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <p className="text-sm text-gray-600">Years</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">15K+</div>
              <p className="text-sm text-gray-600">Students</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">200+</div>
              <p className="text-sm text-gray-600">Faculty</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <p className="text-sm text-gray-600">Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900">Leadership & Faculty</h2>
          <p className="mt-3 text-gray-600">A dedicated leadership team and experienced faculty guide our academic mission.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <article className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="h-36 bg-blue-200 rounded-md mb-4" />
              <h3 className="font-semibold">Dr. Anya Patel</h3>
              <p className="text-sm text-gray-600">President</p>
              <p className="mt-3 text-sm text-gray-600">Leading institutional strategy and academic growth initiatives.</p>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="h-36 bg-green-200 rounded-md mb-4" />
              <h3 className="font-semibold">Prof. Michael Chen</h3>
              <p className="text-sm text-gray-600">Dean of Engineering</p>
              <p className="mt-3 text-sm text-gray-600">Focused on research, industry partnerships and student mentorship.</p>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="h-36 bg-purple-200 rounded-md mb-4" />
              <h3 className="font-semibold">Dr. Sara Gomez</h3>
              <p className="text-sm text-gray-600">Director of Student Affairs</p>
              <p className="mt-3 text-sm text-gray-600">Oversees student services, wellbeing, and campus life programs.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Journey</h2>
          <ol className="mt-6 border-l-2 border-gray-200">
            <li className="pl-6 pb-6">
              <span className="text-sm font-semibold text-gray-700">1998</span>
              <p className="text-gray-600">Founded as a small college focused on engineering and sciences.</p>
            </li>
            <li className="pl-6 pb-6">
              <span className="text-sm font-semibold text-gray-700">2010</span>
              <p className="text-gray-600">Expanded with business and arts programs; launched first international partnerships.</p>
            </li>
            <li className="pl-6 pb-6">
              <span className="text-sm font-semibold text-gray-700">2020</span>
              <p className="text-gray-600">Completed major campus modernization with new labs and learning centers.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Ready to learn more?</h3>
          <p className="mt-2 text-white/90">Contact our admissions team or explore programs to find the right path.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/admissions" className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">Admissions</Link>
            <Link href="/contact" className="border border-white/40 text-white px-6 py-3 rounded-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
