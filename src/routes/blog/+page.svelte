<script lang="ts">
  import type { BlogPostMeta } from '$lib/types/shared';

  interface Props {
    data: { posts: BlogPostMeta[] };
  }

  let { data }: Props = $props();

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d
      .toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
      .toUpperCase();
  }
</script>

<svelte:head>
  <title>Writing · Mehdi Boujid</title>
  <meta name="description" content="Essays and notes on backend systems, AI, and the craft." />
</svelte:head>

<div class="fade-in space-y-16">
  <header class="space-y-6">
    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
      Chronicle // Writing
    </div>
    <h1
      class="max-w-[22ch] font-serif text-[44px] font-medium leading-[1.02] tracking-tight text-fg sm:text-[56px]"
    >
      Notes from the edge of the work.
    </h1>
    <p class="max-w-[56ch] text-fg-muted">
      Essays on the systems I build — backend architecture, AI pipelines, the
      occasional detour into why a thing I thought would take a day took three
      weeks.
    </p>
  </header>

  <section class="space-y-10">
    <div class="flex items-baseline justify-between border-b border-line pb-3">
      <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        Archive
      </h2>
      <span class="font-mono text-[11px] text-fg-subtle">
        {data.posts.length}
        {data.posts.length === 1 ? 'entry' : 'entries'}
      </span>
    </div>

    {#if data.posts.length === 0}
      <p class="font-mono text-[12px] text-fg-subtle">No entries yet.</p>
    {:else}
      <ol class="divide-y divide-line" aria-label="Articles">
        {#each data.posts as post (post.slug)}
          <li class="py-8">
            <a
              href={`/blog/${post.slug}`}
              class="group grid grid-cols-1 gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8 focus-ring"
            >
              <div
                class="font-mono text-[11px] uppercase tracking-wider text-fg-subtle sm:pt-2"
              >
                {formatDate(post.date)}
              </div>

              <div class="space-y-2">
                <h3
                  class="font-serif text-[22px] font-medium leading-[1.15] tracking-tight text-fg transition-colors group-hover:text-fg-muted sm:text-[26px]"
                >
                  {post.title}
                </h3>

                <p class="max-w-[60ch] text-[13.5px] leading-relaxed text-fg-muted">
                  {post.description}
                </p>

                <div
                  class="flex items-center gap-3 pt-1 font-mono text-[11px] text-fg-subtle"
                >
                  {#if post.tag}
                    <span class="uppercase tracking-wider">[{post.tag}]</span>
                  {/if}
                  {#if post.readingTime}
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  {/if}
                </div>
              </div>
            </a>
          </li>
        {/each}
      </ol>
    {/if}
  </section>
</div>
