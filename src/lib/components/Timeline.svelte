<script lang="ts">
  import type { TimelineItemType } from "$lib/types/shared";
  import TimelineItem from "$lib/components/TimelineItem.svelte";
  import timelineData from "$lib/data/timeline";

  export let data: TimelineItemType[] = timelineData;
</script>

<div>
  {#each data as timeline}
    <TimelineItem {timeline} />
  {/each}
</div>