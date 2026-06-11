export default function FAQ() {
  const faqs = [
    { q: 'When are applications due?', a: 'Deadlines vary by program. Check each program page for details.' },
    { q: 'Do you offer scholarships?', a: 'Yes — merit and need-based scholarships are available.' },
    { q: 'Are interviews required?', a: 'Some programs may request interviews as part of review.' },
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold">{f.q}</h4>
              <p className="text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
