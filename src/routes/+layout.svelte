<script lang="ts">
  // import ThemeSwitch from "$lib/components/ThemeSwitch.svelte"
  // import "@fontsource-variable/inter/index.css"
  import "$lib/fonts/fonts.css"
  import "./global.scss"
</script>

<div class="pad">
  <slot />
</div>

<style>
  .pad {
    margin: 10px;
  }
</style>
