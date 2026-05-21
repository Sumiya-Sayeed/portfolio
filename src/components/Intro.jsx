import React from 'react';
import SumiyaSayeed from '../assets/SumiyaSayeed.jpeg';
import logos from '../assets/ProfileLogos';

const Intro = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-2xl w-full">
        {/* Top: Photo + Name + Title + Social — centered */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <img
            src={SumiyaSayeed}
            alt="Sumiya Sayeed"
            className="w-36 h-36 rounded-full object-cover shadow-lg ring-2 ring-accent-200 ring-offset-4 ring-offset-stone-50"
          />

          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
            Sumiya Sayeed
          </h1>

          <p className="mt-2 text-lg text-accent-600 font-medium">
            Software Engineer
          </p>

          {/* Social links */}
          <div className="mt-5 flex items-center gap-2">
            {logos.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-accent-600 transition-colors rounded-lg hover:bg-accent-50"
                aria-label={`Social link ${index + 1}`}
              >
                <svg
                  xmlns={logo.xmlns}
                  viewBox={logo.viewbox}
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d={logo.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 mb-10 h-px w-16 mx-auto bg-accent-300" />

        {/* Bio paragraphs — left-aligned, readable column */}
        <div className="space-y-5 text-stone-500 leading-relaxed animate-fade-in-up animate-delay-200">
          <p>
            I’m a software engineer, researcher, and problem solver who loves building things that actually matter. Over the past 8+ years, I’ve worked across frontend engineering, full-stack development, DevOps, AI, and data science growing from someone obsessed with pixel-perfect interfaces into someone who enjoys understanding entire systems from architecture to intelligence.          </p>

          <p>
            I’ve worked on production applications used by real people, collaborated with international teams, led engineering decisions, mentored developers, and contributed to projects under tight deadlines. I enjoy turning complex ideas into scalable, elegant, and user-friendly products.          </p>

          <p>
            Outside of work, I’m deeply passionate about problem solving and competitive programming, with 800+ solved challenges across platforms like Codeforces, AtCoder, UVa, Toph, and HackerRank. That experience taught me how to think critically, learn quickly, and stay calm while solving difficult problems.          </p>

          <p>
            What makes me different is that my curiosity doesn’t stop at code. I’m fascinated by human behavior, psychology, neuroscience, and how people think and interact with technology. I spend a lot of time exploring ideas around cognitive science, intelligent systems, and human-centered AI, inspired by thinkers like David Eagleman, Daniel Goleman, Neil deGrasse Tyson, and Andrew Huberman.          </p>

          <p>
            Lately, my focus has expanded more into research, AI, and data-driven systems, where I enjoy combining engineering, analytics, and human understanding to solve meaningful problems. Whether it’s building applications, analyzing complex data, designing intelligent systems, or exploring new technologies, I’m always driven by curiosity and the excitement of learning something new.</p>
          <p>
            At the core, I’m someone who loves creating, learning, experimenting, and pushing beyond boundaries both in technology and in life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
