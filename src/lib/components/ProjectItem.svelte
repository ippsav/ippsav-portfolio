<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';

  interface Props {
    project: ProjectItemType;
  }

  let { project }: Props = $props();
</script>

<li class="grid grid-cols-1 gap-3 py-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
  <div class="font-mono text-[11px] uppercase tracking-wider text-fg-subtle sm:pt-1">
    {project.title}
  </div>

  <div class="space-y-3">
    <p class="max-w-[60ch] text-[13.5px] leading-relaxed text-fg-muted">
      {project.description}
    </p>

    <div class="flex items-center justify-between gap-4 font-mono text-[11px] text-fg-subtle">
      <span>{project.stack.join(' · ')}</span>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} repository on GitHub`}
        class="underline decoration-fg-subtle underline-offset-4 hover:text-fg hover:decoration-fg transition-colors focus-ring"
      >
        GitHub →
      </a>
    </div>
  </div>
</li>
