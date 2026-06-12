export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900">Leadership & Faculty</h2>
        <p className="mt-3 text-gray-600">A dedicated leadership team and experienced faculty guide our academic mission.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <article className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
            <div className="h-36 bg-orange-200 rounded-md mb-4" />
            <h3 className="font-semibold">Dr. Anya Patel</h3>
            <p className="text-sm text-gray-600">President</p>
            <p className="mt-3 text-sm text-gray-600">Leading institutional strategy and academic growth initiatives.</p>
          </article>

          <article className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
            <div className="h-36 bg-green-200 rounded-md mb-4" />
            <h3 className="font-semibold">Prof. Michael Chen</h3>
            <p className="text-sm text-gray-600">Dean of Health Sciences</p>
            <p className="mt-3 text-sm text-gray-600">Focused on clinical partnerships, simulation labs, and student mentorship.</p>
          </article>

          <article className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100">
            <div className="h-36 bg-purple-200 rounded-md mb-4" />
            <h3 className="font-semibold">Dr. Sara Gomez</h3>
            <p className="text-sm text-gray-600">Director of Student Affairs</p>
            <p className="mt-3 text-sm text-gray-600">Oversees student services, wellbeing, and campus life programs.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
