<script lang="ts">
    import Square from "./Square.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    export let grid: string[];
    export let found: string[];

    let a: number = -1
    let b: number = -1

    let timeOut: number;

    export function resetTiles() {
        a = -1
        b = -1
        clearTimeout(timeOut)
    }
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
                    setTimeout(() => {
                        dispatch('found', {
                            emojiGrid
                        })
                    }, 500)
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
        found={found.includes(emojiGrid)}
        group={grid.indexOf(emojiGrid) === i ? 'a':'b'}
        />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(var(--gridSize), 1fr);
        grid-template-rows: repeat(var(--gridSize), 1fr);
        grid-gap: 0.5em;
        height: 100%;
        perspective: 100vw ;
    }
</style>