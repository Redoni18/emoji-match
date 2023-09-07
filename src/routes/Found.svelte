<script lang="ts">
    export let found:string[];
</script>

<div class="found">
    {#each found as foundEmoji (foundEmoji) }
        <span>
            {foundEmoji}
        </span>
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1rem;
    }
    .found span {
        font-size: 5em;
    }
</style>