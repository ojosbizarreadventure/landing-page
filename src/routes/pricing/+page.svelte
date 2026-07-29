<script lang="ts">
	let period = $state<'m' | 'a'>('m');
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const prices = {
		plus: { m: '₹650', a: '₹585' },
		ultra: { m: '₹2,700', a: '₹2,430' }
	};

	type Cell = string | boolean;
	type Row = { label: string; values: [Cell, Cell, Cell] };
	type Group = { title: string; icon: string; rows: Row[] };

	const T: Cell = true;
	const F: Cell = false;

	const groups: Group[] = [
		{
			title: 'Seats & teams',
			icon: '👥',
			rows: [
				{ label: 'Users included', values: ['1', '1', '25+'] },
				{ label: 'Max users (cap)', values: ['NA', 'NA', 'Unlimited'] },
				{ label: 'Add additional users', values: ['20% off / 30% annual', '20% off / 30% annual', 'Negotiated'] },
				{ label: 'Custom roles & permissions', values: ['Basic', 'Advanced', 'Enterprise'] },
				{ label: 'Members & Departments', values: [T, T, T] }
			]
		},
		{
			title: 'AI credits & intelligence',
			icon: '🤖',
			rows: [
				{ label: 'AI credits / month', values: ['5,000', '25,000', '1,00,000+'] },
				{ label: 'Tokens equivalent', values: ['5L tokens', '25L tokens', 'Custom'] },
				{ label: 'AI model', values: ['DeepSeek V3', 'GPT-5.4 (frontier)', 'GPT-5.4 + custom'] },
				{ label: 'AI response speed', values: ['Standard', 'Fastest', 'Dedicated'] },
				{ label: 'Extra credit pack', values: ['₹500 ≈ 7,500 credits', '₹500 ≈ 750 credits', 'Custom volume'] },
				{ label: 'AI Chat (Ask Telugo)', values: [T, T, T] },
				{ label: 'AI-led recommendations & insights', values: [T, T, T] }
			]
		},
		{
			title: 'Sales & client collaboration',
			icon: '💼',
			rows: [
				{ label: 'Contacts management', values: [T, T, T] },
				{ label: 'Leads pipeline', values: [T, T, T] },
				{ label: 'AI lead scoring', values: [T, T, T] },
				{ label: 'Proposal & contract automation', values: ['Basic', T, T] },
				{ label: 'Lead call transcripts', values: ['50 / mo', 'Unlimited', 'Unlimited'] },
				{ label: 'Client review & approval workspace', values: [T, T, T] },
				{ label: 'AI task automation per executive', values: ['Basic', 'Advanced', 'Custom'] },
				{ label: 'Sales-to-Delivery handoff', values: [F, T, T] }
			]
		},
		{
			title: 'Smart projects',
			icon: '📋',
			rows: [
				{ label: 'Projects module', values: [T, T, T] },
				{ label: 'AI scope planning', values: ['Basic', T, T] },
				{ label: 'AI progress tracking & alerts', values: [F, T, T] },
				{ label: 'Team performance monitoring', values: [F, T, T] },
				{ label: 'Smart client query handling', values: [F, T, T] },
				{ label: 'Task management & timeline', values: [T, T, T] },
				{ label: 'Sales-Accounts revenue tie-in', values: [F, T, T] }
			]
		},
		{
			title: 'HR & people operations',
			icon: '👤',
			rows: [
				{ label: 'HR module (basic)', values: [T, T, T] },
				{ label: 'AI hiring & onboarding', values: [F, T, T] },
				{ label: 'Performance monitoring', values: [F, T, T] },
				{ label: 'Specialised mentorship planning', values: [F, T, T] },
				{ label: 'Payroll integration', values: [F, T, T] }
			]
		},
		{
			title: 'Finance & accounts',
			icon: '💰',
			rows: [
				{ label: 'Accounts & Vendors module', values: [T, T, T] },
				{ label: 'Auto project account management', values: [F, T, T] },
				{ label: 'Invoice verification & reconciliation', values: ['Manual', T, T] },
				{ label: 'Cash flow prediction', values: [F, T, T] },
				{ label: 'Profitability dashboards', values: ['Basic', T, T] },
				{ label: 'Inventory management', values: [F, T, T] },
				{ label: 'Finance & Compliance settings', values: [T, T, T] },
				{ label: 'Payment configuration', values: [T, T, T] }
			]
		},
		{
			title: 'Insights & dashboards',
			icon: '📊',
			rows: [
				{ label: 'Dashboard / Today view', values: [T, T, T] },
				{ label: 'Advanced analytics & reports', values: ['Basic', T, 'Custom'] },
				{ label: 'Bottleneck & risk prediction', values: [F, T, T] },
				{ label: 'Cross-department operational handoff', values: [F, T, T] },
				{ label: 'Custom dashboards', values: [F, '5', 'Unlimited'] }
			]
		},
		{
			title: 'Integrations & platform',
			icon: '🔌',
			rows: [
				{ label: 'Integrations (HubSpot, Zoho, Slack…)', values: ['Unlimited', 'Unlimited', 'Unlimited + Custom'] },
				{ label: 'Mobile apps (iOS / Android)', values: [T, T, T] },
				{ label: 'Desktop app', values: [T, T, T] },
				{ label: 'Workflow automations', values: ['10', 'Unlimited', 'Unlimited'] },
				{ label: 'Storage', values: ['50 GB', '500 GB', 'Unlimited'] },
				{ label: 'API access', values: [F, T, T] }
			]
		},
		{
			title: 'Security & support',
			icon: '🛡️',
			rows: [
				{ label: 'Server tier (DigitalOcean)', values: ['Shared', 'Dedicated HA', 'Private cluster'] },
				{ label: 'Uptime SLA', values: [F, '99.9%', '99.95%'] },
				{ label: 'SSO / SAML', values: [F, T, T] },
				{ label: 'Audit logs', values: [F, T, T] },
				{ label: 'Data residency choice', values: [F, T, 'Choice + on-prem'] },
				{ label: 'Support', values: ['Email', 'Email + Chat', 'Dedicated CSM'] },
				{ label: 'Onboarding', values: ['Self-serve', 'Guided', 'White-glove'] }
			]
		}
	];
