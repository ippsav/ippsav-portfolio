<script lang="ts">
  const socials = [
    { label: 'github', url: 'https://github.com/ippsav' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/mehdi-boujid-261789203/' },
    { label: 'twitter', url: 'https://twitter.com/ippsav' },
    { label: 'threads', url: 'https://threads.net/ippsav' }
  ];
</script>

<footer class="text-sm border-t border-green-500 mt-8 py-4">
  <div class="max-w-3xl mx-auto px-4">
    <div class="text-green-500">$ ls social/</div>
    <div class="ml-4 flex flex-wrap gap-4 mt-2">
      {#each socials as { label, url }}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {label}.link
        </a>
      {/each}
    </div>
    <div class="mt-4 text-gray-400">
      <span class="text-green-500">$</span> echo "© {new Date().getFullYear()} Mehdi Boujid"
    </div>
  </div>
</footer>
