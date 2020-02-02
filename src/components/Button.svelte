<script lang="typescript">
    import { createEventDispatcher } from 'svelte';
    import { DateUtils } from '../utils/date';

    export let text: string = '';
    let t: string;
    const dispatch = createEventDispatcher();

    
    const onClick = (event: Event) => {
      t = DateUtils.getToday('fr');
      dispatch('click', event);
    }
</script>

<button class="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={onClick}>
  {text} {t}
</button>