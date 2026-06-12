export default function Mission() {
  return (
    <section id="mission" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Mission & Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">Our mission is to empower learners with knowledge, critical thinking, and practical skills. We envision an inclusive institution where students from diverse backgrounds thrive, innovate, and contribute to society.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-800">Academic Excellence</h3>
                <p className="mt-2 text-gray-600">Rigorous programs, clinical simulation labs and strong healthcare partnerships.</p>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
                <h3 className="font-semibold text-gray-800">Student Success</h3>
                <p className="mt-2 text-gray-600">Comprehensive support services, placement assistance and experiential learning.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-6 bg-orange-600 text-white rounded-lg">
              <h4 className="font-bold text-lg">Quick Facts</h4>
              <ul className="mt-3 text-sm">
                <li>Established: 1998</li>
                <li>Students: 15,000+</li>
                <li>Programs: 80+</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-gray-600 mt-2">Email: info@abccollege.edu<br/>Phone: +1 (555) 123-4567</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
