<script lang="ts">
  import { theme as themeStore } from "$lib/stores";

  let theme: boolean
  $: theme = $themeStore == "light"
</script>

<input type="checkbox" bind:checked={theme} on:click={ev => {
  ev.preventDefault()
  $themeStore == "light" ?
    $themeStore = "dark" :
    $themeStore = "light"
}}>
