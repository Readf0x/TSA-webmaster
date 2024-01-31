<script lang="ts">
  import "$lib/fonts/fonts.css";
  import "./global.scss";
</script>

<div id="contents">
  <slot />
</div>

<style lang="scss">
  #contents {
    max-width: 1200px;
    margin: auto;
    // outline: #ff000099 dashed 1px;
  }
</style>
