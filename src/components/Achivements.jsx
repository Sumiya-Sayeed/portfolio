import React from 'react';
import { achievements } from '../assets/Achievements';

const Achievements = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Achievements</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        <div className="mt-10 space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 rounded-xl hover:bg-stone-100/60 transition-colors"
            >
              {/* Trophy icon */}
              <div className="shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 5V.13a2.96 2.96 0 00-1.293.749L.879 3.707A2.96 2.96 0 00.13 5H5zm6.5-5v5h4.87a2.96 2.96 0 00-.748-1.293L12.793.879A2.96 2.96 0 0011.5.13V0zm1.25 5.22l-2.47 2.47a.75.75 0 01-.28.188V15h3a.75.75 0 010 1.5H7a.75.75 0 010-1.5h3V7.878a.75.75 0 01-.28-.188L7.25 5.22a.75.75 0 011.06-1.06L10 5.85l1.69-1.69a.75.75 0 011.06 1.06z" clipRule="evenodd" />
                </svg>
              </div>

              {achievement.url ? (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-600 leading-relaxed hover:text-accent-700 transition-colors"
                >
                  {achievement.text}
                </a>
              ) : (
                <p className="text-sm text-stone-600 leading-relaxed">{achievement.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
