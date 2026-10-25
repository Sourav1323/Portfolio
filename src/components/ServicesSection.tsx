import React from 'react';
import { FadeIn } from './FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    number: '01',
    name: 'Backend Systems & Java Engineering',
    description:
      'Core Java (OOP, multithreading, collections), Spring Boot, RESTful APIs, and microservices architecture designed for enterprise-grade throughput and fault tolerance.',
  },
  {
    number: '02',
    name: 'Database Architecture & Query Tuning',
    description:
      'Advanced SQL optimization improving query latency by up to 40%, execution plan analysis, indexing strategies, and Slowly Changing Dimensions (SCD Type 1 & 2).',
  },
  {
    number: '03',
    name: 'Enterprise Platform Automation',
    description:
      'ServiceNow Certified Application Developer (CAD) & Administrator (CSA) authoring mission-critical workflows, plus Salesforce Apex triggers, Visualforce, and MuleSoft integrations.',
  },
  {
    number: '04',
    name: 'AI-Augmented Software Engineering',
    description:
      'Accelerating backend SDLC pipelines using Anthropic Claude API, GitHub Copilot, prompt engineering, automated synthetic testing, and fast-turnaround incident resolution.',
  },
  {
    number: '05',
    name: 'Algorithmic Problem Solving & DSA',
    description:
      '5-Star HackerRank rated in C++ and SQL, specializing in space/time complexity optimization, data structure design, and 4 years of mathematical problem-solving mentorship.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center mb-10 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 11vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Services */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={30}
              className={`w-full py-6 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 ${
                index === 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12">
                {/* Left: Giant Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(2.25rem, 8vw, 140px)' }}
                >
                  {service.number}
                </div>

                {/* Right: Stacked Title & Description */}
                <div className="flex flex-col flex-grow">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl mt-2"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
