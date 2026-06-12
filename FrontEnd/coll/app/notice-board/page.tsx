"use client";
import { useEffect, useState } from 'react';
import NoticeCard from './NoticeCard';

type Notice = {
  id: string;
  title: string;
  date: string;
  image?: string;
  content: string;
  downloadUrl?: string;
};

const demoNotices: Notice[] = [
  {
    id: '1',
    title: 'Campus COVID-19 Safety Update',
    date: '2026-06-01',
    image: 'https://images.unsplash.com/photo-1580530185205-2c6f8b9b8d86?auto=format&fit=crop&w=1400&q=60',
    content: 'Updated safety protocols for clinical placements and on-campus activities. All students must complete the health declaration form before rejoining labs.',
  },
  {
    id: '2',
    title: 'Placement Drive Schedule - July 2026',
    date: '2026-05-25',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1400&q=60',
    content: 'Companies visiting campus for recruitment and job descriptions for eligible students. Registration link will be shared via email.',
  },
  {
    id: '3',
    title: 'State Government Holiday Declared',
    date: '2026-06-15',
    content: 'State government has declared a public holiday on 15th June 2026. All college offices and classes will remain closed. Essential services and emergency contacts will remain available as per college policy.',
  },
];

export default function NoticeBoardPage() {
  const [notices, setNotices] = useState<Notice[]>(demoNotices);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadNotices() {
      try {
        if (!mounted) return;
        setLoading(true);
        const r = await fetch('/api/notices');
        if (!r.ok) throw new Error('Network response was not ok');
        const data: Notice[] = await r.json();
        if (mounted && Array.isArray(data) && data.length > 0) setNotices(data);
      } catch {
        // keep demoNotices on error
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadNotices();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Notice Board</h1>
          <p className="text-sm text-gray-600">Latest announcements and important notices for students and staff.</p>
        </div>

        <div className="mt-4">
          {loading ? (
            <p className="text-sm text-gray-500">Loading notices…</p>
          ) : (
            <p className="text-sm text-gray-500">Showing {notices.length} notice{notices.length !== 1 ? 's' : ''}.</p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notices.map((n) => (
            <NoticeCard key={n.id} notice={n} />
          ))}
        </div>
      </div>
    </main>
  );
}
