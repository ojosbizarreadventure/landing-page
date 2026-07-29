<script lang="ts">
	import { onMount } from 'svelte';

	const industries = [
		{
			id: 'manufacturing',
			tab: 'Manufacturing',
			name: 'Manufacturing & Fabrication',
			image: '/sol-manufacturing.svg',
			alt: 'An order travelling through four production stations, turning from turquoise to amber as it is made',
			desc: 'Sales orders, bill of materials, work orders and QC in one board. Telugo checks material before you promise a date, flags a shortage days before the line stops, and turns a finished batch into an invoice without re-entry.',
			stats: [
				{ val: '78', label: 'Factory Score, live' },
				{ val: '0', label: 'Re-entry, order to invoice' },
				{ val: '3 days', label: 'Earlier shortage warning' }
			]
		},
		{
			id: 'it',
			tab: 'IT Services',
			name: 'IT Services & Software',
			image: '/sol-it.jpg',
			alt: 'IT team collaborating around laptops',
			desc: 'Manage multi-client projects, track developer utilization, automate SOW-to-delivery workflows, and predict revenue with AI-driven insights.',
			stats: [
				{ val: '40%', label: 'Faster delivery' },
				{ val: '3.2hrs', label: 'Saved per dev/day' },
				{ val: '92%', label: 'On-time rate' }
			]
		},
		{
			id: 'consulting',
			tab: 'Consulting',
			name: 'Business Consulting',
			image: '/sol-consulting.jpg',
			alt: 'Consultants in a strategy meeting',
			desc: 'Track consultant hours against project profitability, manage proposals end-to-end, and surface real-time client engagement insights.',
			stats: [
				{ val: '28%', label: 'Higher margins' },
				{ val: '2x', label: 'Faster proposals' },
				{ val: '100%', label: 'Billable visibility' }
			]
		},
		{
			id: 'legal',
			tab: 'Legal',
			name: 'Legal Service Firms',
			image: '/sol-legal.jpg',
			alt: 'Professional reviewing legal documents',
			desc: 'Case management, document workflows, billing automation, and compliance tracking, all under one AI-driven operating system.',
			stats: [
				{ val: '60%', label: 'Less admin work' },
				{ val: '5x', label: 'Faster billing' },
				{ val: '99%', label: 'Compliance rate' }
			]
		},
		{
			id: 'arch',
			tab: 'Architecture',
			name: 'Architecture & Engineering',
			image: '/sol-arch.jpg',
			alt: 'Architect working on blueprints',
			desc: 'Milestone tracking, resource allocation across sites, vendor management, and integrated financial oversight for complex projects.',
			stats: [
				{ val: '35%', label: 'Budget savings' },
				{ val: '24/7', label: 'Site visibility' },
				{ val: '4.8x', label: 'ROI in year one' }
			]
		}
	];

	let active = $state(0);
	let autoplay: ReturnType<typeof setInterval>;

	function setActive(i: number) {
		active = i;
		clearInterval(autoplay);
		startAutoplay();
	}

	function startAutoplay() {
		autoplay = setInterval(() => {
			active = (active + 1) % industries.length;
		}, 5000);
	}

	onMount(() => {
		startAutoplay();
		return () => clearInterval(autoplay);
	});
</script>

<svelte:head>
	<title>AI Business Solutions for SMBs | Telugo Solutions</title>

	<meta
		name="description"
		content="Discover AI-powered business solutions by Telugo for Sales, CRM, Projects, Manufacturing, HR, Payroll and Finance. Built to help SMBs streamline operations and scale faster."
	/>

	<meta
		name="keywords"
		content="AI business solutions, SMB software solutions, AI CRM platform, project management software, HR payroll software, finance automation software, business operating system"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="Telugo" />
	<meta name="publisher" content="Telugo" />

	<link rel="canonical" href="https://www.telugo.ai/solutions" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.telugo.ai/solutions" />
	<meta property="og:title" content="AI Business Solutions for SMBs | Telugo Solutions" />
	<meta
		property="og:description"
		content="Explore AI-powered business solutions for Sales, Projects, Manufacturing, HR and Finance with Telugo's unified operating platform."
	/>
	<meta property="og:image" content="https://www.telugo.ai/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.telugo.ai/solutions" />
	<meta name="twitter:title" content="AI Business Solutions for SMBs | Telugo Solutions" />
	<meta
		name="twitter:description"
		content="AI-native business solutions for SMBs to automate operations, improve productivity, and drive growth."
	/>
	<meta name="twitter:image" content="https://www.telugo.ai/og-image.jpg" />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Telugo Solutions",
			"url": "https://www.telugo.ai/solutions",
			"description": "AI-powered business solutions for SMBs including CRM, Projects, Manufacturing, HR, Payroll and Finance management.",
			"publisher": {
				"@type": "Organization",
				"name": "Telugo",
				"url": "https://www.telugo.ai"
			},
			"mainEntity": {
				"@type": "SoftwareApplication",
				"name": "Telugo",
				"applicationCategory": "BusinessApplication",
				"operatingSystem": "Web"
			}
		}
	</script>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:40px">
	<div class="container">
		<div class="hero-content">
			<p class="label reveal">Solutions</p>
			<h1 class="d1 reveal" style="max-width:620px">Built for teams that sell <span class="accent">expertise &mdash; and things.</span></h1>
			<p class="body-l hero-desc reveal">Telugo is purpose-built for companies where orders, people, material and profitability are tightly linked &mdash; whether you ship code or steel.</p>
		</div>
	</div>
</section>

