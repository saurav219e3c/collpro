import AboutHero from './components/Hero';
import Mission from './components/Mission';
import Stats from './components/Stats';
import Team from './components/Team';
import Timeline from './components/Timeline';
import AboutCTA from './components/CTA';

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Mission />
      <Stats />
      <Team />
      <Timeline />
      <AboutCTA />
    </main>
  );
}
