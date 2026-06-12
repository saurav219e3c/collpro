export default function FAQ() {
  const faqs = [
    { q: 'When are applications due?', a: 'Deadlines vary by program — refer to the specific program page for intake dates and cutoffs.' },
    { q: 'Do you offer financial support?', a: 'We provide limited merit and need-based scholarships and work-study opportunities for eligible students.' },
    { q: 'Are health checks required?', a: 'Yes — accepted students must complete required immunizations and a basic health screening before clinical placements.' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gradient-to-b from-white to-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900">{f.q}</h4>
              <p className="text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
