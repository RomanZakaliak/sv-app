<script lang="ts">
    let counter = 0;

    const increment = () => {
        counter += 1;
    }
</script>

<button on:click={increment}>
    {counter}
</button>