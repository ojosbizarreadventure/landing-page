<script lang="ts">
	let {
		height = 30,
		white = false,
		wordmark = true
	}: { height?: number; white?: boolean; wordmark?: boolean } = $props();
</script>

<span class="tg-logo" style="--h:{height}px">
	<img src="/telugo-mark.png" alt="Telugo" class="tg-mark" class:white />
	{#if wordmark}<span class="tg-word" class:white>Telugo</span>{/if}
</span>

<style>
	.tg-logo {
		display: inline-flex;
		align-items: center;
		gap: calc(var(--h) * 0.26);
		line-height: 1;
	}
	.tg-mark {
		height: var(--h);
		width: auto;
		display: block;
		/* Light source top-left — the mark sits proud of the surface */
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
	}
	.tg-mark.white {
		filter: brightness(0) invert(1);
	}
	.tg-word {
		font-weight: 900;
		font-size: calc(var(--h) * 0.62);
		letter-spacing: -0.045em;
		color: var(--t1);
	}
	.tg-word.white {
		color: #fff;
	}
</style>
