<script lang="ts">
  import Game from "./Game.svelte";
  import '../styles.css'
  import Modal from "./Modal.svelte";
  import { levels } from "../types/level";

  let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = "waiting"

  let game: Game;
</script>


<Game 
  bind:this={game}
  on:play={() => state = 'playing'}
  on:lose={() => state = 'lost'}
  on:win={() => state = 'won'}
  on:pause={() => state = 'paused'}
/>

{#if state !== 'playing'}
  <Modal>
    <header>
      <h1>e<span>match</span>i</h1>
      <p>emoji matching game </p>
    </header>

    {#if state === 'paused'}
      <p>game paused</p>
    {:else if state === 'won' || state === "lost"}
      <p>you {state} the game</p>
    {:else if state === 'waiting'} 
      <p>chose a level:</p>
    {/if}

    <div class="buttons">
      {#if state === 'paused'}
        <button on:click={() => game.resume()}>resume</button>
        <button on:click={() => state='waiting'}>quit</button>
      {:else}
        {#each levels as gameLevel}
          <button on:click={() => game.start(gameLevel)}>{gameLevel.label}</button>
        {/each}
      {/if}
    </div>
  </Modal>
{/if}

<style>
  h1{
    font-size: 4em;

  }

  span {
    color: purple;
  }

  button {
    padding: 15px 20px;
    font-size: 1.3rem;
    font-family: 'Grandstander', cursive;
    background: rgba(170, 47, 170, 0.9);
    border: none;
    outline: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    transition: background-color 0.1s ease-in;
  }

  button:hover {
    background: rgba(128, 0, 128, 0.9);
    transition: background-color 0.1s ease-in;
  }

  button + button {
    margin-left: 20px;
  }
</style>