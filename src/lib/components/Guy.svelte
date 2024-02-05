<script lang="ts">
  import guy from "$lib/svg/guy.svg?raw"
  import factory from "$lib/svg/factory.svg?raw"
</script>

<div class="wrapper">
  <h1>
    Switching doesn’t just help save your wallet<br>
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
    margin-bottom: 725px;
    h1 {
      text-align: center;
    }
    .art {
      position: absolute;
      justify-content: space-between;
      left: 0;
      right: 0;
      display: flex;
      .guy {
        right: 0;
      }
      .factory {
        margin-left: 5%;
        margin-top: 5%;
      }
    }
  }
</style>
