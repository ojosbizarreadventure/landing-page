<script lang="ts">
	/**
	 * Telugo logo.
	 *
	 * `wordmark` (default) renders the full lockup — "Telu" in Clarion Turquoise
	 * with the gear-e and ruler-l, plus the "go" in Vital Amber and Alert Crimson.
	 * Set `wordmark={false}` for tight square slots (browser chrome, avatar chips)
	 * where only the "go" mark fits.
	 */
	let {
		height = 34,
		white = false,
		wordmark = true
	}: { height?: number; white?: boolean; wordmark?: boolean } = $props();
</script>

{#if wordmark}
	<img
		src="/telugo-logo.png"
		alt="Telugo"
		class="tg-logo"
		class:white
		style="height:{height}px"
	/>
{:else}
	<img
		src="/telugo-mark.png"
		alt="Telugo"
		class="tg-mark"
		class:white
		style="height:{height}px"
	/>
{/if}

<style>
	.tg-logo,
	.tg-mark {
		width: auto;
		display: block;
		/* Light source top-left, same as every other surface on the site */
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.28));
	}
	.tg-logo.white,
	.tg-mark.white {
		filter: brightness(0) invert(1);
	}
</style>
