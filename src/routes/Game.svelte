<script lang="ts">
  import Grid from "./Grid.svelte";
  import { levels } from "../types/level";
  import type { Level } from "../types/level"

  const level = levels[0]

  let size:number = level.size;
  let grid:string[] = createGrid(level);
  let found:string[] = []

  function createGrid(level: Level) {
    const copy = [...level.emojis]

    const pairs:string[] = []

    for(let i = 0; i < level.size ** 2 / 2; i++) {
        const index = Math.floor(Math.random() * copy.length)
        const emoji = copy[index]

        copy.splice(index, 1)
        pairs.push(emoji)
    }

    pairs.push(...pairs)
    return pairs.sort( () => .5 - Math.random() );
  }
</script>


<div class="game">
    <div class="info"></div>

    <div class="grid-container">
        <Grid grid={grid} />
    </div>

    <div class="info"></div>
</div>


<style>
    .game {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        font-size: min(1vmin, 0.4rem);
    }

    .info {
        width: 80em;
        height: 10em;
        background: red;
    }

    .grid-container {
        width: 80em;
        height: 80em;
        background: blue;
    }

</style>