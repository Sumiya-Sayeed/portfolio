import React from 'react';
import { publications } from '../assets/Publications';

const STATUS_LABEL = {
  published: 'Published',
  'under-review': 'Under review',
};

// Published papers get a solid accent badge; papers under review a muted one,
// so the two groups stay distinguishable even when scanned out of context.
const STATUS_BADGE_CLASS = {
  published: 'bg-accent-50 text-accent-700 ring-accent-200',
  'under-review': 'bg-stone-100 text-stone-600 ring-stone-200',
};

const GROUPS = [
  { status: 'published', heading: 'Conference papers' },
  { status: 'under-review', heading: 'Journal articles under review' },
];

const PaperIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center">
    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  </div>
);

const GitHubLink = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-accent-700 transition-colors"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
    View on GitHub
  </a>
);

const PublicationItem = ({ pub }) => (
  <div className="flex gap-4">
    <div className="shrink-0 mt-1">
      <PaperIcon />
    </div>

    <div className="flex-1 min-w-0">
      <h4 className="text-base font-semibold text-stone-900 leading-snug">{pub.title}</h4>
      <p className="mt-1 text-sm text-stone-500">{pub.authors}</p>

      <div className="mt-1.5 flex flex-wrap items-center gap-2">
        <span className="text-sm text-accent-700 font-medium">
          {pub.venue}, {pub.year}
        </span>
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${STATUS_BADGE_CLASS[pub.status]}`}
        >
          {STATUS_LABEL[pub.status]}
        </span>
      </div>

      <p className="mt-2 text-sm text-stone-600 leading-relaxed">{pub.description}</p>

      {(pub.doi || pub.github) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          {pub.doi && (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-500 hover:text-accent-700 transition-colors break-all"
            >
              DOI: {pub.doi}
            </a>
          )}
          {pub.github && <GitHubLink href={pub.github} />}
        </div>
      )}
    </div>
  </div>
);

const SubHeading = ({ children }) => (
  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400">{children}</h3>
);

const Publications = ({ id }) => {
  return (
    <section id={id} className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight text-stone-900">Publications</h2>
        <div className="mt-1 h-px w-12 bg-accent-400" />

        {GROUPS.map(({ status, heading }) => {
          const items = publications.filter((pub) => pub.status === status);
          if (items.length === 0) return null;
          return (
            <div key={status} className="mt-10">
              <SubHeading>{heading}</SubHeading>
              <div className="mt-6 space-y-8">
                {items.map((pub) => (
                  <PublicationItem key={pub.title} pub={pub} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
