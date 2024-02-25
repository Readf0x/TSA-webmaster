<script lang="ts">
  import { page } from "$app/stores"
  import L from "./MaterialGirl.svelte"

  type リンク = {
    位地: string
    名前: string
  }
  const リンク達: リンク[] = [
    { 位地: "/", 名前: "Home" },
    { 位地: "/solar", 名前: "Solar" },
    { 位地: "/wind", 名前: "Wind" },
    { 位地: "/thermal", 名前: "Thermal" },
    { 位地: "/hydro", 名前: "Hydro" },
    { 位地: "/sources", 名前: "Sources" },
  ]

  let mobileCollapseEl: HTMLUListElement
  let mobileMenuButtonEl: HTMLButtonElement
</script>

<svelte:document
  on:click={(ev) => {
    let t = ev.target
    while (t) {
      if (t == mobileCollapseEl || t == mobileMenuButtonEl) return
      //@ts-ignore
      t = t.parentNode
    }
    mobileCollapseEl.setAttribute("data-disabled", "")
  }}
/>

<nav data-platform="desktop">
  {#each リンク達 as リンク}
    <L><a href={リンク.位地}>{リンク.名前}</a></L>
  {/each}
</nav>

<nav data-platform="mobile">
  <button
    class="menu"
    bind:this={mobileMenuButtonEl}
    on:click={() => mobileCollapseEl.toggleAttribute("data-disabled")}
  >
    <span class="menu-icon">
      <span class="line" />
      <span class="line" />
      <span class="line" />
    </span>
  </button>
  <ul bind:this={mobileCollapseEl} data-disabled>
    {#each リンク達 as リンク}
      <a href={リンク.位地}>{リンク.名前}</a>
    {/each}
  </ul>
</nav>

<!-- TODO: add material design 2 style active borders -->

<style lang="scss">
  $hover: #ffffff07;

  nav {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--background);
    &[data-platform="desktop"] {
      @media (max-aspect-ratio: 3/4) {
        display: none;
      }
    }
    &[data-platform="mobile"] {
      a {
        width: 100%;
      }
      flex-direction: column;
      align-items: end;
      @media (min-aspect-ratio: 3/4) {
        display: none;
      }
    }
    /* *** DEV OUTLINE *** */
    // outline: 1px dashed #75f9;
    a {
      font-style: var(--disp);
      color: var(--text);
      text-decoration: none;
      position: relative;
      padding: 0.25em 0.5em;
      display: block;
      transition: background-color 0.4s;
      /* *** DEV OUTLINE *** */
      // outline: 1px dashed #f339;
      &:hover {
        background-color: $hover;
      }
      &:active {
        background-color: transparent;
      }
    }
    ul {
      background-color: var(--background);
      position: absolute;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
      a {
        &:hover {
          background-color: unset;
        }
        &:active {
          background-color: $hover;
        }
        transition: background-color 0.2s;
      }
      overflow: hidden;
      clip-path: rect(auto auto auto auto);
      transition: clip-path 1s;
      &[data-disabled] {
        clip-path: rect(auto auto 0 auto);
      }
    }
    button.menu {
      z-index: 1000000;
      background: none;
      border: none;
      outline: none;
      margin: 0;
      padding: 4vw;
      width: 16vw;
      height: 14vw;
      transition: background-color 0.2s;
      &:active {
        background-color: $hover;
      }
      span.menu-icon {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
        justify-content: space-between;
        span.line {
          margin: 0;
          padding: 0;
          display: block;
          height: 0.5vw;
          width: 100%;
          background-color: var(--text);
        }
      }
    }
  }
</style>
