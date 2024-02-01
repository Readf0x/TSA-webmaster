<script lang="ts">
  import Walkway from "./Walkway.svelte";
  import panelArt from "$lib/svg/panel-single.svg?raw"
  import Saos from "saos"
</script>

<div class="wrapper">
  <Saos animation="single-panel-from-left cubic-bezier(0.35, 0.5, 0.65, 0.95) 2s ">
    <div class="text">
      <h1>A single solar panel can<br>generate <span class="c2">30¢</span> <span class="si">every day.</span></h1>
      <h1>That’s <span class="si">more than</span><br><span class="c2">$100</span> annually.</h1>
    </div>
  </Saos>
  <div class="panel">
    <div class="panel-content">
      <Saos animation="single-panel-from-right 2s cubic-bezier(0.35, 0.5, 0.65, 0.95) both">
        <Walkway id="panelSingle">{@html panelArt}</Walkway>
      </Saos>
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    margin-top: 20px;
    .text {
      white-space: nowrap;
      width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
    .panel {
      width: 100%;
      &-content {
        width: 145%;
        transform: translate(-15%, 17.5%);
      }
    }
    margin-bottom: 100vh;
  }

  @keyframes -global-single-panel-from-right {
    0% {
      transform: translateX(100vw);
      opacity: 1;
    }
    25% {
      transform: translateX(100vw);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes -global-single-panel-from-left {
    0% {
      transform: translateX(-100vw);
      opacity: 1;
    }
    25% {
      transform: translateX(-100vw);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
