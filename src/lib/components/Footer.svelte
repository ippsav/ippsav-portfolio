<script lang="ts">
  import { fly } from 'svelte/transition';

  const socials = [
    { label: 'github', url: 'https://github.com/ippsav' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/mehdi-boujid-261789203/' },
    { label: 'twitter', url: 'https://twitter.com/ippsav' },
    { label: 'threads', url: 'https://threads.net/ippsav' }
  ];
</script>

<footer
  class="text-sm border-t border-gray-300 dark:border-gray-700 mt-12 py-6 transition-colors duration-400"
>
  <div class="max-w-3xl mx-auto px-4">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
      <div class="space-y-4">
        <h3 class="text-primary-light dark:text-primary-dark font-semibold">Connect</h3>
        <div class="flex flex-wrap gap-4">
          {#each socials as { label, url }, i}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-all duration-300 hover:underline"
              in:fly={{ y: 10, duration: 300, delay: 100 * i }}
            >
              {label}
            </a>
          {/each}
        </div>
      </div>

      <div class="text-secondary-light dark:text-secondary-dark text-xs">
        © {new Date().getFullYear()} Mehdi Boujid
      </div>
    </div>
  </div>
</footer>
