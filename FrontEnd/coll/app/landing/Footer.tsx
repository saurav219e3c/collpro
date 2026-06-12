import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition">History</a></li>
              <li><a href="#" className="hover:text-white transition">Mission & Vision</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Academics</h4>
            <ul className="space-y-2">
              <li><Link href="/academics" className="hover:text-white transition">Programs</Link></li>
              <li><a href="#" className="hover:text-white transition">Departments</a></li>
              <li><a href="#" className="hover:text-white transition">Faculty</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Admissions</h4>
            <ul className="space-y-2">
              <li><Link href="/admissions" className="hover:text-white transition">Apply</Link></li>
              <li><a href="#" className="hover:text-white transition">Eligibility</a></li>
              <li><a href="#" className="hover:text-white transition">Scholarships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-white transition">Contact Page</Link></li>
              <li>Email: info@abccollege.edu</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2026 ABC College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
