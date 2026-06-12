import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative bg-gray-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-80" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow">About ABC College</h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">We prepare students for meaningful careers and civic life through exceptional teaching, research, and community engagement.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="#mission" className="bg-white text-orange-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100">Our Mission</Link>
          <Link href="#team" className="border border-white/40 text-white px-5 py-3 rounded-lg hover:bg-white hover:text-orange-700 transition">Meet the Team</Link>
          <Link href="/about/affiliation" className="bg-white text-orange-700 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100">Affiliation &amp; Disclosure</Link>
        </div>
      </div>
    </section>
  );
}
