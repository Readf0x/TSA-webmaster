<script lang="ts">
  var showcaseElems: any[] = Array.from({length: 9}, (_, i) => (i + 1) * 100)

  setInterval(() => {
    showcaseElems.push(900 - showcaseElems.shift())
    showcaseElems = showcaseElems
  }, 100)
</script>

<h1>TSA Project</h1>
<h2>Webmaster category</h2>
<p>We <b>will</b> win!</p>

<p>Need proof? look at this <i>sweet</i> animation:</p>

<div class="variable-showcase">
  {#each showcaseElems as i}
  <p class="variable-showcase-item" style="font-weight: {i}">How cool is this?!</p>
  {/each}
</div>

<style lang="scss">
  .variable-showcase {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    &-item {
      margin: 0;
      transition: font-weight 0.5s;
      color: var(--primary);
    }
  }
  h1, b {
    color: var(--accent);
  }
</style>
