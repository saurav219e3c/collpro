export default function Stats() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-orange-600">25+</div>
            <p className="text-sm text-gray-600">Years</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">15K+</div>
            <p className="text-sm text-gray-600">Students</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">200+</div>
            <p className="text-sm text-gray-600">Faculty</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600">98%</div>
            <p className="text-sm text-gray-600">Placement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
