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

  function handleKeydown(e: KeyboardEvent) {
    const { key } = e;
    if (key === 'ArrowRight') {
      e.preventDefault();
      activeTab = (activeTab + 1) % tabs.length;
    } else if (key === 'ArrowLeft') {
      e.preventDefault();
      activeTab = (activeTab - 1 + tabs.length) % tabs.length;
    } else if (key === 'Home') {
      e.preventDefault();
      activeTab = 0;
    } else if (key === 'End') {
      e.preventDefault();
      activeTab = tabs.length - 1;
    }
  }
</script>

<div class="space-y-4">
  <!-- Tabs -->
  <div class="flex space-x-1" role="tablist" aria-label="Sections" on:keydown={handleKeydown}>
    {#each tabs as tab, index}
      {@const isActive = activeTab === index}
      <button
        id={`tab-${index}`}
        role="tab"
        aria-selected={isActive}
        aria-controls={`panel-${index}`}
        tabindex={isActive ? 0 : -1}
        on:click={() => selectTab(index)}
        class="px-4 py-2 border border-white/20 transition-colors focus:outline-none text-sm tracking-wide font-mono"
        class:bg-white={isActive}
        class:text-black={isActive}
        class:text-white={!isActive}
        class:hover:bg-white={!isActive}
        class:hover:text-black={!isActive}
      >
        [ {tab.title.toUpperCase()} ]
      </button>
    {/each}
  </div>

  <!-- Panel -->
  <section class="border border-white/20 p-4 min-h-96 bg-black/70">
    <div class="border-b border-white/15 pb-2 mb-4">
      <span class="text-gray-300 font-mono tracking-wide">データ / {tabs[activeTab].title.toUpperCase()}</span>
    </div>
    {#key activeTab}
      <div
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        in:slide={{ duration: 300, delay: 200 }}
        out:slide={{ duration: 220 }}
        class="overflow-hidden"
      >
        <div in:fade={{ duration: 150, delay: 120 }} out:fade={{ duration: 120 }}>
          <svelte:component this={tabs[activeTab].content} />
        </div>
      </div>
    {/key}
  </section>
</div>
