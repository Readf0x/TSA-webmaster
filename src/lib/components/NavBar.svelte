<script lang="ts">
  import { page } from "$app/stores"
  // import MaterialGirl from "./MaterialGirl.svelte"
</script>

<nav platform="desktop">
  <a href="/">Home</a>
  <a href="/sources">Sources</a>
</nav>
<!-- <MaterialGirl /> -->

<!-- TODO: add material design 2 style active borders -->

<style lang="scss">
  @media (max-aspect-ratio: 3/4) {
    nav[platform=desktop] {
      display: none;
    }
  }

  nav {
    display: flex;
    /* *** DEV OUTLINE *** */
    // outline: 1px dashed #75f9;
    a {
      font-style: "DM Serif Display";
      color: var(--text);
      text-decoration: none;
      padding: 0.25em 0.5em;
      position: relative;
      /* *** DEV OUTLINE *** */
      // outline: 1px dashed #f339;
      &:hover {
        background-color: #ffffff07
      }
    }
  }
</style>
