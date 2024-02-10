<script>
  import Banner from "$lib/components/sections/Banner/Banner.svelte"
  import SinglePanel from "$lib/components/sections/SinglePanel/SinglePanel.svelte"
  import MultiPanel from "$lib/components/sections/MultiPanel/MultiPanel.svelte"
  import Guy from "$lib/components/sections/Guy/Guy.svelte"
  import Saos from "saos"
</script>

<Saos once={true}><Banner /></Saos>
<Saos once={true}><SinglePanel /></Saos>
<MultiPanel />
<Saos once={true}><Guy /></Saos>
