<script lang="ts">
  import type { Component } from 'svelte';
  import type { BlogPostMeta } from '$lib/types/shared';

  interface Props {
    data: {
      post: { component: Component; meta: BlogPostMeta };
    };
  }

  let { data }: Props = $props();

  let Article = $derived(data.post.component as Component);
  let meta = $derived(data.post.meta);

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d
      .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      .toUpperCase();
  }
</script>

<svelte:head>
  <title>{meta.title} · Mehdi Boujid</title>
  <meta name="description" content={meta.description} />
</svelte:head>

<article class="fade-in space-y-12">
  <div
    class="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle"
  >
    <a href="/blog" class="hover:text-fg transition-colors">Chronicle</a>
    <span>//</span>
    {#if meta.tag}
      <span>[{meta.tag}]</span>
    {/if}
    <span class="truncate text-fg-muted">{meta.title}</span>
  </div>

  {#if meta.hero}
    <figure class="-mx-6 sm:-mx-8">
      <img
        src={meta.hero}
        alt={meta.heroAlt ?? ''}
        class="block h-[240px] w-full object-cover sm:h-[340px]"
      />
    </figure>
  {/if}

  <header class="space-y-6">
    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
      {formatDate(meta.date)}
    </div>
    <h1
      class="max-w-[22ch] font-serif text-[44px] font-medium leading-[1.02] tracking-tight text-fg sm:text-[60px]"
    >
      {meta.title}
    </h1>
    <div class="flex items-center gap-4 font-mono text-[11px] text-fg-subtle">
      {#if meta.readingTime}
        <span>{meta.readingTime}</span>
      {/if}
      <span class="text-fg-muted">Mehdi Boujid</span>
    </div>
  </header>

  <div class="prose">
    <Article />
  </div>

  <footer class="border-t border-line pt-8">
    <a
      href="/blog"
      class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted hover:text-fg transition-colors focus-ring"
    >
      ← Back to archive
    </a>
  </footer>
</article>