</script>

<svelte:head>
	<title>Affordable AI Business Software Pricing for SMBs | Telugo</title>

	<meta
		name="description"
		content="Explore Telugo pricing plans for AI-powered CRM, Projects, Manufacturing, HR, Payroll and Finance management. Flexible business software pricing built for growing SMBs."
	/>

	<meta
		name="keywords"
		content="AI business software pricing, SMB ERP pricing, CRM software pricing, HR payroll software pricing, finance automation pricing, SaaS pricing for SMBs, business operating system pricing"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="Telugo" />
	<meta name="publisher" content="Telugo" />

	<link rel="canonical" href="https://www.telugo.ai/pricing" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.telugo.ai/pricing" />
	<meta property="og:title" content="Affordable AI Business Software Pricing for SMBs | Telugo" />
	<meta
		property="og:description"
		content="Compare Telugo pricing plans for AI-native CRM, Projects, Manufacturing, HR, Payroll and Finance software built for SMBs."
	/>
	<meta property="og:image" content="https://www.telugo.ai/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.telugo.ai/pricing" />
	<meta name="twitter:title" content="Affordable AI Business Software Pricing for SMBs | Telugo" />
	<meta
		name="twitter:description"
		content="Flexible pricing plans for SMBs looking to streamline operations with AI-powered business software."
	/>
	<meta name="twitter:image" content="https://www.telugo.ai/og-image.jpg" />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "Telugo Pricing",
			"url": "https://www.telugo.ai/pricing",
			"description": "Pricing plans for Telugo's AI-native business operating system for SMBs.",
			"publisher": {
				"@type": "Organization",
				"name": "Telugo",
				"url": "https://www.telugo.ai"
			},
			"mainEntity": {
				"@type": "SoftwareApplication",
				"name": "Telugo",
				"applicationCategory": "BusinessApplication",
				"operatingSystem": "Web",
				"offers": {
					"@type": "Offer",
					"price": "0",
					"priceCurrency": "USD"
				}
			}
		}
	</script>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:40px;text-align:center">
	<div class="container">
		<p class="label reveal" style="justify-content:center">Pricing</p>
		<h1 class="d1 reveal" style="max-width:640px;margin:0 auto 16px;text-align:center">Choose your <span class="accent">plan.</span></h1>
		<p class="body-l reveal" style="max-width:520px;margin:0 auto 32px;text-align:center">AI-powered work OS for SMBs. Sales, Projects, Manufacturing, HR, Finance — with AI built in.</p>
		<div class="price-toggle reveal">
			<div class="price-toggle-inner">
				<button class="ptog" class:on={period === 'm'} onclick={() => period = 'm'}>Monthly</button>
				<button class="ptog" class:on={period === 'a'} onclick={() => period = 'a'}>Annual (Save 10%)</button>
			</div>
		</div>
	</div>
