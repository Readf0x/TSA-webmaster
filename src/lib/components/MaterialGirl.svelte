<script lang="ts">
  type Ripple = {
    diameter: number
    pos: [number, number]
    id: number
  }

  let ripples: Ripple[] = new Array()
  let id = 0
  function createRipple(ev: MouseEvent): void {
    const button: any = ev.currentTarget
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
</script>

<button on:click={createRipple}>
  <slot>Material girl in a material world</slot>
  {#each ripples as { diameter, pos, id }, _ (id)}
    <span
      class="ripple"
      style:height="{diameter / 2}px"
      style:width="{diameter / 2}px"
      style:left="{pos[0] - diameter / 4}px"
      style:top="{pos[1] - diameter / 4}px"
    />
  {/each}
</button>

<style lang="scss">
  button {
    position: relative;
    overflow: visible;
    outline: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    background: none;
    font: inherit;
    box-sizing: border-box;
    // display: contents;
    span.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background: radial-gradient(var(--accent), transparent);
      opacity: 0.25;
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>
