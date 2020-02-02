<script lang="typescript">
  export let value: number = 0;
  export let step: number = 1;
</script>

<style type="text/css">
  .my-tailwind-class {
    @apply bg-transparent bg-blue-500 text-blue-700 font-semibold text-white py-2 px-4 border border-blue-500 border-transparent rounded
  }
</style>

<div>
  <slot>Default Counter</slot>
  <div>
    {value}
    <button class="my-tailwind-class" on:click={() => (value += step)}>+</button>
    <button on:click={() => (value -= step)}>-</button>
  </div>
</div>
