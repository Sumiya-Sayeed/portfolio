import React from 'react';
import { skills } from '../assets/Skills';

const Skills = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Skills</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        <div className="mt-10 space-y-8">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-600 mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-stone-600 bg-stone-100 rounded-full hover:bg-accent-100 hover:text-accent-800 transition-colors"
                  >
                    {skill.icon && (
                      <span className="text-stone-400 text-base flex items-center">
                        {skill.icon}
                      </span>
                    )}
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
