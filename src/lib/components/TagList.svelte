<script lang="ts">
  export let tags: string[] = [];
  export let label = '';
</script>

<div class="mt-2">
  {#if label}
    <div class="text-white text-xs mb-2 font-mono tracking-wide">
      {label}
    </div>
  {/if}
  <ul class="flex flex-wrap gap-2" role="list" aria-label={label ? label : 'Tags'}>
    {#each tags as tag}
      <li>
        <span
          title={tag}
          class="inline-flex items-center gap-1 text-[11px] leading-none px-2 py-1 border border-white/20 text-gray-200 font-mono hover:bg-white hover:text-black transition-colors duration-200"
        >
          <span class="h-[2px] w-3 bg-white/40"></span>
          {tag}
        </span>
      </li>
    {/each}
  </ul>
</div>
