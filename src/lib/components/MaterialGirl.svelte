<script lang="ts">
  //@ts-nocheck
  // import { onMount } from "svelte"

  function createRippleOld(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    console.log(event.clientX - button.offsetLeft)
    console.log(event.clientY - button.offsetTop)

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    // if (ripple) {
    //   ripple.remove();
    // }

    button.appendChild(circle);
  }

  type Ripple = {
    diameter: number,
    pos: [number, number]
  }
  let ripples: Ripple[] = new Array
  function createRipple(ev: MouseEvent): void {
    const button: HTMLButtonElement = ev.currentTarget
    ripples.push({
      diameter: Math.max(button.clientWidth, button.clientHeight),
      pos: [
        ev.clientX - button.offsetLeft,
        ev.clientY - button.offsetTop,
      ],
    })
    ripples = ripples
    setTimeout(() => {
      ripples.pop()
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
  Find out more
  <span />
  {#each ripples as ripple}
    <span
      class="ripple"
      style:height="{ripple.diameter}px"
      style:width="{ripple.diameter}px"
      style:left="{ripple.pos[0] - (ripple.diameter/2)}px"
      style:top="{ripple.pos[1] - (ripple.diameter/2)}px"
    />
  {/each}
</button>

<style>
  button {
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color: #6200ee;
    padding: 1rem 2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3); /* black with 30% opacity */
    cursor: pointer;
  }

  :global(span.ripple) {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background: radial-gradient(transparent, #fff5, transparent, #fff5, transparent, #fff5);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>
