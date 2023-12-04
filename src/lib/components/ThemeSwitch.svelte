<script lang="ts">
  import { theme as themeStore } from "$lib/stores";

  let theme: boolean
  $: theme = $themeStore == "light"
</script>

<label class="themeSwitch">
  <input
    type="checkbox"
    class="themeSwitch-checkbox"
    bind:checked={theme}
    on:click={() => {
      if ($themeStore == "light") {
        $themeStore = "dark"
        document.body.classList.remove("light")
      } else {
        $themeStore = "light"
        document.body.classList.remove("dark")
      }
      document.body.classList.add($themeStore)
    }}
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
