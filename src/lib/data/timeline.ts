import type { TimelineItem } from "$lib/types/shared";

export default [
	{
		year: 'Present',
		title: 'Software Developer',
		duration: 'Jan 2023 - Present',
		company: 'Hypefury',
		stack: ['Vue', 'Firebase', 'Node.js', 'Google Cloud', 'Elasticsearch'],
		details: `I have successfully tackled diverse tasks. From implementing new features to resolving bugs, I enjoy solving challenges to enhance system functionality. Committed to delivering high-quality results, while using Rust to make tools that would make work easier when tackling some tasks ;)`
	},
	{
		year: '2022',
		title: 'Backend Developer',
		duration: 'May 2022 - Aug 2022',
		company: 'Funnelish',
		stack: ['Golang', 'Typescript', 'Node.js', 'Google Cloud', 'Elasticsearch'],
		details: `Funnelish.com which is a Shopify alternative written in Go with it's own custom library that's written in Go.
Important parts I worked on:
 - Creating a full backend service that manages installation of extensions to a client store which manages 
 client resources (products, funnels etc)
 - Creating Go/Node library for the backend API for developers to be able to create apps that can interact with the API.`
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
      - Gaining a solid understanding of website development by placing the website on a domain creating, testing, and deploying.
      - Creating a full backend service that manages installation of extensions to a client store which manages`,
	}
] satisfies TimelineItem[];
