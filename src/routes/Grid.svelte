<script lang="ts">
    import Square from "./Square.svelte";
    export let grid: string[];

    let a: number = -1
    let b: number = -1

    let timeOut: number;
</script>

<div class="grid">
    {#each grid as emojiGrid, i }
        <Square emoji={emojiGrid} on:click={() => {
            clearTimeout(timeOut)
            if(a === -1 && b === -1) {
                a = i
            } else if (b === -1) {
                b = i
                if(grid[a] === grid[b]){
                    //correct
                    console.log("correct")
                } else {
                    // incorrect
                    console.log("incorrect")
                    timeOut = setTimeout(() => {
                        b = -1
                        a = -1
                    }, 1000)
                }
            } else {
                b = -1
                a = i
            }
        }}
        selected={a === i || b === i}
        />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 0.5em;
        height: 100%;
    }
</style>