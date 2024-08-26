<script lang="ts">
  import IntroductionHeader from "$lib/components/IntroductionHeader.svelte";
  import Timeline from "$lib/components/Timeline.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import TabSection from "$lib/components/TabSection.svelte";

  const tabs = [
    { title: "career.log", content: Timeline },
    { title: "projects.txt", content: Projects }
  ];
</script>

<IntroductionHeader />

<TabSection {tabs} />