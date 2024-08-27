<script lang="ts">
  import { fade, slide } from 'svelte/transition';
  import type { ComponentType } from 'svelte';

  type TabsType = {
    title: string;
    content: ComponentType;
  };

  export let tabs: TabsType[];

  let activeTab = 0;

  function selectTab(index: number) {
    activeTab = index;
  }
</script>

<div
  class="font-mono text-sm mb-4 bg-black text-green-500 p-1 rounded border border-green-500 shadow-lg"
>
  <div class="flex border-b border-green-500">
    {#each tabs as tab, index}
      <button
        on:click={() => selectTab(index)}
        class="px-4 py-2 transition-colors border-r border-green-500 last:border-r-0 focus:outline-none"
        class:bg-green-600={activeTab === index}
        class:text-black={activeTab === index}
        class:hover:bg-green-700={activeTab !== index}
      >
        {tab.title}
      </button>
    {/each}
  </div>
  <div class="p-3">
    <span class="text-green-400 opacity-75">$ cat {tabs[activeTab].title}</span>
    {#key activeTab}
      <div
        in:slide={{ duration: 300, delay: 300 }}
        out:slide={{ duration: 300 }}
        class="mt-3 overflow-hidden"
      >
        <div in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
          <svelte:component this={tabs[activeTab].content} />
        </div>
      </div>
    {/key}
  </div>
</div>
