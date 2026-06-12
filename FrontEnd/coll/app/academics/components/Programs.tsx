import Link from "next/link";

export default function Programs() {
  const items = [
    { title: 'BSc Nursing', desc: 'Professional nursing program with clinical rotations and patient-care training.' },
    { title: 'ANM & GNM', desc: 'Community health and midwifery programs focused on primary care and outreach.' },
    { title: 'Paramedical', desc: 'Allied health courses including lab tech, radiography, and physiotherapy support.' },
  ];
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
              <div className="mt-4">
                <Link href="/academics" className="text-blue-600 font-medium">View details →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
