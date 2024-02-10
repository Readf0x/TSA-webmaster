<script lang="ts">
  import Walkway from "../../Walkway.svelte"
  import panelArt from "./panel-single.svg?raw"
</script>

<div class="wrapper">
  <div class="text">
    <h1>
      A single solar panel can generate <span class="c2">30¢</span>
      <span class="si">every day.</span>
    </h1>
    <h1>That’s <span class="si">more than</span> <span class="c2">$100</span> annually.</h1>
  </div>
  <!-- <Saos animation="single-panel-from-left 1.75s cubic-bezier(0.35, 0.5, 0.65, 0.95)" once={true}> -->
  <div class="panel">
    <div class="panel-content">
      <Walkway id="panelSingle">{@html panelArt}</Walkway>
      <!-- <Saos
        animation="single-panel-from-right 1.75s cubic-bezier(0.35, 0.5, 0.65, 0.95)"
        once={true}
      > -->
    </div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    margin-top: 20px;
    margin-bottom: 180px;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    .text {
      // white-space: nowrap;
      // width: fit-content;
      display: flex;
      flex-direction: column;
      gap: 35px;
      animation: from-left 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) 0.75s 1 forwards;
      translate: 110vw;
      @media (min-width: 1200px) and (min-aspect-ratio: 3/4) {
        :last-child {
          max-width: 75%;
        }
      }
      @media (max-width: 1200px) {
        font-size: 2vw;
      }
      @media (max-width: 800px) {
        text-align: center;
        font-size: unset;
        gap: unset;
      }
    }
    .panel {
      width: 100%;
      &-content {
        width: 145%;
        transform: translate(-15%, 17.5%);
        animation: from-right 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) 0.75s 1 forwards;
        translate: -110vw;
        @media (max-width: 800px) {
          width: 120%;
          transform: translate(-7%, 17.5%);
        }
      }
    }
  }

  @keyframes from-right {
    0% {
      translate: 110vw;
      opacity: 1;
    }
    // 14.29% {
    100% {
      translate: 0;
      opacity: 1;
    }
  }
  @keyframes from-left {
    0% {
      translate: -110vw;
      opacity: 1;
    }
    // 25% {
    100% {
      translate: 0;
      opacity: 1;
    }
  }
</style>
