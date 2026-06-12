export default function Timeline() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">Our Journey</h2>
        <ol className="mt-6 border-l-2 border-gray-200">
          <li className="pl-6 pb-6">
            <span className="text-sm font-semibold text-gray-700">1998</span>
            <p className="text-gray-600">Founded as a small college focused on health sciences and community care.</p>
          </li>
          <li className="pl-6 pb-6">
            <span className="text-sm font-semibold text-gray-700">2010</span>
            <p className="text-gray-600">Expanded with nursing and allied health programs and launched community partnerships.</p>
          </li>
          <li className="pl-6 pb-6">
            <span className="text-sm font-semibold text-gray-700">2020</span>
            <p className="text-gray-600">Completed major campus modernization with new labs and learning centers.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
