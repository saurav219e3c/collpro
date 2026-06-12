export default function Testimonials() {
  const testimonials = [
    { name: 'Aisha Khan', role: 'Alumni, Registered Nurse', quote: 'The academy transformed my career — clinical training and mentors prepared me for the ward.' },
    { name: 'Ravi Patel', role: 'Current Student, BSc Nursing', quote: 'Simulation labs and hands-on practice gave me the confidence to care for patients.' },
    { name: 'Maria Lopez', role: 'Alumni, Physiotherapy Assistant', quote: 'The placement cell connected me with a great first role in allied health.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Student Testimonials</h2>
        <div className="space-y-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-white p-6 rounded-xl shadow-lg">
              <blockquote className="text-gray-800 italic text-lg">“{t.quote}”</blockquote>
              <figcaption className="mt-3 font-semibold text-orange-600">{t.name} <span className="text-gray-600 font-normal">— {t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
