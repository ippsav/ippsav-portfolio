<script lang="ts">
  export let tags: string[];
  export let label: string = '';
</script>

<div class="mt-2">
  {#if label}
    <div class="text-primary-light dark:text-primary-dark text-xs mb-2">
      {label}
    </div>
  {/if}
  <div class="flex flex-wrap gap-2">
    {#each tags as tag}
      <span
        class="text-xs px-2 py-1 border border-gray-300 dark:border-gray-700 text-secondary-light dark:text-secondary-dark rounded-md transition-colors duration-300"
      >
        {tag}
      </span>
    {/each}
  </div>
</div>
