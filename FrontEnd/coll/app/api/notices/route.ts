import { NextResponse } from 'next/server';

const demoNotices = [
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

export async function GET() {
  // In future, replace this with real database/backend call.
  return NextResponse.json(demoNotices, { status: 200 });
}
