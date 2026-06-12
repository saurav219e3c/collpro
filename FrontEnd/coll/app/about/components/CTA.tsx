import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="bg-orange-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Ready to learn more?</h3>
        <p className="mt-2 text-white/90">Contact our admissions team or explore programs to find the right path.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/admissions" className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold">Admissions</Link>
          <Link href="/contact" className="border border-white/40 text-white px-6 py-3 rounded-lg">Contact Us</Link>
          <Link href="/about/affiliation" className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold">Affiliation &amp; Disclosure</Link>
        </div>
      </div>
    </section>
  );
}
