<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';
  import TimelineItem from '$lib/components/TimelineItem.svelte';
  import timelineData from '$lib/data/timeline';

  interface Props {
    data?: TimelineItemType[];
  }

  let { data = timelineData }: Props = $props();
</script>

<div role="list" aria-label="Experience timeline">
  <div class="text-gray-500 text-[10px] font-mono mb-3 tracking-wider">
    &gt; {data.length} RECORDS · CLICK TO EXPAND
  </div>
  {#each data as timeline, i (`${timeline.year}-${timeline.company}`)}
    <TimelineItem {timeline} index={i} defaultExpanded={i === 0} />
  {/each}
</div>
