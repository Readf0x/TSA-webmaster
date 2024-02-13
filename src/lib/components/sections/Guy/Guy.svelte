<script lang="ts">
  import guy from "./guy.svg?raw"
  import factory from "./factory.svg?raw"
</script>

<div class="wrapper">
  <h1>
    Switching doesn’t just help save your wallet<br />
    <i class="c2">It helps save the planet too.</i>
  </h1>
  <div class="art">
    <div class="factory">{@html factory}</div>
    <div class="guy">{@html guy}</div>
  </div>
</div>

<style lang="scss">
  .wrapper {
    margin-top: 150px;
    margin-bottom: 50vw;
    h1 {
      text-align: center;
    }
    .art {
      position: absolute;
      justify-content: space-between;
      left: 0;
      right: 0;
      display: flex;
      align-items: end;
      .guy {
        right: 0;
        width: 50vw;
        max-width: 350px;
        opacity: 0;
        animation: fade-in 0.5s linear 1s 1 forwards;
      }
      .factory {
        margin-left: 5%;
        margin-bottom: 10vw;
        width: 75vw;
        max-width: 800px;
        opacity: 0;
        animation: fade-in 0.5s linear 1s 1 forwards;
        @media (max-aspect-ratio: 3/4) {
          margin-bottom: calc(10vw + 5vw);
        }
      }
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
