<script lang="ts">
	import { onMount } from 'svelte';

	const modules = [
		{
			tab: 'Sales & CRM',
			title: 'Close deals',
			accent: 'faster.',
			image: '/sales.png',
			desc: 'Every lead is AI-scored. Proposals generate from templates. Clients collaborate in a branded portal. When a deal closes, the project starts automatically.',
			features: [
				'AI-scored lead prioritization & pipeline',
				'One-click proposal & contract generation',
				'Client portal: review, approve, and pay',
				'Call transcripts with sentiment analysis'
			]
		},
		{
			tab: 'Smart Projects',
			title: 'Deliver on',
			accent: 'time.',
			image: '/projects.png',
			desc: 'AI-driven scope planning detects deviations before they become problems. Track team performance, manage client sign-offs, and tie delivery directly to revenue.',
			features: [
				'Intelligent scope & milestone planning',
				'Real-time deviation & risk alerts',
				'Team performance against KPIs',
				'Client sign-off & change request tracking'
			]
		},
		{
			tab: 'HR & People',
			title: 'Hire to',
			accent: 'retire.',
			image: '/hr.png',
			desc: 'From skill-matched hiring to automated payroll, manage the entire employee lifecycle. Performance KPIs, attendance, mentorship, and compliance: unified.',
			features: [
				'AI-powered candidate matching',
				'Automated payroll with PF, TDS, ESI',
				'Performance reviews & mentorship plans',
				'Time tracking tied to project delivery'
			]
		},
		{
			tab: 'Finance',
			title: 'Real-time financial',
			accent: 'clarity.',
			image: '/finance.png',
			desc: 'Project-linked invoicing, automated reconciliation, and cash flow predictions. Every rupee ties back to the project and team that generated it.',
			features: [
				'Automated project-linked invoicing',
				'Bank reconciliation & ledger entries',
				'Cash flow prediction dashboards',
				'P&L tied to project profitability'
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
			active = (active + 1) % modules.length;
		}, 6000);
	}

	onMount(() => {
		startAutoplay();
		return () => clearInterval(autoplay);
	});
</script>

<svelte:head>
	<title>AI Business Operating System for SMBs | OJO Product</title>

	<meta
		name="description"
		content="Explore OJO's AI-native business operating system for SMBs. Manage Sales, CRM, Projects, HR, Payroll, and Finance in one unified platform."
	/>

	<meta
		name="keywords"
		content="AI business operating system, SMB ERP software, AI CRM software, project management platform, HR payroll software, finance automation platform, AI business software"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="OJO" />
	<meta name="publisher" content="OJO" />

	<link rel="canonical" href="https://www.ojo.io/product" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ojo.io/product" />
	<meta property="og:title" content="AI Business Operating System for SMBs | OJO Product" />
	<meta
		property="og:description"
		content="Unify Sales, Projects, HR, and Finance with OJO's AI-native operating system built for growing SMBs."
	/>
	<meta property="og:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.ojo.io/product" />
	<meta name="twitter:title" content="AI Business Operating System for SMBs | OJO Product" />
	<meta
		name="twitter:description"
		content="AI-powered CRM, Projects, HR, and Finance platform for SMBs. Built to streamline operations and scale faster."
	/>
	<meta name="twitter:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "OJO",
			"url": "https://www.ojo.io/product",
			"applicationCategory": "BusinessApplication",
			"operatingSystem": "Web",
			"description": "OJO is an AI-native business operating system that unifies Sales, CRM, Projects, HR, Payroll, and Finance for SMBs.",
			"brand": {
				"@type": "Brand",
				"name": "OJO"
			},
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"publisher": {
				"@type": "Organization",
				"name": "OJO",
				"url": "https://www.ojo.io"
			}
		}
	</script>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:40px">
	<div class="container">
		<div class="hero-content">
			<p class="label reveal">Product</p>
			<h1 class="d1 reveal" style="max-width:660px">The AI engine behind<br><span class="accent">connected teams.</span></h1>
			<p class="body-l hero-desc reveal">From lead capture to invoice collection, every department shares one brain, one timeline, one source of truth.</p>
			<div class="hero-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/contact">Talk to Sales &rarr;</a>
				<a class="btn-outline-lg" href="/contact">Book a Demo</a>
			</div>
		</div>
	</div>
</section>

