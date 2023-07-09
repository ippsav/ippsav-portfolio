<script lang="ts">
  import timelineData from "$lib/data/timeline";
	import TimelineItem from "./TimelineItem.svelte";
</script>


<div class="flex flex-col items-center justify-center w-full my-16">
  {#each timelineData as timeline}
    <div class="w-7/12 border-b border-stone-200 dark:border-stone-800 last:border-b-0">
      <TimelineItem {timeline} />
    </div>
  {/each}
</div>
