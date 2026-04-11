import type { TimelineItemType } from '$lib/types/shared';

export default [
  {
    year: '2025',
    title: 'Senior Software Engineer',
    duration: 'Oct 2025 – Feb 2026',
    company: 'Ygotrips',
    stack: [
      'Golang',
      'PostgreSQL',
      'ltree',
      'LLMs',
      'Agentic Pipelines',
      'Peakwork API',
      'Delve'
    ],
    details: `• Architected a destination hierarchy system using PostgreSQL ltrees, redesigning the core schema and refactoring the codebase to support parent/child relationships across countries, regions, and cities.
• Built a micro-agent that suggests alternative destinations using available inventory as context, gracefully handling zero-result scenarios for user-selected travel periods.
• Optimized the natural-language trip search pipeline, reducing page load times from 10+ seconds to 3–6 seconds, with cached results loading in 1–2 seconds.
• Integrated and optimized Peakwork API results (flights, hotels), improving result relevance and delivery speed.
• Diagnosed and resolved a critical geolocation bug causing incorrect airport lookups in dense metro areas (e.g. Dubai); simultaneously identified a race condition during investigation using Delve.`
  },
  {
    year: '2025',
    title: 'Software Engineer (Contract)',
    duration: 'May 2025 – Oct 2025',
    company: 'NeuroAEye',
    stack: [
      'Golang',
      'PostgreSQL',
      'Redis',
      'Keycloak',
      'Testcontainers',
      'WireMock',
      'AWS',
      'Docker'
    ],
    details: `• Built Go AST-based security tests that auto-discover endpoints, categorize auth levels, and enforce permission middleware on org-scoped routes — failing CI on regressions and blocking unprotected APIs.
• Built a reusable Testcontainers-based integration test harness adopted across services (PG, Redis, Keycloak, WireMock), achieving +80% code coverage with automated DB setup/teardown.
• Implemented password-protected Excel export for exam results with date/patient filters, multi-DB aggregation, role-based access, and full unit tests.
• Refactored services by unifying defaults, extracting shared utilities, and streamlining query performance for maintainability and scalability.`
  },
  {
    year: '2024',
    title: 'Software Engineer (Contract)',
    duration: 'Dec 2024 – Mar 2025',
    company: 'Blotato',
    stack: ['Next.js', 'Supabase', 'Node.js', 'WebGL', 'ElevenLabs', 'Python', 'Docker'],
    details: `• Designed a web-based video editor prototype with GPU-accelerated video filters using WebGL.
• Developed an AI agent to analyze resolved user support tickets and app documentation, proposing PRs to improve docs; implemented repo indexing to reduce agent processing time from hours to 15–30 minutes.
• Improved ElevenLabs voice integration with user-configurable parameters (pitch, speed, tone) for subtitle transcription.
• Resolved a high-memory-consumption bug causing completed queue jobs to remain active in background.`
  },
  {
    year: '2023',
    title: 'Software Developer',
    duration: 'Jan 2023 – May 2024',
    company: 'Hypefury',
    stack: ['Vue', 'Node.js', 'FFmpeg', 'WASM', 'Nix', 'Firebase', 'Google Cloud', 'AWS'],
    details: `• Engineered a media rendering service using FFmpeg and WASM for efficient short-form content creation.
• Built a metrics and workload tracking system across multiple applications.
• Optimized development workflow using Nix for consistent dependency management and streamlined onboarding.`
  },
  {
    year: '2022',
    title: 'Backend Developer',
    duration: 'May 2022 – Aug 2022',
    company: 'Funnelish',
    stack: ['Golang', 'Node.js', 'TypeScript', 'MySQL', 'Redis', 'Google Cloud', 'Docker'],
    details: `• Engineered a backend service in Golang for managing extension installations, products, sales funnels, and assets in a client resource management system.
• Developed a Go/Node.js library enabling third-party developers to build applications on top of the service API.`
  },
  {
    year: '2021',
    title: 'Software Engineer (Freelance)',
    duration: 'Oct 2021 – Feb 2022',
    company: 'Meetmeeasy',
    stack: ['NestJS', 'Node.js', 'TypeScript', 'MySQL'],
    details: `• Engineered a robust scheduling system using NestJS, implementing appointment management, recurring events, and complex calendar operations.
• Developed and optimized cron jobs for automated task execution, ensuring timely updates and maintenance of scheduling data.
• Implemented database management strategies to handle high-volume scheduling data with optimal performance using MySQL.
• Resolved complex timezone-related issues, ensuring accurate time representation and scheduling across multiple geographical regions.`
  },
  {
    year: '2020',
    title: 'Fullstack Developer',
    duration: 'May 2020 – Jul 2021',
    company: 'Hidamek',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'Golang'],
    details: `• Built and deployed a full-stack web application, implementing security measures and database optimization.`
  }
] satisfies TimelineItemType[];
