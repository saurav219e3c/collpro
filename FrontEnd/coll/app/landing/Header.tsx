import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Academy</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link href="#academics" className="text-gray-700 hover:text-blue-600 transition">Academics</Link>
            <Link href="about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link href="#admissions" className="text-gray-700 hover:text-blue-600 transition">Admissions</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}
