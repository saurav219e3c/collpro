export default function Process() {
  const steps = [
    { title: 'Review Clinical Prerequisites', desc: 'Confirm immunizations, basic life support certification, and any required orientation.' },
    { title: 'Apply Online & Provide Documents', desc: 'Upload transcripts, ID, medical certificates, and a short statement of intent.' },
    { title: 'Assessment & Verification', desc: 'Attend interviews/skills checks as required; complete health and background verifications.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Application Process</h2>
        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center font-semibold">{idx + 1}</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
