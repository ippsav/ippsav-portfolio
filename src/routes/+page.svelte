<script>
  import IntroductionHeader from "$lib/components/IntroductionHeader.svelte"
  import Timeline from "$lib/components/Timeline.svelte";
  import timelineData from "$lib/data/timeline";
</script>


<div>
  <IntroductionHeader />
  <Timeline timelineData={timelineData}/>
</div>
