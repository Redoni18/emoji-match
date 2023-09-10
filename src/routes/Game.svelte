<script lang="ts">
  import Grid from "./Grid.svelte";
  import type { Level } from "../types/level"
  import Found from "./Found.svelte";
  import Countdown from "./Countdown.svelte";
  import { createEventDispatcher } from "svelte";
 

  let size:number;
  let grid:string[] = [];
  let found:string[] = []

  let remaining:number = 0
  let duration:number = 0
  let playing:boolean = false;
  let gameGrid: Grid;

  const dispatch = createEventDispatcher()

  export function start(level: Level) {
    size = level.size
    grid = createGrid(level)
    remaining = level.duration
    duration = level.duration
    found = []
    resume()
  }

  export function resume() {
    dispatch('play')
    playing = true;
    countdown()

  }


  function createGrid(level: Level) {
    const copy = [...level.emojis]

    const pairs:string[] = []

    for(let i = 0; i < size ** 2 / 2; i++) {
        const index = Math.floor(Math.random() * copy.length)
        const emoji = copy[index]

        copy.splice(index, 1)
        pairs.push(emoji)
    }

    pairs.push(...pairs)
    return pairs.sort( () => .5 - Math.random() );
  }

  function countdown() {
    const start = Date.now()
    let remaining_at_start = remaining

    function loop() {

        if(!playing) return
        requestAnimationFrame(loop)

        remaining = remaining_at_start - (Date.now() - start)
        if(remaining <= 0) {
            playing = false
            gameGrid.resetTiles()
            dispatch('lose')
        }
    }

    loop()
  }
</script>


<div class="game">
    <div class="info">
        {#if playing}
            <Countdown duration={duration} remaining={remaining} on:click={() => {
                dispatch('pause')
                playing = false
            }}/>
        {/if}
    </div>

    <div class="grid-container" style="--gridSize: {size}">
        <Grid 
            grid={grid} 
            on:found={(e) => {
                found = [...found, e.detail.emojiGrid]

                if(found.length === size**2 / 2){
                    dispatch('win')
                    gameGrid.resetTiles()
                }
            }} 
            found={found}
            bind:this={gameGrid}
        />
    </div>

    <div class="info">
        <Found {found} />
    </div>
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
    }

    .grid-container {
        width: 80em;
        height: 80em;
    }

</style>