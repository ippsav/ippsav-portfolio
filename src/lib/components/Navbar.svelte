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

<nav
  class="p-4 border-b border-gray-300 dark:border-gray-700 sticky top-0 backdrop-blur-sm bg-bg-light/90 dark:bg-bg-dark/90 z-10 transition-colors duration-400"
>
  <div class="mx-2 flex justify-end items-center">
    <button
      on:click={toggleTheme}
      class="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-all duration-400 py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      aria-label="Toggle theme"
    >
      {#if $theme === 'dark'}
        <span class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span class="text-xs">Light mode</span>
        </span>
      {:else}
        <span class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span class="text-xs">Dark mode</span>
        </span>
      {/if}
    </button>
  </div>
</nav>
