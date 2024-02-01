<script lang="ts">
  import panel from "$lib/svg/panel-single.svg?raw"
  import Saos from "saos"
  import { onMount } from "svelte"

  let svg: any
  onMount(() => {
    let svgEl = document.getElementById("#panelSingle")
    //@ts-ignore
    svg = new Walkway({
      selector: "#panelSingle",
      duration: 5000,
      easing: "easeOut",
    })
  })
  function handleObserver(x: CustomEvent<any>): void {
    if(x.detail.observing) svg?.redraw()
  }
</script>

<div class="spacer">
  {#each {length: 10} as _, i}
    <p>I'm padding!</p>
  {/each}
</div>

<!-- <button on:click={() => handleObserver()}>aaa</button> -->

<Saos animation={"from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"} on:update={handleObserver}>
  {@html panel}
</Saos>

<div class="spacer">
  {#each {length: 20} as _, i}
    <p>Me too!</p>
  {/each}
</div>

<style>
  @keyframes -global-from-right {
    0% {
      transform: translateX(100vw);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
