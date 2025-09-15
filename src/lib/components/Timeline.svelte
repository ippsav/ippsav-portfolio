<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';
  import TimelineItem from '$lib/components/TimelineItem.svelte';
  import timelineData from '$lib/data/timeline';

  export let data: TimelineItemType[] = timelineData;
</script>

<div role="list" aria-label="Experience timeline">
  {#each data as timeline, i (`${timeline.year}-${timeline.company}`)}
    <TimelineItem {timeline} index={i} />
  {/each}
</div>
