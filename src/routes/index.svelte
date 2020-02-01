<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Button from '../components/Button.svelte';
  import Counter from "../components/Counter.svelte";

  const count = writable(100);

  onMount(() => {
    console.log("App mounted");
  });
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success! <Button text='TS TEST'></Button></h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH DDCD FIVE!</figcaption>
</figure>

<p>
  <strong>Try editing thhhis file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>

<p>
  <Counter />
  <Counter value={1}>Counter 1</Counter>
  <Counter value={$count} step={3}>Counter 2</Counter>
</p>
