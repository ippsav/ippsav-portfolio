<script lang="ts">
	import type { TimelineItemType } from '$lib/types/shared';
	export let timeline: TimelineItemType;
</script>

<div class="flex flex-col border-l border-gray-200 relative dark:border-gray-800 pt-4">
	<div class="mb-6 ml-4">
		<div class="absolute w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black" />
		<div class="flex flex-wrap gap-4 flex-col items-start justify-start text-sm">
      <div class="flex flex-row gap-4">
        <span class="inline-block px-2 py-1 font-semi-bold text-white dark:text-black bg-black dark:bg-white rounded-md select-none">
          {timeline.year}
        </span>
        <h3 class="text-lg font-semibold text-black dark:text-white">
          {timeline.title}
        </h3>
      </div>
			<span class="text-sm font-normal leading-none text-gray-600 dark:text-gray-400">
        {timeline.duration} @ <span class="text-black dark:text-white font-semibold">{timeline.company}</span>
      </span>
		</div>
    <p class="my-2 text-base font-normal text-gray-600 dark:text-gray-400 whitespace-pre-line">
      {timeline.details}
    </p>
    <div class="flex flex-row gap-x-2 flex-wrap gap-y-2">
    {#each timeline.stack as tech}
      <span class="inline-block px-2 py-1 font-semi-bold text-white dark:text-black bg-black dark:bg-white rounded-full select-none text-[0.8rem]">
        {tech}
      </span>
    {/each}
    </div>
	</div>
</div>