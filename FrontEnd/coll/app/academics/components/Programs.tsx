import Link from "next/link";

export default function Programs() {
  const items = [
    { title: 'Engineering', desc: 'Hands-on labs, design projects and industry internships.' },
    { title: 'Business & Management', desc: 'Leadership, strategy and entrepreneurship programs.' },
    { title: 'Computer Science', desc: 'AI, cloud and full-stack development with real projects.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Featured Programs</h2>
          <p className="text-gray-600 mt-2">Choose the program that fits your ambitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((p) => (
            <div key={p.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <Link href="/academics" className="text-blue-600 font-semibold">Learn more →</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
