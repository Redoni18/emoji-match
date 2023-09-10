<script lang="ts">
    import { send } from "../transitions";
    import { getTwemojiUrl } from "../utils/utils";

    export let emoji: string;
    export let selected: boolean
    export let found: boolean;
    export let group: 'a' | 'b';
    
</script>

<div class="square" class:flipped={selected || found}>

    <button on:click />
    
    <div class="background"></div>
    {#if !found }
        <img class="emoji" alt={emoji} src={getTwemojiUrl(emoji)} out:send={{key: `${emoji}:${group}`}} />
    {/if}
</div>

<style>
    .square {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-style: preserve-3d;
        transition: transform 0.4s;
    }

    .emoji {
        width: 7em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

    .flipped {
        transform: rotateY(-180deg);
    }

    .background {
        position: absolute;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        height: 100%;
        width: 100%;
        background: white;
        border-radius: 10px;
        border: 2px solid #eee;
    }

    button {
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        border: none;
        background: #eee;
        font-size: inherit;
    }
</style>