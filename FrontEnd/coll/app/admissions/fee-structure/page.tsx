import Link from 'next/link';

export default function FeeStructurePage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900">Fee Structure</h1>
        <p className="mt-3 text-gray-600">Below is a demo fee structure shown in Indian Rupees (INR). These figures are placeholders for now — please replace with the official fees when available. Official fees and any scholarships/waivers will be confirmed during the admissions process.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <h2 className="font-semibold text-lg">BSc Nursing</h2>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Tuition (annual): ₹45,000</li>
              <li>Lab & Clinical fees: ₹6,000</li>
              <li>Exam & Registration: ₹1,500</li>
              <li>Estimated Total (1 year): ₹52,500</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="font-semibold text-lg">ANM &amp; GNM</h2>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Tuition (annual): ₹28,000</li>
              <li>Practical training: ₹4,000</li>
              <li>Exam & Registration: ₹1,200</li>
              <li>Estimated Total (1 year): ₹33,200</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="font-semibold text-lg">Paramedical Programs</h2>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Tuition (annual): ₹32,000</li>
              <li>Practical & Lab: ₹4,500</li>
              <li>Exam & Registration: ₹1,300</li>
              <li>Estimated Total (1 year): ₹37,800</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="font-semibold text-lg">Notes</h2>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>All fees are indicative and subject to change.</li>
              <li>Final fees are published at admission and communicated in the offer letter.</li>
              <li>Scholarships and financial assistance may be available — contact admissions for details.</li>
              <li>Additional charges (uniforms, books, clinical placements) may apply.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-orange-600 text-white px-5 py-3 rounded-lg">Contact Admissions</Link>
        </div>
      </div>
    </main>
  );
}
