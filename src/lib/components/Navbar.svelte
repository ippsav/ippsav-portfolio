<script lang="ts">
  import { page } from '$app/stores';

  const homeNav = [
    { label: 'Work', href: '/#work' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Writing', href: '/blog' },
    { label: 'Contact', href: '/#contact' }
  ];

  let isBlog = $derived($page.url.pathname.startsWith('/blog'));
</script>

<header class="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
  <div
    class="mx-auto flex w-full max-w-content items-center justify-between px-6 py-5 sm:px-8"
  >
    <a
      href="/"
      class="text-[13px] font-medium tracking-tight text-fg hover:text-fg-muted transition-colors focus-ring"
    >
      Mehdi Boujid
    </a>

    <nav class="flex items-center gap-6 text-[13px] text-fg-muted">
      {#each homeNav as item}
        <a
          href={item.href}
          class="hover:text-fg transition-colors focus-ring {isBlog && item.href === '/blog' ? 'text-fg' : ''}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
</header>
