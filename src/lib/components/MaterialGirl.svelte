<script lang="ts">
  //@ts-nocheck
  // import { onMount } from "svelte"

  function createRipple(event) {
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

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  // height: 265px; width: 265px; left: -26.5px; top: -98.5px;
  type Ripple = {
    radius: number,
    pos: [number, number]
  }

  let ripples: Ripple[] = [
    { radius: 132.5, pos: [196, 83] },
    { radius: 132.5, pos: [74, 42] },
    { radius: 132.5, pos: [6, 1] },
  ]

  // onMount(() => {
  //   const buttons = document.getElementsByTagName("button");
  //   for (const button of buttons) {
  //     button.addEventListener("click", createRipple);
  //   }
  // })
</script>

<button on:click={createRipple}>
  Find out more
  {#each ripples as ripple}
    <span class="ripple" />
  {/each}
</button>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
