<script lang="ts">
  import IntroductionHeader from '$lib/components/IntroductionHeader.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import TabSection from '$lib/components/TabSection.svelte';

  const tabs = [
    { title: 'Experience', content: Timeline },
    { title: 'Projects', content: Projects }
  ];
</script>

<div class="terminal-scanlines min-h-screen">
  <div class="grid gap-6">
    <!-- Terminal Header -->
    <section id="about" class="terminal-border p-4 bg-black scroll-offset-header">
      <div class="border-b border-white pb-2 mb-4">
        <span class="text-gray-300 font-mono terminal-glow"
          >mehdi@portfolio:~$ <span class="terminal-cursor"></span></span
        >
      </div>
      <IntroductionHeader />
    </section>

    <!-- Main Terminal Window -->
    <section id="work" class="terminal-border p-4 bg-black scroll-offset-header">
      <div class="border-b border-white pb-2 mb-4">
        <span class="text-gray-300 font-mono terminal-glow">システム / SYSTEM</span>
      </div>
      <TabSection {tabs} />
    </section>
  </div>
</div>
