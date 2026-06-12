import Link from 'next/link';

export default function AffiliationPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900">Affiliation & Mandatory Disclosure</h1>
        <p className="mt-4 text-gray-600">This page contains ABC College&apos;s affiliation details, accreditation information, and mandatory disclosures required by regulatory authorities. Replace this placeholder with the official content or upload a PDF for downloads.</p>

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="font-semibold text-lg">Affiliation</h2>
            <p className="text-gray-600 mt-2">ABC College is affiliated to [University Name] and follows the academic regulations and curriculum prescribed by the university.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Accreditation</h2>
            <p className="text-gray-600 mt-2">Accreditation and recognitions will be listed here. Include dates, reference numbers, and scanned certificates where applicable.</p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Mandatory Disclosure</h2>
            <p className="text-gray-600 mt-2">Provide statutorily required disclosures such as governance details, fee structure, seat intake, faculty qualifications, and placement statistics.</p>
          </section>

          <div>
            <Link href="/contact" className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg">Contact Admissions</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
