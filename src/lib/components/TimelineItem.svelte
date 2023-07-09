<script lang="ts">
	import type { TimelineItem } from '$lib/types/shared';
	export let timeline: TimelineItem;
</script>

<div class="flex flex-col border-l border-stone-200 relative dark:border-stone-800 pt-4">
	<div class="mb-6 ml-4">
		<div class="absolute w-3 h-3 bg-stone-200 dark:bg-stone-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-800" />
		<div class="flex flex-wrap gap-4 flex-col items-start justify-start text-sm">
      <div class="flex flex-row gap-4">
        <span class="inline-block px-2 py-1 font-semi-bold text-white dark:text-stone-800 bg-stone-900 dark:bg-zinc-200 rounded-md select-none">
          {timeline.year}
        </span>
        <h3 class="text-lg font-semibold text-stone-900 dark:text-zinc-100">
          {timeline.title}
        </h3>
      </div>
			<span class="text-sm font-normal leading-none text-stone-400 dark:text-zinc-100">
        {timeline.duration} @ <span class="text-stone-900 dark:text-zinc-100 font-semibold">{timeline.company}</span>
      </span>
		</div>
    <p class="my-2 text-base font-normal text-stone-500 whitespace-pre-line">
      {timeline.details}
    </p>
    <div class="flex flex-row gap-x-2 flex-wrap gap-y-2">
    {#each timeline.stack as tech}
      <span class="inline-block px-2 py-1 font-semi-bold text-white dark:text-stone-800 bg-stone-900 dark:bg-zinc-200 rounded-full select-none text-[0.8rem]">
        {tech}
      </span>
    {/each}
    </div>
	</div>
</div>
