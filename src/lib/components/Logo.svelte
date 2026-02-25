<script lang="ts">
	let { height = 34, white = false }: { height?: number; white?: boolean } = $props();
</script>

<svg viewBox="0 0 4000 2800" {height} style="display:block">
	<rect fill={white ? '#fff' : '#DC2626'} x="2390.2" y="1214.4" width="923.1" height="217.3" transform="translate(893.4 -1136.2) rotate(26.6)"/>
	<rect fill={white ? '#fff' : '#DC2626'} x="585.4" y="1187.2" width="923.1" height="217.3" transform="translate(2710.8 1215.2) rotate(126.2)"/>
	<path fill={white ? '#fff' : 'currentColor'} style={white ? '' : 'color:var(--t1)'} d="M1965.9,1047.1h213.9v1491.3c0,114.7-93.1,207.8-207.8,207.8h-6.1v-1699.1h0Z"/>
	<path fill={white ? '#fff' : 'currentColor'} style={white ? '' : 'color:var(--t1)'} d="M1644.8,2219.7h213.9v847.7h-25.9c-103.8,0-188.1-84.3-188.1-188.1v-659.6h0Z" transform="translate(-891.8 4395.2) rotate(-90)"/>
	<path fill={white ? '#fff' : '#DC2626'} d="M2513.8,1509.6c-279.8,0-506.6,226.8-506.6,506.6s226.8,506.6,506.6,506.6,506.6-226.8,506.6-506.6-226.8-506.6-506.6-506.6ZM2513.4,2290.8c-152.3,0-275.7-123.4-275.7-275.7s123.4-275.7,275.7-275.7,275.7,123.4,275.7,275.7-123.4,275.7-275.7,275.7Z"/>
	<path fill={white ? '#fff' : '#DC2626'} d="M1662.3,1250.9c-279.8,0-506.6,226.8-506.6,506.6s226.8,506.6,506.6,506.6,506.6-226.8,506.6-506.6-226.8-506.6-506.6-506.6ZM1661.8,2032.1c-152.3,0-275.7-123.4-275.7-275.7s123.4-275.7,275.7-275.7,275.7,123.4,275.7,275.7-123.4,275.7-275.7,275.7Z"/>
</svg>
