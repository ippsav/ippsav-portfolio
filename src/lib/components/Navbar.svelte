<script lang="ts">
  import { browser } from '$app/environment';
  import { theme } from '$lib/store';
  import { onMount } from 'svelte';

  function toggleTheme() {
    theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', $theme);
  }

  onMount(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      theme.set('dark');
    } else {
      theme.set('light');
    }
  });

  $: {
    if (browser) {
      if ($theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
</script>

<nav class="p-4 border-b border-green-700 dark:border-green-500">
  <div class="mx-2 flex justify-end items-center">
    <button
      on:click={toggleTheme}
      class="text-green-700 dark:text-green-500 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm"
    >
      $ theme --toggle {$theme === 'dark' ? 'light' : 'dark'}
    </button>
  </div>
</nav>
