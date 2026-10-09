import React from 'react';
import { conferences } from '../assets/Conferences';

const MicIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </svg>
  </div>
);

const Conferences = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Conferences</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        <div className="mt-10 space-y-8">
          {conferences.map((conf) => (
            <div key={conf.name} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <MicIcon />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-stone-900 leading-snug">{conf.name}</h3>
                <p className="mt-1 text-sm text-stone-500">
                  {conf.dates} · {conf.location}
                </p>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {conf.format} of{' '}
                  <a
                    href={conf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-700 hover:underline"
                  >
                    “{conf.talk}”
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
