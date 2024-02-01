<script>
  import Banner from "$lib/components/Banner.svelte"
  import SinglePanel from "$lib/components/SinglePanel.svelte"
  import MultiPanel from "$lib/components/MultiPanel.svelte";
  import Saos from "saos"
</script>

<Saos once={true}><Banner /></Saos>
<SinglePanel />
<MultiPanel />
