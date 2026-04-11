<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import projectsData from '$lib/data/projects';

  interface Props {
    data?: ProjectItemType[];
  }

  let { data = projectsData }: Props = $props();
</script>

<ol class="divide-y divide-line" aria-label="Projects">
  {#each data as project (project.title)}
    <ProjectItem {project} />
  {/each}
</ol>