</section>

<section class="section" style="padding-top:0">
	<div class="container">
		<div class="grid-3">
			<!-- Plus -->
			<div class="price-card">
				<div class="pr-name">Plus</div>
				<div class="pr-desc">For small teams getting started</div>
				<div class="pr-amount">{prices.plus[period]}<span>/user/mo</span></div>
				<div class="pr-period">{period === 'a' ? 'Billed annually · save 10%' : 'Billed monthly'}</div>
				<div class="pr-btn-group">
					<a class="pr-btn pr-btn-fill" href="/checkout?plan=plus&period={period}">Buy Now</a>
					<a class="pr-btn pr-btn-line" href="/checkout?plan=plus&period={period}&trial=true">Start Free Trial</a>
				</div>
				<div class="pr-feats">
					<div class="pr-feat">5,000 AI credits / month (DeepSeek V3)</div>
					<div class="pr-feat">Full CRM, Projects, Manufacturing, HR & Accounts</div>
					<div class="pr-feat">AI lead scoring & recommendations</div>
					<div class="pr-feat">50 lead call transcripts / mo</div>
					<div class="pr-feat">Unlimited integrations</div>
					<div class="pr-feat">50 GB storage · Email support</div>
				</div>
			</div>
			<!-- Ultra (featured) -->
			<div class="price-card featured">
				<div class="pr-name">Ultra</div>
				<div class="pr-desc">For growing businesses scaling fast</div>
				<div class="pr-amount">{prices.ultra[period]}<span>/user/mo</span></div>
				<div class="pr-period">{period === 'a' ? 'Billed annually · save 10%' : 'Billed monthly'}</div>
				<div class="pr-btn-group">
					<a class="pr-btn pr-btn-fill" href="/checkout?plan=ultra&period={period}">Buy Now</a>
					<a class="pr-btn pr-btn-line" href="/checkout?plan=ultra&period={period}&trial=true">Start Free Trial</a>
				</div>
				<div class="pr-feats">
					<div class="pr-feat">25,000 AI credits / month (GPT-5.4 frontier)</div>
					<div class="pr-feat">Everything in Plus + advanced AI</div>
					<div class="pr-feat">Sales-to-Delivery handoff</div>
					<div class="pr-feat">Cash flow prediction & profitability</div>
					<div class="pr-feat">Unlimited transcripts & automations</div>
					<div class="pr-feat">SSO/SAML · 99.9% SLA · Email + Chat</div>
				</div>
			</div>
			<!-- Enterprise -->
			<div class="price-card">
				<div class="pr-name">Enterprise</div>
				<div class="pr-desc">For organizations with custom needs</div>
				<div class="pr-amount">Custom</div>
				<div class="pr-period">Volume pricing · 25+ users</div>
				<div class="pr-btn-group">
					<a class="pr-btn pr-btn-fill" href="/contact">Contact Sales</a>
					<a class="pr-btn pr-btn-line" href="/contact">Talk to Sales</a>
				</div>
				<div class="pr-feats">
					<div class="pr-feat">1,00,000+ AI credits (custom models)</div>
					<div class="pr-feat">Unlimited users, dashboards & storage</div>
					<div class="pr-feat">Private cluster · 99.95% SLA</div>
					<div class="pr-feat">Data residency + on-prem options</div>
					<div class="pr-feat">Dedicated CSM · White-glove onboarding</div>
					<div class="pr-feat">Custom integrations & API</div>
				</div>
			</div>
		</div>
		<p class="body-s reveal" style="text-align:center;margin-top:20px">
			💡 Per-seat pricing — User 1 pays full price; users 2+ get 20% off monthly or 30% off annual. Annual billing adds another 10% off.
		</p>
	</div>
</section>