<section class="section" style="padding-top:40px;border-top:1px solid var(--bd)">
	<div class="container">
		<p class="label reveal">How it works</p>
		<h2 class="d2 reveal" style="margin-bottom:12px">From lead to revenue: <span class="accent">one flow.</span></h2>
		<p class="body-m reveal" style="max-width:460px;margin-bottom:0">No handoff gaps. No context loss. Every step informs the next.</p>
		<div class="flow-row reveal" style="gap:12px">
			<div class="flow-s">
				<div style="margin:0 auto 10px;width:40px;height:40px;border-radius:10px;background:var(--r-g);display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg></div>
				<div class="flow-l">Lead Capture</div><div class="flow-d">AI scores & qualifies</div>
			</div>
			<div class="flow-s">
				<div style="margin:0 auto 10px;width:40px;height:40px;border-radius:10px;background:var(--r-g);display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
				<div class="flow-l">Proposal & SOW</div><div class="flow-d">Auto-generated, e-signed</div>
			</div>
			<div class="flow-s">
				<div style="margin:0 auto 10px;width:40px;height:40px;border-radius:10px;background:var(--r-g);display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
				<div class="flow-l">Project Setup</div><div class="flow-d">Team, milestones, KPIs</div>
			</div>
			<div class="flow-s">
				<div style="margin:0 auto 10px;width:40px;height:40px;border-radius:10px;background:var(--r-g);display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
				<div class="flow-l">Delivery & HR</div><div class="flow-d">Performance + payroll</div>
			</div>
			<div class="flow-s">
				<div style="margin:0 auto 10px;width:40px;height:40px;border-radius:10px;background:var(--r-g);display:flex;align-items:center;justify-content:center"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
				<div class="flow-l">Invoice & P&L</div><div class="flow-d">Reconciliation, cash flow</div>
			</div>
		</div>
	</div>
</section>

