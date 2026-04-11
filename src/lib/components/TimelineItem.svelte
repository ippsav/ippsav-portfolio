<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';
  import TagList from './TagList.svelte';
  import { fly, slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  interface Props {
    timeline: TimelineItemType;
    index?: number;
    defaultExpanded?: boolean;
  }

  let { timeline, index = 0, defaultExpanded = false }: Props = $props();

  let isExpanded = $state(defaultExpanded);

  let detailLines = $derived(
    timeline.details
      .split('•')
      .filter((line) => line.trim())
      .map((line) => line.trim())
  );

  function toggle() {
    isExpanded = !isExpanded;
  }
</script>

<article
  class="mb-3 border border-white/20 bg-black/70 transition-colors duration-200 relative z-20 isolate transform-gpu hover:border-white/40"
  style="backface-visibility: hidden; -webkit-backface-visibility: hidden; will-change: transform; contain: paint;"
  in:fly={{ y: 20, duration: 700, delay: 120 + index * 80, easing: cubicOut }}
>
  <div
    class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
  ></div>

  <!-- Clickable Header / Summary -->
  <button
    type="button"
    onclick={toggle}
    aria-expanded={isExpanded}
    aria-controls={`timeline-details-${index}`}
    class="w-full text-left px-4 pt-3 pb-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60 group"
  >
    <div class="flex items-center justify-between gap-3 mb-2">
      <h3 class="text-gray-200 text-[11px] font-mono tracking-wide truncate">
        REC #{timeline.company.toUpperCase()}
      </h3>
      <div class="flex items-center gap-2 shrink-0">
        <span class="text-gray-400 text-[10px] font-mono">{timeline.duration}</span>
        <span
          class="text-white text-[11px] font-mono leading-none w-4 text-center transition-transform duration-300"
          style:transform={isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'}
          aria-hidden="true">▶</span
        >
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
      <div class="font-mono text-sm">
        <span class="text-white">{timeline.title}</span>
        <span class="text-gray-500 mx-1">@</span>
        <span class="text-gray-300">{timeline.company}</span>
      </div>
    </div>
  </button>

  {#if isExpanded}
    <div
      id={`timeline-details-${index}`}
      transition:slide={{ duration: 280, easing: cubicOut }}
      class="px-4 pb-4 border-t border-white/10"
    >
      <section class="text-gray-300 text-sm pt-3">
        <div class="text-white text-[10px] font-mono mb-2 tracking-wider">
          &gt; RESPONSIBILITIES
        </div>
        <ul class="space-y-1.5" role="list">
          {#each detailLines as line}
            <li class="flex font-mono text-xs leading-relaxed">
              <span class="text-gray-500 mr-2 shrink-0">▶</span>
              <span class="text-gray-300">{line}</span>
            </li>
          {/each}
        </ul>
      </section>

      <section class="mt-4 pt-3 border-t border-white/10">
        <div class="text-white text-[10px] font-mono mb-2 tracking-wider">&gt; TECH_STACK</div>
        <TagList tags={timeline.stack} />
      </section>
    </div>
  {/if}
</article>
