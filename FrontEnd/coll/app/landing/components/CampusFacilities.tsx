export default function CampusFacilities() {
  const facilities = [
    { title: 'Simulation & Skills Labs', desc: 'Clinical simulation suites and skills labs for hands-on nursing and paramedical training.' },
    { title: 'Library & Resources', desc: 'Extensive digital and physical collections with study spaces and clinical reference materials.' },
    { title: 'Sports Complex', desc: 'Indoor and outdoor facilities for student wellbeing and extracurriculars.' },
    { title: 'Student Center', desc: 'Clubs, events, and collaborative spaces for student life.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Campus Facilities</h2>
          <p className="text-gray-600 mt-2">Experience world-class facilities designed for learning and growth.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f) => (
            <div key={f.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold">{f.title.charAt(0)}</div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
