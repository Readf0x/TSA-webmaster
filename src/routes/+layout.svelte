<script lang="ts">
  import "$lib/fonts/fonts.css"
  import "./global.scss"
  import walkway from "walkway.js/walkway.min?raw"
</script>

<svelte:head>
  {@html `<script>${walkway}</script>`}
</svelte:head>

<div id="contents">
  <slot />
</div>

<style lang="scss">
  #contents {
    max-width: 1200px;
    margin: auto;
    margin-top: 50px;
    // outline: #ff000099 dashed 1px;
  }
</style>
