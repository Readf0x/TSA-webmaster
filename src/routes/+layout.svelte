<script lang="ts">
  import "$lib/fonts/fonts.css"
  import "./global.scss"
  import walkway from "walkway.js/walkway.min?raw"
  import NavBar from "$lib/components/NavBar.svelte"
</script>

<svelte:head>
  {@html `<script>${walkway}</script>`}
</svelte:head>

<NavBar />
<div id="contents">
  <slot />
</div>

<style lang="scss">
  #contents {
    max-width: 1200px;
    padding: 0 20px;
    margin: auto;
    // overflow-x: hidden;
  }
</style>
