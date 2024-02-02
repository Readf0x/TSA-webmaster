<script lang="ts">
  import panel from "$lib/svg/panel-multi.svg?raw"
  import { onMount } from "svelte"

  let length: number = 5
  let spacer: number

  function calcLength(): void {
    length = Math.round(document.documentElement.clientWidth / ( 713.19 - 50 )) + 2
  }

  onMount(() => { calcLength() })
</script>

<svelte:window on:resize={ () => calcLength() }/>

<h1>The average 15 panel array can generate up to <span class="c2">30kWh</span></h1>
<h1 class="beeg c2">Every day.</h1>

<div class="panels" bind:clientHeight={spacer}>
  <div class="panels-contents">
    {#each {length: length} as _}
    <div class="panel">{@html panel}</div>
    {/each}
  </div>
</div>
<div class="spacer" style:height="{spacer || 301.95}px" />

<!-- It's a bottom, just like me! -->
<h1 class="bottom">That’s enough to power your home <span class="c1 si">for free.</span></h1>
<p class="f1 asterisk">* depending on your power usage</p>

<style lang="scss">
  h1, p { text-align: center; }
  h1 {
    &.beeg {
      font-size: 4em;
      margin: -0.4em 0 0.25em;
    }
    &.bottom {
      margin-top: 0.75em;
    }
  }
  p {
    &.asterisk {
      margin-top: -0.25em;
      font-size: 0.75em;
    }
  }

  .panels {
    position: absolute;
    left: 50%;
    translate: -50%;
    background: var(--secondary);
    padding: 50px 0;
    border: solid var(--text);
    border-width: 3px 0;
    &-contents {
      display: flex;
      animation: slide 3s infinite linear;
      .panel {
        min-width: 713.19px;
        &:nth-child(n+2) { margin-left: -50px; }
      }
    }
  }

  @keyframes slide {
    0% {
      translate: 331.595px;
    }
    100% {
      translate: -331.595px;
    }
  }
</style>
