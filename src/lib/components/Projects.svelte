<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import projectsData from '$lib/data/projects';

  interface Props {
    data?: ProjectItemType[];
  }

  let { data = projectsData }: Props = $props();
</script>

<div class="text-gray-500 text-[10px] font-mono mb-3 tracking-wider">
  &gt; {data.length} PROJECTS
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-label="Projects">
  {#each data as project, i (project.title)}
    <ProjectItem {project} index={i} />
  {/each}
</div>
