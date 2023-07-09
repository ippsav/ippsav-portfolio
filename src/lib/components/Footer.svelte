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
		{
			icon: 'github',
			url: 'https://github.com/ippsav'
		},
		{
			icon: 'linkedin',
			url: 'https://www.linkedin.com/in/mehdi-boujid-261789203/'
		},
		{
			icon: 'twitter',
			url: 'https://twitter.com/ippsav'
		},
		{
			icon: 'threads',
			url: 'https://threads.net/ippsav'
		}
	];
	const icons: IconMap = {
		github: Github,
		linkedin: Linkedin,
		twitter: Twitter,
		threads: Threads
	};
</script>

<div class="flex flex-row justify-between items-center w-[60%] mx-auto pb-10">
	<div class="font-sm text-stone-900 dark:text-zinc-100">© Mehdi Boujid</div>
	<div class="flex flex-row">
		{#each socials as { icon, url }}
			<a href={url} target="_blank">
				<div class="w-6 h-6 mr-4">
          <svelte:component this={icons[icon]} />
				</div>
			</a>
		{/each}
	</div>
</div>
