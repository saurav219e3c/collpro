export default function ContactDetails() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Main Office</h3>
            <p>Email: info@academy.edu</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Education St, City</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold text-xl mb-2">Admissions Office</h3>
            <p>Email: admissions@academy.edu</p>
            <p>Phone: +1 (555) 987-6543</p>
            <p>Office Hours: Mon-Fri, 9am - 5pm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
