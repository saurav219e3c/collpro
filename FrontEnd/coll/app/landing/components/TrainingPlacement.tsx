export default function TrainingPlacement() {
  const partners = ['TechCorp', 'DataWorks', 'InnovateX', 'CloudNet'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Training & Placement</h2>
          <p className="text-gray-600 mt-2">Dedicated training and placement services connecting students with top employers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Career Coaching</h3>
            <p className="text-gray-600">Personalized career guidance, resume reviews and interview prep.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry Projects</h3>
            <p className="text-gray-600">Real-world projects in collaboration with companies to build practical skills.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Placement Support</h3>
            <p className="text-gray-600">Strong employer relationships and dedicated placement events.</p>
          </div>
        </div>

        <div className="text-center">
          <h4 className="font-semibold mb-4 text-gray-900">Our Hiring Partners</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((p) => (
              <div key={p} className="px-4 py-2 bg-gray-50 rounded-lg shadow-sm text-gray-800">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
