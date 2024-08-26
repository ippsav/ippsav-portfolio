<script lang="ts">
  import { fade } from 'svelte/transition';

  export let tabs: { title: string; content: any }[];

  let activeTab = 0;

  function selectTab(index: number) {
    activeTab = index;
  }
</script>

<div class="font-mono text-sm mb-4 bg-white dark:bg-black text-green-700 dark:text-green-500 p-4 rounded border border-green-700 dark:border-green-500">
  <div class="mb-4">
    <span class="text-green-700 dark:text-green-500">$ ls sections/</span>
    <div class="ml-4 mt-2">
      {#each tabs as tab, index}
        <button
          on:click={() => selectTab(index)}
          class="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors mr-4"
          class:font-bold={activeTab === index}
        >
          {tab.title}
        </button>
      {/each}
    </div>
  </div>
  <div class="mt-4">
    <span class="text-green-700 dark:text-green-500">$ cat {tabs[activeTab].title}</span>
    <div class="ml-4 mt-2">
      {#key activeTab}
        <div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
          <svelte:component this={tabs[activeTab].content} />
        </div>
      {/key}
    </div>
  </div>
</div>