<script lang="ts">
  import { page } from "$app/stores"
  import L from "./MaterialGirl.svelte"
</script>

<nav data-platform="desktop">
  <L><a href="/">Home</a></L>
  <L><a href="/solar">Solar</a></L>
  <L><a href="/wind">Wind</a></L>
  <L><a href="/thermal">Thermal</a></L>
  <L><a href="/hydro">Hydro</a></L>
  <L><a href="/sources">Sources</a></L>
</nav>

<!-- TODO: add material design 2 style active borders -->

<style lang="scss">
  @media (max-aspect-ratio: 3/4) {
    nav[data-platform=desktop] {
      display: none;
    }
  }

  nav {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: #021205;
    /* *** DEV OUTLINE *** */
    // outline: 1px dashed #75f9;
    a {
      font-style: var(--disp);
      color: var(--text);
      text-decoration: none;
      position: relative;
      /* *** DEV OUTLINE *** */
      // outline: 1px dashed #f339;
      &:hover {
        background-color: #ffffff07
      }
    }
  }
</style>
