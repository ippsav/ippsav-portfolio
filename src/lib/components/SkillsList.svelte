<script lang="ts">
  export let skills: string[] = [];
  export let label = 'skills';
</script>

<div class="mt-3">
  <span class="text-gray-300 font-mono text-xs">$ ls {label}/</span>
  <ul class="ml-4 flex flex-wrap gap-2 mt-1" role="list" aria-label={`${label} list`}>
    {#each skills as skill}
      <li>
        <span
          class="inline-flex items-center gap-1 text-[11px] leading-none px-2 py-1 border border-white/20 text-gray-200 font-mono hover:bg-white hover:text-black transition-colors duration-200"
          >{skill}</span
        >
      </li>
    {/each}
  </ul>
</div>
