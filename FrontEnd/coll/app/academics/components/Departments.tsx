export default function Departments() {
  const departments = [
    {
      name: 'Department of Nursing',
      desc: 'Undergraduate and diploma nursing programs with clinical rotations across partner hospitals and community health centers.',
      focus: ['BSc Nursing', 'Clinical Practice', 'Community Nursing'],
    },
    {
      name: 'ANM & GNM Department',
      desc: 'Focused training for auxiliary and general nursing, midwifery skills, maternal-child care, and primary health outreach.',
      focus: ['ANM', 'GNM', 'Midwifery Skills'],
    },
    {
      name: 'Paramedical & Allied Health',
      desc: 'Diplomas and certificates in lab technology, radiography, physiotherapy assistance, and emergency medical services.',
      focus: ['Lab Tech', 'Radiography', 'Physiotherapy Assistance'],
    },
    {
      name: 'Health Sciences & Simulation Lab',
      desc: 'Interdisciplinary lab for simulation-based learning, anatomy, physiology and clinical skills practice.',
      focus: ['Simulation Labs', 'Anatomy', 'Clinical Skills'],
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Departments</h2>
        <p className="text-gray-600 mb-6">Our academic departments provide focused curriculum, clinical exposure and faculty mentorship to prepare students for healthcare careers.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((d) => (
            <div key={d.name} className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">{d.name}</h3>
              <p className="text-gray-600 mt-2">{d.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {d.focus.map((f) => (
                  <span key={f} className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md border border-blue-100">{f}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href="/academics" className="text-blue-600 font-medium">Explore {d.name.split(' ')[0]} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
