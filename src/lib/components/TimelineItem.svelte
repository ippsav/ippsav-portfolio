<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';
  import TagList from './TagList.svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  interface Props {
    timeline: TimelineItemType;
    index?: number;
  }

  let { timeline, index = 0 }: Props = $props();

  let detailLines = $derived(
    timeline.details
      .split('•')
      .filter((line) => line.trim())
      .map((line) => line.trim())
  );
</script>

<article
  class="mb-6 border border-white/20 bg-black/70 p-4 transition-colors duration-200 relative z-20 isolate transform-gpu hover:border-white/40"
  style="backface-visibility: hidden; -webkit-backface-visibility: hidden; will-change: transform; contain: paint;"
  in:fly={{ y: 20, duration: 900, delay: 180 + index * 120, easing: cubicOut }}
>
  <div
    class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
  ></div>

  <!-- Header -->
  <header class="border-b border-white/15 pb-2 mb-4">
    <div class="flex items-center justify-between">
      <h3 class="text-gray-200 text-xs font-mono tracking-wide">
        RECORD #{timeline.company.toUpperCase()}
      </h3>
      <span class="text-gray-400 text-[10px]">{timeline.duration}</span>
    </div>
  </header>

  <!-- Content -->
  <div class="space-y-3">
    <section>
      <div class="text-white font-mono text-sm">&gt; POSITION: {timeline.title}</div>
      <div class="text-gray-300 font-mono text-sm">&gt; COMPANY: {timeline.company}</div>
    </section>

    <section class="text-gray-300 text-sm space-y-2">
      <div class="text-white text-xs font-mono mb-2">RESPONSIBILITIES:</div>
      <ul class="space-y-1" role="list">
        {#each detailLines as line}
          <li class="flex font-mono text-xs">
            <span class="text-gray-400 mr-2">▶</span>
            <span>{line}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section class="mt-4 pt-3 border-t border-white/10">
      <div class="text-white text-xs font-mono mb-2">TECH_STACK:</div>
      <TagList tags={timeline.stack} />
    </section>
  </div>
</article>
