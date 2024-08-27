<script lang="ts">
  import type { ProjectItemType } from '$lib/types/shared';
  import TagList from './TagList.svelte';
  export let project: ProjectItemType;
</script>

<div class="text-sm mb-8 border-l-2 border-green-700 dark:border-green-500 pl-4">
  <div class="flex items-start">
    <span class="text-green-700 dark:text-green-500 mr-2">$</span>
    <div>
      <span class="text-black dark:text-white">{project.title}</span>
    </div>
  </div>
  <div class="ml-4 text-gray-700 dark:text-gray-400 whitespace-pre-line mt-2">{project.description}</div>
  <TagList tags={project.stack} label="tech-stack" />
  <div class="mt-3">
    <span class="text-green-700 dark:text-green-500">$ git remote -v</span>
    <div class="ml-4 mt-1 text-gray-700 dark:text-gray-400">
      origin  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">{project.githubUrl}</a> (fetch)
    </div>
  </div>
</div>