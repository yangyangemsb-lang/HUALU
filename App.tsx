import { useState } from 'react';
import HomePages from './imports/HomePages';
import SustainabilityPages from './imports/SustainabilityPages';
import AboutUsPages from './imports/AboutUsPages';
import ProjectOverviewPages from './imports/ProjectOverviewPages';
import AerogelTechnologyApplicationsPages from './imports/AerogelTechnologyApplicationsPages';
import Header from './components/Header';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'sustainability' | 'about' | 'projects' | 'aerogel'>('home');

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      </header>

      {/* Page Content */}
      <div className="pt-[108px]">
        {currentPage === 'home' ? (
          <HomePages />
        ) : currentPage === 'about' ? (
          <AboutUsPages />
        ) : currentPage === 'projects' ? (
          <ProjectOverviewPages />
        ) : currentPage === 'aerogel' ? (
          <AerogelTechnologyApplicationsPages />
        ) : (
          <SustainabilityPages />
        )}
      </div>
    </div>
  );
}