<script lang="ts">
  import type { ProjectItemType } from "$lib/types/shared";
  import ProjectItem from "$lib/components/ProjectItem.svelte";
  import projectsData from "$lib/data/projects";

  let projects: ProjectItemType[] = projectsData;
</script>

<div class="font-mono text-sm mt-12">
  <div class="text-green-700 dark:text-green-500 mb-6">$ ls projects/</div>
  <div class="ml-4">
    {#each projects as project}
      <ProjectItem {project} />
    {/each}
  </div>
</div>