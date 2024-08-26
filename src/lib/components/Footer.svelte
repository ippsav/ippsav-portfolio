<script lang="ts">
	import Github from '$lib/images/github.svelte';
	import Linkedin from '$lib/images/linkedin.svelte';
	import Twitter from '$lib/images/twitter.svelte';
	import Threads from '$lib/images/threads.svelte';
	import type { ComponentType } from 'svelte';

	type IconMap = {
		[key: string]: ComponentType;
	};

	const socials = [
		{ icon: 'github', url: 'https://github.com/ippsav' },
		{ icon: 'linkedin', url: 'https://www.linkedin.com/in/mehdi-boujid-261789203/' },
		{ icon: 'twitter', url: 'https://twitter.com/ippsav' },
		{ icon: 'threads', url: 'https://threads.net/ippsav' }
	];
	const icons: IconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, threads: Threads };
</script>

<footer class="font-mono text-sm border-t border-green-500 mt-8 py-4">
	<div class="max-w-3xl mx-auto px-4">
		<div class="text-green-500">$ ls social/</div>
		<div class="ml-4 flex flex-wrap gap-4 mt-2">
			{#each socials as { icon, url }}
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-400 hover:text-blue-300 transition-colors"
				>
					{icon}.link
				</a>
			{/each}
		</div>
		<div class="mt-4 text-gray-400">
			<span class="text-green-500">$</span> echo "© {new Date().getFullYear()} Mehdi Boujid"
		</div>
	</div>
</footer>