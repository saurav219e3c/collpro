export default function ContactDetails() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-semibold text-xl mb-2 text-gray-900">Main Office</h3>
            <p className="text-gray-700">Email: info@abccollege.edu</p>
            <p className="text-gray-700">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-700">Address: 123 Education St, City</p>
          </div>
          <div className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-semibold text-xl mb-2 text-gray-900">Admissions Office</h3>
            <p className="text-gray-700">Email: admissions@abccollege.edu</p>
            <p className="text-gray-700">Phone: +1 (555) 987-6543</p>
            <p className="text-gray-700">Office Hours: Mon-Fri, 9am - 5pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
