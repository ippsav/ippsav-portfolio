<script lang="ts">
  import type { TimelineItemType } from "$lib/types/shared";
  import TimelineItem from "$lib/components/TimelineItem.svelte";

  export let timelineData: TimelineItemType[];
</script>


<div class="flex flex-col items-center justify-center w-full my-16">
  {#each timelineData as timeline}
    <div class="w-full md:w-7/12 border-b border-gray-200 dark:border-gray-800 last:border-b-0 px-2 md:px-0">
      <TimelineItem {timeline} />
    </div>
  {/each}
</div>