<!-- Comparison table -->
<section class="section section-alt" style="padding-top:clamp(64px,9vw,120px)">
	<div class="container">
		<h2 class="d2 reveal" style="text-align:center;margin:0 auto 16px;max-width:560px">Compare <span class="accent">every feature.</span></h2>
		<p class="body-l reveal" style="max-width:520px;margin:0 auto 48px;text-align:center">Everything that's included in each plan, side-by-side.</p>

		<div class="cmp-wrap">
			<div class="cmp-table">
				<!-- Sticky header row -->
				<div class="cmp-head">
					<div class="cmp-head-cell cmp-feat-col"></div>
					<div class="cmp-head-cell">
						<div class="cmp-h-name">Plus</div>
						<div class="cmp-h-price">{prices.plus[period]}<span>/user/mo</span></div>
						<a class="cmp-h-btn cmp-h-btn-fill" href="/checkout?plan=plus&period={period}">Buy Now</a>
					</div>
					<div class="cmp-head-cell cmp-pop">
						<span class="cmp-pop-tag">Most Popular</span>
						<div class="cmp-h-name">Ultra</div>
						<div class="cmp-h-price">{prices.ultra[period]}<span>/user/mo</span></div>
						<a class="cmp-h-btn cmp-h-btn-fill" href="/checkout?plan=ultra&period={period}">Buy Now</a>
					</div>
					<div class="cmp-head-cell">
						<div class="cmp-h-name">Enterprise</div>
						<div class="cmp-h-price cmp-h-custom">Custom</div>
						<a class="cmp-h-btn cmp-h-btn-line" href="/contact">Contact Sales</a>
					</div>
				</div>

				{#each groups as g}
					<div class="cmp-group-row">
						<span class="cmp-group-icon">{g.icon}</span>
						<span class="cmp-group-title">{g.title}</span>
					</div>
					{#each g.rows as r}
						<div class="cmp-row">
							<div class="cmp-cell cmp-feat-col cmp-feat-label">{r.label}</div>
							{#each r.values as v, i}
								<div class="cmp-cell" class:cmp-pop-col={i === 1}>
									{#if v === true}
										<span class="cmp-yes" aria-label="Included">✓</span>
									{:else if v === false}
										<span class="cmp-no" aria-label="Not included">—</span>
									{:else}
										<span class="cmp-val">{v}</span>
									{/if}
								</div>
							{/each}
						</div>
					{/each}
				{/each}
			</div>
		</div>

		<div class="cmp-notes reveal">
			<div class="cmp-note"><strong>1 AI credit = 100 tokens.</strong> Plus uses DeepSeek V3 (cheaper, faster bulk). Ultra uses GPT-5.4 (frontier, best quality).</div>
			<div class="cmp-note">Extra credit packs start at <strong>₹500</strong>. Amount of credits depends on plan's underlying AI model.</div>
			<div class="cmp-note">All plans include <strong>every Telugo module</strong> — Contacts, Leads, Projects, Manufacturing, HR, Accounts, Vendors, Org Admin.</div>
			<div class="cmp-note"><strong>Enterprise:</strong> custom credits, dedicated infra, on-prem options, white-glove onboarding — talk to sales.</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="d2 reveal" style="text-align:center;margin:0 auto 48px;max-width:400px">Questions? <span class="accent">Answered.</span></h2>
		<div class="faq-w">
			<div class="faq-i" class:open={openFaq === 0}>
				<div class="faq-q" onclick={() => toggleFaq(0)}>What are AI credits?<span>+</span></div>
				<div class="faq-a">AI credits power Telugo's intelligent features: lead scoring, recommendations, insights, and Ask Telugo. 1 credit = 100 tokens. Each plan includes a monthly allocation; extra credit packs start at ₹500.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 1}>
				<div class="faq-q" onclick={() => toggleFaq(1)}>How does per-seat pricing work?<span>+</span></div>
				<div class="faq-a">Every user counts. User 1 pays full price. Users 2 onwards get 20% off (monthly) or 30% off (annual). Annual billing adds another 10% off the total.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 2}>
				<div class="faq-q" onclick={() => toggleFaq(2)}>Can I switch plans later?<span>+</span></div>
				<div class="faq-a">Yes. Upgrade or downgrade anytime. Changes apply at the next billing cycle and your data is always preserved.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 3}>
				<div class="faq-q" onclick={() => toggleFaq(3)}>Is there a free trial?<span>+</span></div>
				<div class="faq-a">Yes — Plus and Ultra both include a 7-day free trial with full access. No credit card required to start.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 4}>
				<div class="faq-q" onclick={() => toggleFaq(4)}>Do you offer startup or NGO discounts?<span>+</span></div>
				<div class="faq-a">Up to 50% off for early-stage startups, NGOs, and women-led businesses. Contact our team for details.</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Comparison table — built on top of the global design tokens */
	.cmp-wrap {
		border: 1px solid var(--bd);
		border-radius: 16px;
		background: var(--bg);
		overflow: hidden;
	}
	.cmp-table {
		display: grid;
		grid-template-columns: minmax(220px, 1.6fr) 1fr 1fr 1fr;
	}
	.cmp-head {
		display: contents;
	}
	.cmp-head-cell {
		padding: 24px 20px 20px;
		background: var(--bg2);
		border-bottom: 1px solid var(--bd);
		position: sticky;
		top: 56px;
		z-index: 5;
	}
	.cmp-head-cell.cmp-pop {
		background: var(--r-g);
		position: relative;
	}
	.cmp-head-cell:not(:first-child) {
		text-align: center;
		border-left: 1px solid var(--bd);
	}
	.cmp-pop-tag {
		display: inline-block;
		background: var(--r);
		color: #fff;
		font-size: 10px;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		padding: 3px 10px;
		border-radius: 20px;
		margin-bottom: 8px;
	}
	.cmp-h-name {
		font-size: 18px;
		font-weight: 900;
		letter-spacing: -0.02em;
		color: var(--t1);
		margin-bottom: 6px;
	}
	.cmp-h-price {
		font-size: 22px;
		font-weight: 900;
		letter-spacing: -0.03em;
		color: var(--t1);
		line-height: 1;
		margin-bottom: 14px;
	}
	.cmp-h-price span {
		font-size: 12px;
		font-weight: 500;
		color: var(--t3);
	}
	.cmp-h-custom { font-size: 22px; }
	.cmp-h-btn {
		display: inline-block;
		font-family: var(--sans);
		font-size: 12px;
		font-weight: 700;
		padding: 8px 18px;
		border-radius: 8px;
		text-decoration: none;
		transition: all .25s var(--ease);
	}
	.cmp-h-btn-fill {
		background: var(--r);
		color: #fff;
		border: 1px solid var(--r);
	}
	.cmp-h-btn-fill:hover { background: var(--r-d); }
	.cmp-h-btn-line {
		background: transparent;
		color: var(--t1);
		border: 1.5px solid var(--bdh);
	}
	.cmp-h-btn-line:hover { background: var(--sf); border-color: var(--t3); }

	.cmp-group-row {
		grid-column: 1 / -1;
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 16px 20px;
		background: var(--sf);
		border-top: 1px solid var(--bd);
		border-bottom: 1px solid var(--bd);
		font-size: 11px;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--t2);
	}
	.cmp-group-icon { font-size: 14px; }

	.cmp-row {
		display: contents;
	}
	.cmp-row:hover .cmp-cell { background: var(--sfh); }
	.cmp-cell {
		padding: 14px 20px;
		font-size: 14px;
		color: var(--t2);
		border-bottom: 1px solid var(--bd);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		min-height: 52px;
		transition: background .15s;
	}
	.cmp-cell:not(.cmp-feat-col) {
		border-left: 1px solid var(--bd);
	}
	.cmp-cell.cmp-pop-col { background: var(--r-g); }
	.cmp-cell.cmp-pop-col:hover { background: rgba(252, 115, 38, .12); }
	.cmp-feat-label {
		justify-content: flex-start;
		text-align: left;
		color: var(--t1);
		font-weight: 500;
	}
	.cmp-yes {
		color: var(--tq);
		font-weight: 800;
		font-size: 16px;
	}
	.cmp-no {
		color: var(--t4);
		font-weight: 600;
	}
	.cmp-val {
		font-size: 13px;
		color: var(--t1);
		font-weight: 500;
	}

	.cmp-notes {
		margin-top: 32px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
	}
	.cmp-note {
		font-size: 13px;
		color: var(--t2);
		line-height: 1.65;
		padding: 14px 18px;
		background: var(--bg);
		border: 1px solid var(--bd);
		border-radius: 10px;
	}
	.cmp-note strong { color: var(--t1); font-weight: 700; }

	@media (max-width: 1024px) {
		.cmp-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
		.cmp-table { min-width: 760px; }
		.cmp-head-cell { position: static; }
		.cmp-notes { grid-template-columns: 1fr; }
	}
	@media (max-width: 768px) {
		.cmp-cell { padding: 12px 14px; font-size: 13px; min-height: 48px; }
		.cmp-head-cell { padding: 18px 14px 16px; }
		.cmp-h-price { font-size: 18px; }
	}
</style>
