<script lang="ts">
  const skillGroups: { label: string; items: string }[] = [
    {
      label: 'Languages',
      items: 'Golang, Rust, Zig, TypeScript, JavaScript, Python, C++'
    },
    {
      label: 'Frontend',
      items: 'Svelte, React, Vue, Next.js, Node.js, WebGL'
    },
    {
      label: 'Infrastructure',
      items: 'AWS, GCP, Cloudflare, Docker, Nix, CI/CD, Serverless'
    },
    {
      label: 'Databases',
      items: 'PostgreSQL, Redis, MySQL, Elasticsearch, Supabase'
    },
    {
      label: 'AI / Search',
      items: 'LLM integration, agentic pipelines, RAG, vector search, NL query parsing'
    },
    {
      label: 'Tools',
      items: 'Keycloak, Testcontainers, WireMock, Delve, FFmpeg, ElevenLabs'
    }
  ];
</script>

<section class="scroll-offset-header space-y-16">
  <!-- Hero -->
  <div class="space-y-8">
    <div class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
      Mehdi Boujid · Casablanca, Morocco
    </div>

    <h1
      class="max-w-[34ch] text-[28px] font-medium leading-[1.15] tracking-tight text-fg sm:text-[36px]"
    >
      Senior software engineer building scalable backend systems and
      AI&#8209;powered products.
    </h1>

    <div class="flex items-center gap-2 font-mono text-[11px] text-fg-muted">
      <span class="relative flex h-1.5 w-1.5">
        <span
          class="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg-muted opacity-60"
        ></span>
        <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-fg"></span>
      </span>
      Available for new work
    </div>

    <div class="max-w-[60ch] space-y-4 text-fg-muted">
      <p>
        I build production systems in Golang and integrate LLMs into real
        products — natural-language search, agentic pipelines, and
        high-performance APIs.
      </p>
      <p>
        Five years of experience at remote-first companies across Europe and
        the US. I care about tight feedback loops, sharp abstractions, and
        code that stays readable a year later.
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] text-fg-muted">
      <a
        href="https://github.com/ippsav"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-fg-subtle underline-offset-4 hover:text-fg hover:decoration-fg transition-colors focus-ring"
      >
        GitHub →
      </a>
      <a
        href="https://www.linkedin.com/in/mehdi-boujid-261789203/"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-fg-subtle underline-offset-4 hover:text-fg hover:decoration-fg transition-colors focus-ring"
      >
        LinkedIn →
      </a>
      <a
        href="https://twitter.com/ippsav"
        target="_blank"
        rel="noopener noreferrer"
        class="underline decoration-fg-subtle underline-offset-4 hover:text-fg hover:decoration-fg transition-colors focus-ring"
      >
        Twitter →
      </a>
      <a
        href="mailto:mehdiboujid@gmail.com"
        class="underline decoration-fg-subtle underline-offset-4 hover:text-fg hover:decoration-fg transition-colors focus-ring"
      >
        Email →
      </a>
    </div>
  </div>

  <!-- Skills -->
  <div class="space-y-6">
    <div class="flex items-baseline justify-between border-b border-line pb-3">
      <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        Skills
      </h2>
    </div>

    <dl class="space-y-4">
      {#each skillGroups as group}
        <div class="grid grid-cols-1 gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
          <dt class="font-mono text-[11px] uppercase tracking-wider text-fg-subtle sm:pt-0.5">
            {group.label}
          </dt>
          <dd class="text-[14px] text-fg-muted">{group.items}</dd>
        </div>
      {/each}
    </dl>
  </div>
</section>
