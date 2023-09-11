import type { TimelineItem } pfrom "$lib/types/shared";

export default [
	{
		year: 'Present',
		title: 'Software Developer',
		duration: 'Jan 2023 - Present',
		company: 'Hypefury',
		stack: ['Vue', 'Firebase', 'Node.js', 'Google Cloud', 'Elasticsearch'],
	        details: `- I've successfully tackled diverse tasks. From implementing new features, resolving bugs and enhancing system functionality.
- I've successfully delivered multiple well written services one of whice that allowed us from saving metrics and workloads of multiple apps.
- I've enhanced the workflow by setting up a nix environment which manages all the dependencies of the project which made sure of all coworkers to have the same version of each dependencie (ex: NodeJs), while making it easier when onboarding new developers to setup the project locally.`
	},
	{
		year: '2022',
		title: 'Backend Developer',
		duration: 'May 2022 - Aug 2022',
		company: 'Funnelish',
		stack: ['Golang', 'Typescript', 'Node.js', 'Google Cloud', 'Elasticsearch'],
		details: `Funnelish.com which is a Shopify alternative written in Go with it's own custom library that's written in Go.
Important parts I worked on:
 - Creating a full backend service that enables third party developers to develop extensions, which adds new functionalities to client's stores which manages client resources (products, funnels etc)
 - Creating Go/Node library API that enables developers to use the service to create apps that can interact with client's stores/api.`
	},
	{
		year: '2020',
		title: 'Fullstack Developer',
		duration: 'Mar 2020 - Jul 2021',
		company: 'Hidamek',
		stack: ['NextJS', 'Typescript', 'Node.js', 'Golang'],
		details: `Main parts:
      - Creating a fully functional website using the latest technologies.
      - Creating and securing the website (hidamek.com).
      - Gaining a solid understanding of website development by placing the website on a domain creating, testing, and deploying.`
	}
] satisfies TimelineItem[];
