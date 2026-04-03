import React from 'react';
import { projects } from '../assets/Projects';

const Projects = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Projects</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-2xl border border-stone-150 bg-stone-50/50 hover:bg-white hover:shadow-lg hover:border-accent-200 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-stone-900 group-hover:text-accent-700 transition-colors">
                {project.name}
                <span className="inline-block ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-accent-500">
                  &rarr;
                </span>
              </h3>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs text-stone-500 bg-stone-100 rounded-md"
                  >
                    {tech.icon && (
                      <span className="text-stone-400 text-xs flex items-center">{tech.icon}</span>
                    )}
                    {tech.label}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
