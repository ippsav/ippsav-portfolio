import type { TimelineItemType } from "$lib/types/shared";

export default [
	{
		year: '2023',
		title: 'Software Developer',
		duration: 'Jan 2023 - May 2024',
		company: 'Hypefury',
		stack: ['Vue', 'Firebase', 'Node.js', 'Google Cloud', 'Elasticsearch'],
	        details: `• Led development efforts across diverse tasks, implementing new features, resolving complex bugs, and
enhancing overall system functionality.
• Designed and delivered multiple high-quality services, including a robust metrics and workload tracking system for multiple applications.
• Optimized development workflow by implementing a Nix environment, ensuring consistent dependency management across the team and streamlining the onboarding process for new developers.
• Engineered a media rendering service utilizing FFmpeg, enabling efficient creation of short-form content for users while continuously optimizing its performance.`
	},
	{
		year: '2022',
		title: 'Backend Developer',
		duration: 'May 2022 - Aug 2022',
		company: 'Funnelish',
		stack: ['Golang', 'Typescript', 'Node.js', 'Google Cloud', 'Elasticsearch'],
		details: `Funnelish.com which is a Shopify alternative written in Go with it s own custom library that s written in Go. Important parts I worked on:
 • Engineered a comprehensive backend service for managing extension installations in a client resource
management system, handling products, sales funnels, and related assets.
 • Developed a Go/Node.js library for the backend API, enabling developers to efficiently create applications that consume the service.`
	},
	{
		year: '2020',
		title: 'Fullstack Developer',
		duration: 'Mar 2020 - Jul 2021',
		company: 'Hidamek',
		stack: ['NextJS', 'Typescript', 'Node.js', 'Golang'],
		details: `• Developed and deployed a fully functional website utilizing cutting-edge technologies
• Implemented robust security measures to protect website integrity and user data
• Demonstrated proficiency in database management and optimization
• Facilitated seamless integration between technological solutions and customer needs
• Acquired comprehensive knowledge of web development lifecycle, including domain acquisition, creation,testing, and deployment
• Implemented SEO strategies to enhance organic discovery and drive high-quality website traffic`
	}
] satisfies TimelineItemType[];
