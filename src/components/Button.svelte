<script lang="typescript">
    import { createEventDispatcher } from 'svelte';
    import { DateUtils } from 'utils/date';

    export let text: string = '';

    const dispatch = createEventDispatcher()

    const onClick = (event: Event) => {
        text = DateUtils.getToday('fr');
        dispatch('click', event);
    };
</script>
<style type="text/css">
</style>
<button
    class="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click="{onClick}"
>
    {text}
</button>
