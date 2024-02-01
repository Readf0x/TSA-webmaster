<script lang="ts">
  import panel from "$lib/svg/panel-single.svg?raw"
  import { onMount } from "svelte"

  let svg: any
  onMount(() => {
    //@ts-ignore
    svg = new Walkway({
      selector: "#panelSingle",
      duration: 5000,
      easing: "easeOut",
    })
    let svgChildren: NodeListOf<SVGPathElement> = document.querySelectorAll("#panelSingle [id]")
    let svgFillArray: string[] = new Array()
    for(const el of svgChildren) {
      const fill: string = el.attributes["fill"]
      console.log(fill)
    }
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

{@html panel}

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
