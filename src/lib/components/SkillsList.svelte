<script lang="ts">
  export let skills: string[];
  export let label: string = "skills";
</script>

<div class="mt-3">
  <span class="text-green-700 dark:text-green-500">$ ls {label}/</span>
  <div class="ml-4 flex flex-wrap gap-2 mt-1">
    {#each skills as skill}
      <span class="text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20 px-2 py-0.5 rounded">{skill}</span>
    {/each}
  </div>
</div>