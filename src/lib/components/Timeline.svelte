<script lang="ts">
  import type { TimelineItemType } from "$lib/types/shared";
  import TimelineItem from "$lib/components/TimelineItem.svelte";

  export let timelineData: TimelineItemType[];
</script>

<div class="font-mono text-sm mt-12">
  <div class="text-green-700 dark:text-green-500 mb-6">$ cat experience.log</div>
  <div class="ml-4">
    {#each timelineData as timeline}
      <TimelineItem {timeline} />
    {/each}
  </div>
</div>