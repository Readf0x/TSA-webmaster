<script lang="ts">
  import windmill from "$lib/svg/windmill.svg?raw"
  import walkway from "walkway.js/walkway.min?raw"
  import { onMount } from "svelte";

  onMount(async () => {
    // @ts-ignore
    var svg = new Walkway({
      selector: "#windmill",
      duration: 5000,
      easing: "easeInQuart"
    })
    svg.draw();
  })
</script>

<svelte:head>
  {@html "<script>"+ walkway +"</script>"}
</svelte:head>

<div class="windmill">{@html windmill}</div>

<style lang="scss">
  .windmill {
    width: 1000px;
    max-width: 90vw;
  }
</style>
