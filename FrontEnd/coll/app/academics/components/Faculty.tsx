export default function Faculty() {
  const faculty = [
    { name: 'Dr. Neha Rao', title: 'Head - Department of Nursing', expertise: 'Clinical Nursing, Paediatric Care', email: 'neha.rao@academy.edu' },
    { name: 'Ms. Ritu Sharma', title: 'Senior Lecturer - ANM & GNM', expertise: 'Midwifery, Community Health', email: 'ritu.sharma@academy.edu' },
    { name: 'Mr. Arun Patel', title: 'Coordinator - Paramedical Programs', expertise: 'Emergency Care, Lab Tech', email: 'arun.patel@academy.edu' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Faculty & Leadership</h2>
        <p className="text-gray-600 mb-6">Experienced faculty with clinical backgrounds guide classroom learning, simulation exercises, and supervised placements.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faculty.map((f) => (
            <article key={f.email} className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-semibold">{f.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.title}</p>
                  <p className="text-sm text-gray-600 mt-2"><strong>Expertise:</strong> {f.expertise}</p>
                  <p className="text-sm text-gray-500 mt-2">{f.email}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="/about#team" className="inline-block bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold shadow">View full faculty directory</a>
        </div>
      </div>
    </section>
  );
}
