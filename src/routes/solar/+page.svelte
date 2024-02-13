<script>
  import MultiPanel from "$lib/components/sections/MultiPanel/MultiPanel.svelte"
  import SinglePanel from "$lib/components/sections/SinglePanel/SinglePanel.svelte"
  import Saos from "saos"
</script>

<div id="page">
  <Saos once={true}><SinglePanel /></Saos>
  <Saos once={true}><MultiPanel /></Saos>
</div>
