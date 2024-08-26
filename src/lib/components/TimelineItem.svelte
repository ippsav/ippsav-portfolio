<script lang="ts">
	import type { TimelineItemType } from '$lib/types/shared';
	export let timeline: TimelineItemType;
</script>

<div class="font-mono text-sm mb-8 border-l-2 border-green-700 dark:border-green-500 pl-4">
	<div class="flex items-start">
		<span class="text-green-700 dark:text-green-500 mr-2">$</span>
		<div>
			<span class="text-orange-600 dark:text-yellow-500">{timeline.year}</span>
			<span class="text-black dark:text-white ml-2">{timeline.title} @ {timeline.company}</span>
		</div>
	</div>
	<div class="ml-4 text-gray-700 dark:text-gray-400 whitespace-pre-line mt-2">{timeline.details}</div>
	<div class="mt-3">
		<span class="text-green-700 dark:text-green-500">$ ls skills/</span>
		<div class="ml-4 flex flex-wrap gap-2 mt-1">
			{#each timeline.stack as tech}
				<span class="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 px-2 py-0.5 rounded">{tech}</span>
			{/each}
		</div>
	</div>
</div>