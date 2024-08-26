<script>
  import IntroductionHeader from "$lib/components/IntroductionHeader.svelte";
  import Timeline from "$lib/components/Timeline.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import timelineData from "$lib/data/timeline";
</script>

<IntroductionHeader />
<Timeline {timelineData} />
<Projects />