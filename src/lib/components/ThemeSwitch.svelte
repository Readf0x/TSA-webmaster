<script lang="ts">
  import { onMount } from "svelte";

  let theme: boolean = true;

  function themeChangeHandler() {
    theme = !theme
    const x = theme ? "light" : "dark"
    document.body.id = x
    localStorage.setItem("theme", x)
  }

  onMount(() => {
    if(
      ("theme" in localStorage &&
      localStorage.theme === "dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      themeChangeHandler()
  })
</script>

<label class="themeSwitch" for="ThemeSwitch">
  <input
    type="checkbox"
    class="themeSwitch-checkbox"
    id="ThemeSwitch"
    bind:checked={theme}
    on:click={() => themeChangeHandler()}
  >
  <span class="themeSwitch-slider" />
</label>

<style lang="scss">
  .themeSwitch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    &-checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }
    &-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #333;
      border-radius: 34px;
      .themeSwitch-checkbox:checked + & {
        background-color: #ccc;
      }
      &::before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: transform 0.4s;
        border-radius: 50%;
        .themeSwitch-checkbox:checked + & {
          transform: translateX(26px);
        }
      }
    }
  }
</style>
