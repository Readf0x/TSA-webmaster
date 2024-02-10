<script>
  import Banner from "$lib/components/Banner.svelte"
  import SinglePanel from "$lib/components/SinglePanel.svelte"
  import MultiPanel from "$lib/components/MultiPanel.svelte"
  import Guy from "$lib/components/Guy.svelte"
  import Saos from "saos"
</script>

<Saos once={true}><Banner /></Saos>
<Saos once={true}><SinglePanel /></Saos>
<MultiPanel />
<Saos once={true}><Guy /></Saos>
