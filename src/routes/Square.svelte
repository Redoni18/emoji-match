<script lang="ts">
    export let emoji: string;
    export let selected: boolean
    export let found: boolean;

</script>

<div class="square" class:flipped={selected}>
    <button on:click />
    {#if !found }
        <span class="emoji">
            {emoji}
        </span>
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
        font-size: 30px;
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