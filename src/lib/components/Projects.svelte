<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import projectsData from '$lib/data/projects';

  export let data: ProjectItemType[] = projectsData;
</script>

<div role="list" aria-label="Projects">
  {#each data as project, i (project.title)}
    <ProjectItem {project} index={i} />
  {/each}
</div>
