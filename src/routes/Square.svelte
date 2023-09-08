<script lang="ts">
    import { getTwemojiUrl } from "../utils/utils";

    export let emoji: string;
    export let selected: boolean
    export let found: boolean;

</script>

<div class="square" class:flipped={selected}>
    <button on:click />
    {#if !found }
        <img class="emoji" alt={emoji} src={getTwemojiUrl(emoji)} />
    {/if}
</div>

<style>
    .square {
        position: relative;
        background: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    }

    .emoji {
        width: 7em;
        pointer-events: none;
    }

    .flipped button {
        background: red;
    }

    button {
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>