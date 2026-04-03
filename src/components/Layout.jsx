import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achivements';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-full bg-accent-600 text-white shadow-lg hover:bg-accent-700 transition-all duration-300 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

// Simple scroll-reveal using IntersectionObserver
const useScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('section-hidden');
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    sections.forEach((section) => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
};

const Layout = () => {
  document.title = 'Sumiya Sayeed';
  useScrollReveal();

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <Intro id="About" />

      <div className="reveal-section">
        <Skills id="Skills" />
      </div>

      <div className="reveal-section">
        <Projects id="Projects" />
      </div>

      <div className="reveal-section">
        <Experience id="Experience" />
      </div>

      <div className="reveal-section">
        <Education id="Education" />
      </div>

      <div className="reveal-section">
        <Achievements id="Achievements" />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-400">
        Built by{' '}
        <a
          href="https://www.linkedin.com/in/sumiya-sayeed-04a9319b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-600 hover:text-accent-800 transition-colors"
        >
          Sumiya Sayeed
        </a>
      </footer>

      <ScrollToTop />
    </div>
  );
};

export default Layout;
