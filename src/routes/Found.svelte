<script lang="ts">
    import { getTwemojiUrl } from "../utils/utils";

    export let found:string[];
</script>

<div class="found">
    {#each found as foundEmoji (foundEmoji) }
        <img class="emoji" alt={foundEmoji} src={getTwemojiUrl(foundEmoji)} />
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 100%;
        gap: 1rem;
    }
    .found img {
        width: 7em;
    }
</style>