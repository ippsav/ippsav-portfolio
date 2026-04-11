<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';
  import TagList from './TagList.svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  interface Props {
    project: ProjectItemType;
    index?: number;
  }

  let { project, index = 0 }: Props = $props();
</script>

<article
  class="border border-white/20 bg-black/70 p-4 transition-colors duration-200 relative z-20 isolate transform-gpu hover:border-white/40 flex flex-col h-full"
  style="backface-visibility: hidden; -webkit-backface-visibility: hidden; will-change: transform; contain: paint;"
  in:fly={{ y: 20, duration: 700, delay: 120 + index * 80, easing: cubicOut }}
>
  <div
    class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
  ></div>

  <!-- Header -->
  <header class="border-b border-white/15 pb-2 mb-4">
    <div class="flex items-center justify-between gap-2">
      <h3 class="text-gray-200 text-xs font-mono tracking-wide truncate">
        &gt; {project.title.toUpperCase()}
      </h3>
    </div>
  </header>

  <!-- Content -->
  <div class="flex flex-col flex-1 space-y-4">
    <section>
      <div class="text-white text-[10px] font-mono mb-2 tracking-wider">&gt; DESCRIPTION</div>
      <p class="text-gray-300 text-xs leading-relaxed font-mono">
        {project.description}
      </p>
    </section>

    <section>
      <div class="text-white text-[10px] font-mono mb-2 tracking-wider">&gt; TECH_STACK</div>
      <TagList tags={project.stack} />
    </section>

    <div class="pt-3 mt-auto border-t border-white/10">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} repository on GitHub`}
        class="inline-flex items-center gap-2 text-gray-200 text-[11px] tracking-wide border border-white hover:bg-white hover:text-black px-3 py-1 transition-colors duration-200 focus-ring"
      >
        <span>&gt;</span>
        ACCESS_REPOSITORY
      </a>
    </div>
  </div>
</article>
