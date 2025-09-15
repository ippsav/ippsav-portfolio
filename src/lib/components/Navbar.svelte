<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount, tick } from 'svelte';

  let menuOpen = false;
  let rootEl: HTMLElement;

  const nav = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ];

  function setHeaderHeightVar() {
    if (!rootEl) return;
    const h = Math.ceil(rootEl.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--header-h', `${h}px`);
  }

  function closeMenu() {
    menuOpen = false;
  }

  onMount(() => {
    setHeaderHeightVar();
    const ro = new ResizeObserver(() => setHeaderHeightVar());
    ro.observe(rootEl);
    const onResize = () => setHeaderHeightVar();
    window.addEventListener('resize', onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', onResize);
    };
  });

  $: (async () => {
    // Recompute after menu toggle to keep var accurate on mobile
    await tick();
    setHeaderHeightVar();
  })();
</script>

<header class="sticky top-0 z-50 mb-8" bind:this={rootEl}>
  <!-- Shell -->
  <div
    class="relative border border-white/15 bg-black/70 backdrop-blur px-3 sm:px-4 py-2 select-none"
  >
    <!-- Accent line -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
    />

    <div class="flex items-center justify-between gap-3">
      <!-- Brand -->
      <a href="/" class="flex items-center gap-2 group shrink-0">
        <div
          class="h-7 w-7 grid place-items-center border border-white/25 text-[10px] text-gray-200 group-hover:bg-white group-hover:text-black transition-colors duration-200"
        >
          MB
        </div>
        <div class="hidden sm:block leading-tight">
          <div class="text-white text-sm tracking-wide group-hover:text-gray-200">Mehdi Boujid</div>
          <div class="text-gray-400 text-[10px]">Software Engineer</div>
        </div>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1 font-mono">
        {#each nav as item}
          <a
            href={item.href}
            class="px-3 py-1 text-[11px] tracking-wide text-gray-300 border border-white/15 hover:bg-white hover:text-black transition-colors duration-200 focus-ring"
          >
            {item.label.toUpperCase()}
          </a>
        {/each}
      </nav>

      <!-- Right controls -->
      <div class="flex items-center gap-2">
        <a
          href="#contact"
          class="hidden sm:inline-flex items-center gap-2 px-3 py-1 text-[11px] tracking-wide border border-white hover:bg-white hover:text-black transition-colors duration-200 focus-ring"
        >
          > GET IN TOUCH
        </a>
        <button
          class="md:hidden inline-flex items-center gap-2 px-2 py-1 border border-white/20 text-gray-300 hover:bg-white hover:text-black transition-colors duration-200 focus-ring"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          on:click={() => (menuOpen = !menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-[11px]">MENU</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div
      in:fade={{ duration: 120 }}
      out:fade={{ duration: 100 }}
      id="mobile-nav"
      class="md:hidden border border-t-0 border-white/15 bg-black/95 backdrop-blur px-3 py-2"
    >
      <div class="flex flex-col gap-2 font-mono">
        {#each nav as item}
          <a
            href={item.href}
            class="px-3 py-2 text-sm text-gray-200 border border-white/15 hover:bg-white hover:text-black transition-colors duration-200 focus-ring"
            on:click={closeMenu}
          >
            {item.label}
          </a>
        {/each}
        <a
          href="#contact"
          class="px-3 py-2 text-sm text-gray-200 border border-white hover:bg-white hover:text-black transition-colors duration-200 focus-ring"
          on:click={closeMenu}
        >
          Get in touch
        </a>
      </div>
    </div>
  {/if}
</header>
