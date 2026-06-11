import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Grow?</h3>
        <p className="mb-6 text-blue-100">Apply to our programs and start shaping your future today.</p>
        <Link href="/admissions" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Apply Now</Link>
      </div>
    </section>
  );
}
