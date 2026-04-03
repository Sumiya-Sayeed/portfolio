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
            I am a passionate and skilled frontend developer with a deep enthusiasm for building user-friendly, high-quality web applications. Over time, my expertise has grown beyond frontend development into full-stack engineering, DevOps, and emerging areas like AI and data science, allowing me to approach problems with a more holistic and strategic mindset. With a strong foundation in responsive and pixel-perfect design, I focus on creating scalable applications that integrate modern technologies seamlessly.
          </p>

          <p>
            Beyond development, I am an active competitive programmer, having solved over 800 challenges across platforms such as Codeforces, AtCoder, UVa, Toph, and HackerRank. This journey has sharpened my critical thinking and problem-solving abilities, making me more analytical, efficient, and resourceful in tackling real-world engineering challenges.
          </p>

          <p>
            My curiosity also extends into cognitive science and psychology, which continuously shape how I think about technology and its impact on people. Influenced by works like The Brain: The Story of You by David Eagleman and Emotional Intelligence by Daniel Goleman, along with insights from experts such as Neil deGrasse Tyson and Dr. Andrew Huberman, I am particularly interested in the intersection of human behavior, neuroscience, and AI. I actively explore how these perspectives can inform better system design and more human-centered intelligent solutions.
          </p>

          <p>
            Driven by a strong desire to learn and grow, I am always pushing myself to explore new ideas, solve complex problems, and contribute to meaningful projects that connect technology with human understanding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
