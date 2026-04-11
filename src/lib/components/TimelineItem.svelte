<script lang="ts">
  import type { TimelineItemType } from '$lib/types/shared';

  interface Props {
    timeline: TimelineItemType;
  }

  let { timeline }: Props = $props();

  let detailLines = $derived(
    timeline.details
      .split('•')
      .filter((line) => line.trim())
      .map((line) => line.trim())
  );
</script>

<li class="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
  <div class="font-mono text-[11px] uppercase tracking-wider text-fg-subtle sm:pt-1">
    {timeline.duration}
  </div>

  <div class="space-y-4">
    <header class="space-y-0.5">
      <h3 class="text-[15px] font-medium text-fg">{timeline.title}</h3>
      <div class="text-[13px] text-fg-muted">{timeline.company}</div>
    </header>

    <ul class="space-y-2 text-[13.5px] text-fg-muted">
      {#each detailLines as line}
        <li class="flex gap-3">
          <span class="select-none text-fg-subtle" aria-hidden="true">—</span>
          <span class="flex-1 leading-relaxed">{line}</span>
        </li>
      {/each}
    </ul>

    <div class="font-mono text-[11px] leading-relaxed text-fg-subtle">
      {timeline.stack.join(' · ')}
    </div>
  </div>
</li>