<section class="section" style="padding-top:40px">
	<div class="container">
		<p class="label reveal">By industry</p>
		<h2 class="d2 reveal" style="margin-bottom:12px">Solutions for how you <span class="accent">actually operate.</span></h2>
		<p class="body-m reveal" style="max-width:460px;margin-bottom:40px">Purpose-built workflows for how your industry actually operates.</p>

		<div class="sc-tabs reveal">
			<div class="sc-tabs-inner">
				{#each industries as ind, i}
					<button class="sc-tab" class:on={active === i} onclick={() => setActive(i)}>{ind.tab}</button>
				{/each}
			</div>
		</div>

		<div class="reveal">
			<div class="sc-main">
				{#each industries as ind, i}
					<div class="sc-card" class:on={active === i}>
						<div class="sc-img">
							<img src={ind.image} alt={ind.alt} />
						</div>
						<div class="sc-title">{ind.name}</div>
						<div class="sc-desc">{ind.desc}</div>
						<div class="sc-stats">
							{#each ind.stats as stat}
								<div><b>{stat.val}</b><small>{stat.label}</small></div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<p class="label reveal">By role</p>
		<h2 class="d2 reveal" style="margin-bottom:48px">One platform, <span class="accent">every stakeholder.</span></h2>
		<div class="per-grid reveal">
			<div class="cell-alt" style="text-align:center;padding:32px 16px">
				<div style="margin:0 auto 12px;width:48px;height:48px;border-radius:12px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
				<div style="font-size:14px;font-weight:700;margin-bottom:4px">CEO / Founder</div>
				<div class="body-s">Bird's eye view across revenue, team health, and bottlenecks.</div>
			</div>
			<div class="cell-alt" style="text-align:center;padding:32px 16px">
				<div style="margin:0 auto 12px;width:48px;height:48px;border-radius:12px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
				<div style="font-size:14px;font-weight:700;margin-bottom:4px">Sales Leader</div>
				<div class="body-s">Pipeline visibility, lead scoring, proposal automation.</div>
			</div>
			<div class="cell-alt" style="text-align:center;padding:32px 16px">
				<div style="margin:0 auto 12px;width:48px;height:48px;border-radius:12px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
				<div style="font-size:14px;font-weight:700;margin-bottom:4px">Production / Project Head</div>
				<div class="body-s">Work order status, material shortages, deviation alerts.</div>
			</div>
			<div class="cell-alt" style="text-align:center;padding:32px 16px">
				<div style="margin:0 auto 12px;width:48px;height:48px;border-radius:12px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
				<div style="font-size:14px;font-weight:700;margin-bottom:4px">HR Manager</div>
				<div class="body-s">Hiring, payroll, reviews: automated end to end.</div>
			</div>
			<div class="cell-alt" style="text-align:center;padding:32px 16px">
				<div style="margin:0 auto 12px;width:48px;height:48px;border-radius:12px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
				<div style="font-size:14px;font-weight:700;margin-bottom:4px">CFO / Finance</div>
				<div class="body-s">Project-linked P&L, cash flow forecasting, compliance.</div>
			</div>
		</div>
	</div>
</section>

<!-- Telugo AI: Common across all solutions -->
<section class="section">
	<div class="container">
		<div style="text-align:center;max-width:620px;margin:0 auto 48px">
			<p class="label reveal">Telugo AI, built into every solution</p>
			<h2 class="d2 reveal" style="margin-bottom:12px">A helpful co-pilot for <span class="accent">your team.</span></h2>
			<p class="body-m reveal">Telugo AI works quietly in the background, surfacing helpful nudges, summaries, and suggestions so your team always has the right information at the right time. You stay in control. Telugo AI just makes sure nothing slips through the cracks.</p>
		</div>

		<div class="grid-3 reveal">
			<div class="cell" style="text-align:center">
				<div style="font-size:28px;margin-bottom:12px">&#128172;</div>
				<div class="prob-t">Ask anything, simply</div>
				<div class="prob-d">"Why is PO-104 delayed?" "What ships this week?" "Show me pending invoices." Just type what you need. Telugo AI pulls your latest data and gives you a clear, human-readable answer.</div>
			</div>
			<div class="cell" style="text-align:center">
				<div style="font-size:28px;margin-bottom:12px">&#128161;</div>
				<div class="prob-t">Gentle, timely nudges</div>
				<div class="prob-d">Telugo AI keeps an eye on your operations and sends you helpful reminders: an invoice that's overdue, a job that's drifting, a raw material about to run out. Think of it as a thoughtful assistant, not a surveillance tool.</div>
			</div>
			<div class="cell" style="text-align:center">
				<div style="font-size:28px;margin-bottom:12px">&#127919;</div>
				<div class="prob-t">Connected insights, clear context</div>
				<div class="prob-d">Because Telugo connects Sales, Projects, Manufacturing, HR and Finance, you get the full picture without having to piece it together yourself. Telugo AI connects the dots so you can focus on decisions, not data gathering.</div>
			</div>
		</div>
	</div>
</section>

<section class="testi">
	<div class="container">
		<div class="testi-inner reveal">
			<p class="testi-quote">"We make components to order, so a single missing raw material can idle a machine for a day. Telugo tells us on Monday what we used to discover on Thursday."</p>
			<p class="testi-name">Ananya Krishnan</p>
			<p class="testi-role">COO, Meridian Fabrication &middot; Coimbatore &middot; 140 employees</p>
		</div>
	</div>
</section>

<section class="cta-sec">
	<div class="container">
		<div class="cta-inner">
			<h2 class="d2 reveal">See how Telugo fits <span class="accent">your business.</span></h2>
			<p class="body-l reveal" style="margin-top:16px">Book a 20-minute walkthrough tailored to your industry.</p>
			<div class="cta-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/contact">Talk to Sales &rarr;</a>
				<a class="btn-outline-lg" href="/contact">Book a Demo</a>
			</div>
		</div>
	</div>
</section>
