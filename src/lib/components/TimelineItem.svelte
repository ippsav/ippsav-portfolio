<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';
  import TagList from './TagList.svelte';
  import { fly } from 'svelte/transition';
  export let timeline: TimelineItemType;

  $: detailLines = timeline.details
    .split('•')
    .filter((line) => line.trim())
    .map((line) => line.trim());
</script>

<div
  class="mb-12 relative pl-8 transition-colors duration-400"
  in:fly={{ y: 20, duration: 500, delay: 100 }}
>
  <div class="absolute left-0 top-0 h-full">
    <div
      class="absolute left-0 top-0 w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"
    />
    <div
      class="absolute left-0 top-4 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2"
    />
  </div>

  <div class="mb-3">
    <div class="flex flex-wrap items-center mb-2">
      <h3 class="text-primary-light dark:text-primary-dark font-semibold mr-2">{timeline.title}</h3>
      <span class="text-secondary-light dark:text-secondary-dark">· {timeline.company}</span>
    </div>

    <div class="flex items-center text-xs text-secondary-light dark:text-secondary-dark mb-4">
      <span class="mr-2">{timeline.year}</span>
      <span class="mr-2">·</span>
      <span>{timeline.duration}</span>
    </div>

    <div
      class="text-secondary-light dark:text-secondary-dark text-sm leading-relaxed mb-4 space-y-3"
    >
      {#each detailLines as line}
        <div class="flex">
          <span class="mr-2 flex-shrink-0">•</span>
          <span>{line}</span>
        </div>
      {/each}
    </div>

    <TagList tags={timeline.stack} />
  </div>
</div>
