<script lang="ts">
	import type { TimelineItemType } from '$lib/types/shared';
	import TagList from './TagList.svelte';
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
	<div class="ml-4 mt-1">
		<span class="text-green-700 dark:text-green-500">$ uptime</span>
		<span class="ml-2 text-blue-600 dark:text-blue-400">{timeline.duration}</span>
	</div>
	<div class="ml-4 text-gray-700 dark:text-gray-400 whitespace-pre-line mt-2">{timeline.details}</div>
	<TagList tags={timeline.stack} label="skills" />
</div>