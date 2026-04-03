import React from 'react';
import { experiences } from '../assets/Experiences';

const Experience = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Experience</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        <div className="mt-10 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-accent-200">
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent-500" />

              <div>
                <h3 className="text-base font-semibold text-stone-900">{exp.role}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-600 font-medium hover:text-accent-700 transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-stone-300">/</span>
                  <span className="text-stone-400">{exp.duration}</span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-stone-500 leading-relaxed">
                      <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-stone-300" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
