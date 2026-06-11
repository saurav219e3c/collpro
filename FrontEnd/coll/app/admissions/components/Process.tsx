export default function Process() {
  const steps = [
    { title: 'Prepare Documents', desc: 'Transcripts, recommendation letters, statement of purpose.' },
    { title: 'Submit Application', desc: 'Complete the online application and upload materials.' },
    { title: 'Interview & Decision', desc: 'Attend interview (if required) and await the admission decision.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Application Process</h2>
        <div className="space-y-6">
          {steps.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
