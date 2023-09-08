<script lang="ts">
  import Pause from "../icons/pause/Pause.svelte";

    export let remaining: number;
    export let duration: number;
</script>

<div class="countdown">
    <button>
        <Pause />
    </button>

    <div class="duration">
        <div class="remaining" style="--p: {remaining / duration}">

        </div>
    </div>
</div>

<style>
    .countdown {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .duration {
        flex: 1;
        position: relative;
        width: 100%;
        height: 1em;
        background: #ccc;
    }

    .remaining {
        position: absolute;
        background: #999;
        height: 100%;
        width: calc(100% * var(--p));
    }

    button {
        height: 50px;
        width: 50px;
        border: none;
        background: transparent;
        outline: none;
    }


</style>