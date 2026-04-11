<script lang="ts">
  import IntroductionHeader from '$lib/components/IntroductionHeader.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import Projects from '$lib/components/Projects.svelte';
</script>

<div id="top" class="fade-in space-y-24">
  <IntroductionHeader />

  <section id="work" class="scroll-offset-header space-y-10">
    <div class="flex items-baseline justify-between border-b border-line pb-3">
      <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        Experience
      </h2>
      <span class="font-mono text-[11px] text-fg-subtle">7 roles · 2020 → 2026</span>
    </div>
    <Timeline />
  </section>

  <section id="projects" class="scroll-offset-header space-y-10">
    <div class="flex items-baseline justify-between border-b border-line pb-3">
      <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
        Projects & Open Source
      </h2>
      <span class="font-mono text-[11px] text-fg-subtle">4 entries</span>
    </div>
    <Projects />
  </section>
</div>
