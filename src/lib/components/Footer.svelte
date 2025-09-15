<script lang="ts">
  import { fly } from 'svelte/transition';

  const socials = [
    { label: 'github', url: 'https://github.com/ippsav' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/mehdi-boujid-261789203/' },
    { label: 'twitter', url: 'https://twitter.com/ippsav' },
    { label: 'threads', url: 'https://threads.net/ippsav' }
  ];
</script>

<footer id="contact" class="mt-8 scroll-offset-header">
  <div class="relative border border-white/15 p-4 bg-black/70 backdrop-blur">
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
    ></div>
    <div class="border-b border-white/15 pb-2 mb-4">
      <span class="text-white text-sm">接続 / CONNECTIONS</span>
    </div>

    <div class="flex flex-col space-y-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        {#each socials as { label, url }, i}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-200 transition-colors duration-200 font-mono text-[11px] border border-white/20 px-2 py-1 hover:bg-white hover:text-black focus-ring"
            in:fly={{ y: 10, duration: 240, delay: 90 * i }}
            aria-label={`Open ${label} profile in new tab`}
          >
            &gt; {label.toUpperCase()}
          </a>
        {/each}
      </div>

      <div class="border-t border-white/10 pt-3">
        <div class="text-gray-400 text-[11px] font-mono tracking-wide">
          © {new Date().getFullYear()} MEHDI_BOUJID | TERMINAL_MODE_ACTIVE
        </div>
      </div>
    </div>
  </div>
</footer>
