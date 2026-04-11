<script lang="ts">
  import { fly } from 'svelte/transition';
  import NeuralNetwork from './NeuralNetwork.svelte';

  const skillGroups: { label: string; items: string[] }[] = [
    {
      label: 'LANGUAGES',
      items: ['Golang', 'Rust', 'Zig', 'TypeScript', 'JavaScript', 'Python', 'C++']
    },
    {
      label: 'FRONTEND',
      items: ['Svelte', 'React', 'Vue', 'Next.js', 'Node.js', 'WebGL']
    },
    {
      label: 'INFRASTRUCTURE',
      items: ['AWS', 'GCP', 'Cloudflare', 'Docker', 'Nix', 'CI/CD', 'Serverless']
    },
    {
      label: 'DATABASES',
      items: ['PostgreSQL', 'Redis', 'MySQL', 'Elasticsearch', 'Supabase']
    },
    {
      label: 'AI / SEARCH',
      items: ['LLM Integration', 'Agentic Pipelines', 'RAG', 'Vector Search', 'NL Query Parsing']
    },
    {
      label: 'TOOLS',
      items: ['Keycloak', 'Testcontainers', 'WireMock', 'Delve', 'FFmpeg', 'ElevenLabs']
    }
  ];
</script>

<div class="space-y-6">
  <!-- Name and Title -->
  <div in:fly={{ y: 20, duration: 500, delay: 200 }}>
    <div class="text-white text-lg mb-2">ユーザー / USER</div>
    <div class="pl-4">
      <div class="text-white font-bold">NAME: Mehdi Boujid</div>
      <div class="text-gray-300">ROLE: Senior Software Engineer</div>
      <div class="text-gray-300">LOCATION: Casablanca, Morocco</div>
      <div class="text-gray-300">STATUS: Active</div>
    </div>
  </div>

  <!-- Neural Network Visualization -->
  <div in:fly={{ y: 20, duration: 500, delay: 300 }} class="my-6">
    <NeuralNetwork />
    <div class="mt-3 border-t border-b border-white/15">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-[11px] text-gray-300 font-mono"
      >
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span class="h-[2px] w-3 bg-white/40 group-hover:bg-black"></span>
          <span class="tracking-wide">BACKEND SYSTEMS</span>
        </div>
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span class="h-[2px] w-3 bg-white/40 group-hover:bg-black"></span>
          <span class="tracking-wide">AI / LLM INTEGRATION</span>
        </div>
        <div
          class="px-3 py-2 flex items-center justify-center gap-2 group hover:text-black hover:bg-white transition-colors duration-200"
        >
          <span class="h-[2px] w-3 bg-white/40 group-hover:bg-black"></span>
          <span class="tracking-wide">DISTRIBUTED SYSTEMS</span>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div in:fly={{ y: 20, duration: 500, delay: 400 }}>
    <div class="text-white mb-2">プロフィール / PROFILE</div>
    <div class="pl-4 text-gray-300 text-sm leading-relaxed space-y-2">
      <p>
        &gt; Senior software engineer with 5 years of experience building scalable backend systems
        and AI-powered products.
      </p>
      <p>
        &gt; Specialized in Golang, distributed systems, and LLM integration — with production
        experience shipping natural-language search, agentic pipelines, and high-performance APIs.
      </p>
      <p>
        &gt; Working remote-first with companies across Europe and the US.
      </p>
    </div>
  </div>

  <!-- Skills Section -->
  <div in:fly={{ y: 20, duration: 500, delay: 500 }}>
    <div class="text-white mb-2">スキル / SKILLS</div>
    <div class="pl-4 space-y-3">
      {#each skillGroups as group}
        <div class="space-y-1">
          <div class="text-gray-400 text-[10px] font-mono tracking-wider">
            &gt; {group.label}
          </div>
          <ul class="flex flex-wrap gap-1.5" role="list" aria-label={`${group.label} skills`}>
            {#each group.items as item}
              <li>
                <span
                  class="inline-flex items-center text-[10px] leading-none px-1.5 py-1 border border-white/15 text-gray-300 font-mono hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
                  >{item}</span
                >
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>
