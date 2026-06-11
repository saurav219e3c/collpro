export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">History</a></li>
              <li><a href="#" className="hover:text-white transition">Mission & Vision</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li><a href="#academics" className="hover:text-white transition">Programs</a></li>
              <li><a href="#" className="hover:text-white transition">Departments</a></li>
              <li><a href="#" className="hover:text-white transition">Faculty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2">
              <li><a href="#admissions" className="hover:text-white transition">Apply</a></li>
              <li><a href="#" className="hover:text-white transition">Eligibility</a></li>
              <li><a href="#" className="hover:text-white transition">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@academy.edu</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education St, City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2026 Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
