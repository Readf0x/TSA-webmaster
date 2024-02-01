<script lang="ts">
  import wojak from "$lib/svg/testing.svg?raw"
  import { onMount } from "svelte"

  export let id: string = "ohwell"

  let svg: any
  onMount(() => {
    //@ts-ignore
    svg = new Walkway({
      selector: `#${id}`,
      duration: 2500,
      easing: "easeOut",
    })
    let svgFillArray: string[] = new Array()
    let svgChildren: NodeListOf<SVGPathElement> = document.querySelectorAll(`#${id} [id]`)
    svgChildren.forEach((el) => {
      const attr = el.attributes.getNamedItem("fill")
      if (attr != null) svgFillArray.push(attr.value)
      el.style.fill = "transparent"
    })
    setTimeout(() => svg.redraw(), 600)
    setTimeout(() => {
      for (let i = 0; i < svgChildren.length; i++) {
        svgChildren[i].style.fill = svgFillArray[i]
      }
    }, 3500)
  })
</script>

<slot>
  {@html wojak}
</slot>
