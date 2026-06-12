export default function Hero() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Admissions — Nursing & Paramedical</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Admissions for our clinical and allied health programs prioritize hands-on readiness, verified
          prerequisites, and a commitment to patient-centered care. Check eligibility and apply.
        </p>
        <div className="mt-6">
          <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow">Contact Admissions</a>
        </div>
      </div>
    </section>
  );
}
