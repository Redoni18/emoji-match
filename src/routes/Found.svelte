<script lang="ts">
    import { receive } from "../transitions";
    import { getTwemojiUrl } from "../utils/utils";

    export let found:string[];
</script>

<div class="found">
    {#each found as foundEmoji (foundEmoji) }
        <div class="pair">
            <img in:receive={{key: `${foundEmoji}:a`}} class="emoji" alt={foundEmoji} src={getTwemojiUrl(foundEmoji)} />
            <img in:receive={{key: `${foundEmoji}:b`}} class="emoji" alt={foundEmoji} src={getTwemojiUrl(foundEmoji)} />
        </div>
    {/each}
</div>

<style>
    .found {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        gap: 1rem;
        filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
    }

    .pair {
        width: 6em;
        height: 6em;
        padding: 10px;
        border-radius: 50%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .found img {
        position: absolute;
        width: 4em;
        height: 4em;
    }
</style>