<!-- Module Showcase -->
<section class="section section-alt">
	<div class="container">
		<p class="label reveal">Modules</p>
		<h2 class="d2 reveal" style="margin-bottom:12px">One system. <span class="accent">Every department.</span></h2>
		<p class="body-m reveal" style="max-width:460px;margin-bottom:40px">Click a module to explore what it does for your team.</p>

		<div class="sc-tabs reveal">
			<div class="sc-tabs-inner">
				{#each modules as mod, i}
					<button class="sc-tab" class:on={active === i} onclick={() => setActive(i)}>{mod.tab}</button>
				{/each}
			</div>
		</div>

		<div class="sc-layout prod reveal">
			<div class="sc-main" style="min-height:auto">
				{#each modules as mod, i}
					<div class="sc-card" class:on={active === i}>
						<h3 class="d2" style="margin-bottom:14px">{mod.title} <span class="accent">{mod.accent}</span></h3>
						<p class="body-m" style="margin-bottom:0">{mod.desc}</p>
						<div class="sc-feat-list">
							{#each mod.features as feat}
								<div class="feat-li"><div class="feat-ck">&#10003;</div>{feat}</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<div class="sc-prod-img">
				{#each modules as mod, i}
					<img
						src={mod.image}
						alt={mod.tab}
						style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;transition:opacity .45s cubic-bezier(.16,1,.3,1);opacity:{active === i ? 1 : 0}"
					/>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- OJO AI -->
<section class="section">
	<div class="container">
		<div style="text-align:center;max-width:600px;margin:0 auto 56px">
			<p class="label reveal">OJO AI</p>
			<h2 class="d2 reveal" style="margin-bottom:12px">Your always-on <span class="accent">operations partner.</span></h2>
			<p class="body-m reveal">OJO AI isn't a chatbot. It's an intelligent layer that reads your business data in real time, detects patterns across departments, and gives you actionable answers in plain language.</p>
		</div>

		<div class="grid-2 reveal">
			<div class="cell">
				<div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--r);margin-bottom:14px">How it works</div>
				<div class="prob-t" style="margin-bottom:12px">Ask anything. Get context-aware answers.</div>
				<div class="body-m" style="margin-bottom:20px">Type a question like "What should I focus on today?" or "Which projects are at risk?" and OJO AI pulls live data from Sales, Projects, HR, and Finance to give you a single, prioritized answer.</div>
				<div style="display:flex;flex-direction:column;gap:10px">
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Natural language queries across all modules</div>
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Pulls live data, not cached reports</div>
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Understands role context (CEO sees strategy, PM sees tasks)</div>
				</div>
			</div>
			<div class="cell">
				<div style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--r);margin-bottom:14px">What it does</div>
				<div class="prob-t" style="margin-bottom:12px">Proactive alerts. Not just reactive answers.</div>
				<div class="body-m" style="margin-bottom:20px">OJO AI doesn't wait for you to ask. It monitors your business continuously and surfaces risks, opportunities, and action items before they become problems.</div>
				<div style="display:flex;flex-direction:column;gap:10px">
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Flags project delays before they impact revenue</div>
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Alerts on overdue invoices and cash flow gaps</div>
					<div class="feat-li"><div class="feat-ck">&#10003;</div>Recommends team rebalancing based on utilization</div>
				</div>
			</div>
		</div>

		<div class="grid-brain reveal" style="margin-top:24px">
			<div style="display:flex;align-items:center;gap:24px;padding:28px 32px;position:relative;z-index:1">
				<div style="flex-shrink:0;width:48px;height:48px;border-radius:12px;background:var(--r);display:flex;align-items:center;justify-content:center;font-size:20px;color:#fff">&#9672;</div>
				<div style="flex:1">
					<div style="font-size:15px;font-weight:900;letter-spacing:-.02em;color:var(--t1);margin-bottom:4px">Every answer is grounded in your real data</div>
					<div class="body-m">Unlike generic AI assistants, OJO AI only works with your company's live operational data. It never hallucinates numbers because every insight traces back to a real project, invoice, employee, or deal in your system.</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Governance & Operational Benefits -->
<section class="section">
	<div class="container">
		<div style="text-align:center;max-width:600px;margin:0 auto 56px">
			<p class="label reveal">Why OJO platform matters</p>
			<h2 class="d2 reveal" style="margin-bottom:12px">Governance, visibility, <span class="accent">and control.</span></h2>
			<p class="body-m reveal">When every department runs inside one system, you don't just save time, you gain operational clarity that's impossible with disconnected tools.</p>
		</div>

		<div class="grid-3 reveal">
			<div class="cell">
				<div class="val-i">&#9878;</div>
				<div class="prob-t">Single audit trail</div>
				<div class="prob-d">Every action, from lead creation to invoice payment, is logged in one place. No more piecing together histories across 5 tools for compliance or audits.</div>
			</div>
			<div class="cell">
				<div class="val-i">&#9201;</div>
				<div class="prob-t">Eliminate wasted hours</div>
				<div class="prob-d">Teams spend up to 30% of their day switching between tools, re-entering data, and chasing updates. OJO collapses all of that into one workflow, so your people spend time on actual work, not coordination.</div>
			</div>
			<div class="cell">
				<div class="val-i">&#10022;</div>
				<div class="prob-t">Cross-department analytics</div>
				<div class="prob-d">See how sales performance impacts project delivery, how hiring gaps affect revenue, and how cash flow ties to team utilization, all from one dashboard.</div>
			</div>
		</div>

		<div class="grid-3 reveal" style="margin-top:1px">
			<div class="cell">
				<div class="val-i">&#9888;</div>
				<div class="prob-t">Early risk detection</div>
				<div class="prob-d">When a project slips, OJO flags it before it hits revenue. When a top performer's utilization drops, you know before they burn out. Proactive alerts replace reactive firefighting.</div>
			</div>
			<div class="cell">
				<div class="val-i">&#9881;</div>
				<div class="prob-t">Automated compliance</div>
				<div class="prob-d">PF, TDS, ESI calculations in payroll. GST-ready invoicing. Data retention policies built in. OJO handles the regulatory grunt work so you don't have to.</div>
			</div>
			<div class="cell">
				<div class="val-i">&#9733;</div>
				<div class="prob-t">Faster onboarding</div>
				<div class="prob-d">New hires learn one system instead of seven. Consistent UI, shared workflows, and in-context AI help means your team is productive from day one, not day thirty.</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-sec">
	<div class="container">
		<div class="cta-inner">
			<h2 class="d2 reveal">See every module <span class="accent">in action.</span></h2>
			<p class="body-l reveal" style="margin-top:16px">Get a personalised walkthrough with our team.</p>
			<div class="cta-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/contact">Talk to Sales &rarr;</a>
				<a class="btn-outline-lg" href="/contact">Book a Demo</a>
			</div>
		</div>
	</div>
</section>
