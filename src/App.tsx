import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SummarySection from './components/SummarySection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';

const sections = [
  { id: 'hero', component: HeroSection },
  { id: 'summary', component: SummarySection },
  { id: 'skills', component: SkillsSection },
  { id: 'experience', component: ExperienceSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'community', component: CommunitySection },
  { id: 'contact', component: ContactSection },
];

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const duration = 5000; // 5 seconds per section
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    const autoPlayTimer = setTimeout(() => {
      if (currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
      } else {
        setIsAutoPlaying(false); // Stop autoplay when reaching the last section
      }
    }, duration);

    return () => {
      clearTimeout(autoPlayTimer);
      clearInterval(progressInterval);
    };
  }, [currentSection, isAutoPlaying]);

  const nextSection = () => {
    setIsAutoPlaying(false); // Pause autoplay on user interaction
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setIsAutoPlaying(false); // Pause autoplay on user interaction
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const goToSection = (index: number) => {
    setIsAutoPlaying(false); // Pause autoplay on user interaction
    setCurrentSection(index);
  };

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="relative overflow-hidden">
        {/* Add proper spacing for fixed header and navigation on mobile */}
        <div className="min-h-screen flex items-center justify-center p-4 pt-20 pb-24 md:pt-16 md:pb-20">
          <div className="w-full max-h-[calc(100vh-11rem)] md:max-h-none overflow-y-auto md:overflow-visible">
            <CurrentComponent />
          </div>
        </div>
        
        <Navigation
          currentSection={currentSection}
          totalSections={sections.length}
          onNext={nextSection}
          onPrev={prevSection}
          onGoTo={goToSection}
          progress={progress}
          isAutoPlaying={isAutoPlaying}
        />
      </main>
    </div>
  );
}

export default App;