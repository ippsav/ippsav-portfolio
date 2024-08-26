<script lang="ts">
  import type { ProjectItemType } from "$lib/types/shared";
  import ProjectItem from "$lib/components/ProjectItem.svelte";
  import projectsData from "$lib/data/projects";

  export let data: ProjectItemType[] = projectsData;
</script>

<div>
  {#each data as project}
    <ProjectItem {project} />
  {/each}
</div>