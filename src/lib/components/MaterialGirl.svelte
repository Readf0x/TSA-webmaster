<script lang="ts">
  //@ts-nocheck
  // import { onMount } from "svelte"

  function createRippleOld(event) {
    const button = event.currentTarget

    const circle = document.createElement("span")
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    console.log(event.clientX - button.offsetLeft)
    console.log(event.clientY - button.offsetTop)

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.classList.add("ripple")

    const ripple = button.getElementsByClassName("ripple")[0]

    // if (ripple) {
    //   ripple.remove();
    // }

    button.appendChild(circle)
  }

  type Ripple = {
    diameter: number
    pos: [number, number]
    id: number
  }
  let ripples: Ripple[] = new Array()
  let id = 0
  function createRipple(ev: MouseEvent): void {
    const button: HTMLButtonElement = ev.currentTarget
    ripples.push({
      diameter: Math.max(button.clientWidth, button.clientHeight),
      pos: [ev.clientX - button.offsetLeft, ev.clientY - button.offsetTop],
      id,
    })
    id += 1
    ripples = ripples
    setTimeout(() => {
      ripples.shift()
      ripples = ripples
    }, 1000)
  }

  // onMount(() => {
  //   const buttons = document.getElementsByTagName("button");
  //   for (const button of buttons) {
  //     button.addEventListener("click", createRipple);
  //   }
  // })
</script>

<button on:click={createRipple}>
  <slot>Material girl in a material world</slot>
  {#each ripples as { diameter, pos, id }, _ (id)}
    <span
      class="ripple"
      style:height="{diameter}px"
      style:width="{diameter}px"
      style:left="{pos[0] - diameter / 2}px"
      style:top="{pos[1] - diameter / 2}px"
    />
  {/each}
</button>

<style>
  button {
    position: relative;
    overflow: visible;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: none;
    font: inherit;
    padding: 0.25em 0.5em;
  }

  :global(span.ripple) {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background: radial-gradient(
      transparent,
      var(--accent),
      transparent,
      var(--accent),
      transparent,
      var(--accent)
    );
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>
