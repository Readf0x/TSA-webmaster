<script lang="ts">
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte"
  import "@fontsource-variable/inter/index.css"
  import "./global.scss"
</script>

<!-- <svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
</svelte:head> -->

<ThemeSwitch />

<slot />
