<script>
  import Guy from "$lib/components/sections/Guy/Guy.svelte"
  import Banner from "$lib/components/sections/Banner/Banner.svelte"
  import Saos from "saos"
</script>

<div id="page">
  <Saos once={true}><Banner /></Saos>
  <Saos once={true}><Guy /></Saos>
</div>