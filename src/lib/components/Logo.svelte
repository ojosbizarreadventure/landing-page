<script lang="ts">
	/**
	 * OJO logo.
	 *
	 * The mark spells "ojo" — two slashed rings around a j.
	 *
	 * The rings always stay OJO Red; the j takes the surrounding text colour,
	 * so the mark flips correctly between the dark and light themes.
	 * `white` forces the whole mark white for use on coloured tiles.
	 */
	let { height = 34, white = false }: { height?: number; white?: boolean } = $props();
</script>

<svg
	class="ojo-mark"
	class:white
	style="--h:{height}px"
	viewBox="676 848 2646 1912"
	xmlns="http://www.w3.org/2000/svg"
	role="img"
	aria-label="OJO"
>
	<!-- the j -->
	<g class="ink">
		<path d="M1965.9,1047.1h213.9v1491.3c0,114.7-93.1,207.8-207.8,207.8h-6.1v-1699.1h0Z" />
		<path
			d="M1644.8,2219.7h213.9v847.7h-25.9c-103.8,0-188.1-84.3-188.1-188.1v-659.6h0Z"
			transform="translate(-891.8 4395.2) rotate(-90)"
		/>
	</g>
	<!-- the two o's, each with its slash -->
	<g class="red">
		<rect
			x="2390.2"
			y="1214.4"
			width="923.1"
			height="217.3"
			transform="translate(893.4 -1136.2) rotate(26.6)"
		/>
		<rect
			x="585.4"
			y="1187.2"
			width="923.1"
			height="217.3"
			transform="translate(2710.8 1215.2) rotate(126.2)"
		/>
		<path
			d="M2513.8,1509.6c-279.8,0-506.6,226.8-506.6,506.6s226.8,506.6,506.6,506.6,506.6-226.8,506.6-506.6-226.8-506.6-506.6-506.6ZM2513.4,2290.8c-152.3,0-275.7-123.4-275.7-275.7s123.4-275.7,275.7-275.7,275.7,123.4,275.7,275.7-123.4,275.7-275.7,275.7Z"
		/>
		<path
			d="M1662.3,1250.9c-279.8,0-506.6,226.8-506.6,506.6s226.8,506.6,506.6,506.6,506.6-226.8,506.6-506.6-226.8-506.6-506.6-506.6ZM1661.8,2032.1c-152.3,0-275.7-123.4-275.7-275.7s123.4-275.7,275.7-275.7,275.7,123.4,275.7,275.7-123.4,275.7-275.7,275.7Z"
		/>
	</g>
</svg>

<style>
	.ojo-mark {
		height: var(--h);
		width: auto;
		display: block;
		flex-shrink: 0;
		color: var(--t1);
		/* Light source top-left, same as every other surface on the site */
		filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.28));
	}
	.ink {
		fill: currentColor;
	}
	.red {
		fill: #f04b56;
	}
	.ojo-mark.white .ink,
	.ojo-mark.white .red {
		fill: #fff;
	}
</style>
