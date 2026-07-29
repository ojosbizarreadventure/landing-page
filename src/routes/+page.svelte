<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';

	/* ── Hero Carousel ── */
	const heroSlides = [
		{
			headline: 'Stop managing work.<br>Start <span class="accent">growing.</span>',
			desc: 'Telugo unifies Sales, Projects, Manufacturing, HR, and Finance into one AI-native OS — giving every team one source of truth and an engine that thinks ahead.'
		},
		{
			headline: 'From first lead to<br><span class="accent">last shipment.</span>',
			desc: 'Quote it, plan it, make it, ship it, invoice it. Telugo runs the whole chain in one system — so the shop floor and the sales desk finally see the same truth.'
		},
		{
			headline: 'Ten tools. Zero context.<br>A <span class="accent">better way</span> exists.',
			desc: 'Your CRM, production board, payroll, and invoices live in silos. Decisions slow down. Telugo brings everything into one intelligent workspace.'
		}
	];

	let activeSlide = $state(0);
	let slideTimer: ReturnType<typeof setInterval>;
	let progressKey = $state(0); // bumped to restart CSS animation

	function goToSlide(i: number) {
		activeSlide = i;
		progressKey++;
		resetTimer();
	}

	function nextSlide() {
		activeSlide = (activeSlide + 1) % heroSlides.length;
		progressKey++;
	}

	function resetTimer() {
		clearInterval(slideTimer);
		slideTimer = setInterval(nextSlide, 5000);
	}

	/* ── Agent Demo ── */
	interface AgentMsg {
		html: string;
		type: 'ai' | 'user';
	}

	let agentMessages: AgentMsg[] = $state([
		{ html: '<strong>Production:</strong> PO-104 (Drive Shaft A2) is <em>paused on material</em>. Issue Steel Rod 12mm today and the 120 pc order due 20/07 restarts.', type: 'ai' },
		{ html: '<strong>Inventory:</strong> MS Sheet 2mm below reorder level &mdash; <em>18 kg of 60 kg</em>. PO-102 starts 21/07 and needs 46 kg.', type: 'ai' },
		{ html: '<strong>Revenue:</strong> Invoice #INV-2847 overdue <em>18 days</em>. Auto follow-up recommended today.', type: 'ai' }
	]);
	let agentInput = $state('');
	let thinking = $state(false);
	let usedPrompts: string[] = $state([]);
	let msgsEl: HTMLDivElement;

	const responses: Record<string, string> = {
		'what should i focus on today?': "Here's your priority stack for today:<br><br><strong>1.</strong> Issue Steel Rod 12mm for PO-104 &mdash; it unblocks a <em>120 pc order due 20/07</em><br><strong>2.</strong> Order 28 kg MS Sheet 2mm before PO-102 starts 21/07<br><strong>3.</strong> Follow up on TechNova invoice, 18 days overdue (₹3.2L)<br><strong>4.</strong> Approve the payroll batch, deadline EOD",
		'why is po-104 delayed?': "<strong>PO-104 &middot; Drive Shaft A2</strong> has been paused <em>3 days</em>.<br><br>&bull; Blocked on Steel Rod 12mm &mdash; not issued to the floor<br>&bull; 120 pc for Suraj Fabricators, due 20/07<br>&bull; Stock is available: 340 m on hand<br><br>Issuing material today recovers the date. Shall I draft the issue slip?",
		'show overdue invoices': 'You have <em>2 overdue invoices</em> totaling ₹5.0L:<br><br><strong>INV-2847</strong> &middot; TechNova &middot; ₹3.2L &middot; 18 days overdue<br><strong>INV-2851</strong> &middot; GreenLeaf &middot; ₹1.8L &middot; 8 days overdue<br><br>Shall I trigger automated follow-ups?'
	};
	const defaultResponse = "In the full version, I'd pull live data from your Sales, Projects, Manufacturing, HR, and Finance modules to answer this instantly. <strong>Talk to our team to see it live &rarr;</strong>";

	const quickPromptsList = [
		'What should I focus on today?',
		'Why is PO-104 delayed?',
		'Show overdue invoices'
	];

	function scrollMsgs() {
		if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight;
	}

	async function sendAgent() {
		const msg = agentInput.trim();
		if (!msg || thinking) return;
		agentMessages.push({ html: msg, type: 'user' });
		agentInput = '';
		thinking = true;
		await tick();
		scrollMsgs();
		setTimeout(async () => {
			thinking = false;
			const response = responses[msg.toLowerCase()] || defaultResponse;
			agentMessages.push({ html: response, type: 'ai' });
			await tick();
			scrollMsgs();
		}, 1000 + Math.random() * 500);
	}

	function quickAgent(text: string) {
		usedPrompts.push(text);
		agentInput = text;
		sendAgent();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') sendAgent();
	}

	onMount(() => {
		// Start hero carousel
		resetTimer();

		setTimeout(() => {
			document.querySelectorAll('.dm-bar-fill').forEach((el) => {
				const w = (el as HTMLElement).getAttribute('data-w');
				if (w) (el as HTMLElement).style.width = w;
			});
		}, 800);

		return () => clearInterval(slideTimer);
	});
</script>

<svelte:head>
	<title>India's First AI-Native Business Superapp for SMBs | Telugo</title>    
	

	<meta
		name="description"
		content="Telugo is India's First AI-Native Business Superapp unifying CRM, Projects, Manufacturing, HR, Payroll & Accounting in one platform. Built for SMBs with 50–500 employees. Stop managing work. Start growing."
	/>

	<meta
	name="keywords"
	content="AI business software India, AI-native CRM India, business superapp for SMBs, manufacturing ERP India, production planning software India, MRP software for SMBs, shop floor management software, project management software India, HR software India, payroll software India, accounting software India, all-in-one business platform India, AI operating system for businesses, Telugo business OS"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="Telugo AI" />

	<meta name="publisher" content="Telugo AI" />

	<link rel="canonical" href="https://www.telugo.ai/" />

	<!-- Open Graph -->
	<meta property="og:title" content="Telugo | AI-Native Business Operating System for SMBs" />

	<meta
		property="og:description"
		content="One AI-native platform for Sales, Projects, Manufacturing, HR, and Finance."
	/>

	<meta property="og:url" content="https://www.telugo.ai/" />

	<meta property="og:type" content="website" />

	<meta property="og:site_name" content="Telugo AI" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />

	<meta
		name="twitter:title"
		content="Telugo | AI-Native Business Operating System for SMBs"
	/>

	<meta
		name="twitter:description"
		content="One AI-native platform for Sales, Projects, Manufacturing, HR, and Finance."
	/>

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Telugo AI",
			"url": "https://www.telugo.ai",
			"applicationCategory": "BusinessApplication",
			"operatingSystem": "Web",
			"description": "AI-native business operating system for SMBs, covering sales, projects, manufacturing, HR and finance.",
			"publisher": {
				"@type": "Organization",
				"name": "Telugo AI"
			}
		}
	</script>
</svelte:head>

<!-- HERO -->
<section class="hero">
	<!-- Aurora mesh background -->
	<div class="hero-aurora" aria-hidden="true">
		<div class="aurora-blob aurora-a"></div>
		<div class="aurora-blob aurora-b"></div>
		<div class="aurora-blob aurora-c"></div>
		<div class="aurora-grid"></div>
	</div>

	<div class="container">
		<div class="hero-content">
			<div class="hero-badge reveal"><span class="hero-badge-dot"></span><span>Now in Early Access</span></div>

			<!-- Carousel slides -->
			<div class="hero-carousel">
				{#each heroSlides as slide, i}
					<div class="hero-slide" class:on={activeSlide === i}>
						<h1 class="d1">{@html slide.headline}</h1>
						<p class="body-l hero-desc">{slide.desc}</p>
					</div>
				{/each}
			</div>

			<!-- Progress bars -->
			{#key progressKey}
				<div class="hero-progress">
					{#each heroSlides as _, i}
						<button class="hero-prog-bar" class:on={activeSlide === i} onclick={() => goToSlide(i)} aria-label="Go to slide {i + 1}">
							<span class="hero-prog-fill" class:on={activeSlide === i}></span>
						</button>
					{/each}
				</div>
			{/key}

			<div class="hero-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/contact">Talk to Sales &rarr;</a>
				<a class="btn-outline-lg" href="/contact">Book a Demo</a>
			</div>
			<div class="hero-proof reveal stagger">
				<div class="hero-proof-stat"><strong>12,400+</strong><span>Tasks automated monthly</span></div>
				<div class="hero-proof-sep"></div>
				<div class="hero-proof-stat"><strong>3.2hrs</strong><span>Saved per employee/day</span></div>
				<div class="hero-proof-sep"></div>
				<div class="hero-proof-stat"><strong>94%</strong><span>Teams report less tool switching</span></div>
			</div>
		</div>
	</div>
</section>

<!-- Interactive Product Demo -->
<section class="demo-section">
	<div class="container">
		<div class="demo-heading reveal">
			<p class="label">Live preview</p>
			<h2 class="d3">Ask it anything about your day. <span class="accent">Try it yourself.</span></h2>
		</div>
		<div class="demo-box reveal">
			<div class="demo-bar">
				<div class="demo-dot"></div><div class="demo-dot"></div><div class="demo-dot"></div>
				<div style="margin-left:12px;display:flex;align-items:center;gap:6px">
					<Logo height={16} wordmark={false} />
					<div class="demo-url" style="margin-left:0">app.telugo.ai</div>
				</div>
			</div>
			<div class="demo-body">
				<div class="demo-main">
					<div class="demo-greeting">Good morning, Priya.<small>Saturday, 19 July &middot; Shree Precision Engineering &middot; 3 things need you</small></div>
					<div class="demo-metrics">
						<div class="dm-card"><div class="dm-icon">&#127981;</div><div class="dm-label">Factory Score</div><div class="dm-val">78</div><div class="dm-sub">On-time &amp; quality holding</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="78%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#128176;</div><div class="dm-label">Order Book</div><div class="dm-val red">₹3.86L</div><div class="dm-sub warn">2 open &middot; unplanned</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="85%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#9881;&#65039;</div><div class="dm-label">Today's Production</div><div class="dm-val">1,240<span style="font-size:14px;font-weight:600;letter-spacing:0"> pcs</span></div><div class="dm-sub warn">2 delayed &middot; 1 quality alert</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="66%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#128196;</div><div class="dm-label">Pending Invoices</div><div class="dm-val">₹8.2L</div><div class="dm-sub warn">2 overdue 15+ days</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="45%"></div></div></div>
					</div>
				</div>
				<div class="demo-agent">
					<div class="agent-head"><div class="agent-dot"></div><div class="agent-title">Telugo AI</div></div>
					<div class="agent-msgs" bind:this={msgsEl}>
						{#each agentMessages as msg}
							<div class="agent-msg" class:agent-msg-user={msg.type === 'user'}>
								{@html msg.html}
							</div>
						{/each}
						{#if thinking}
							<div class="agent-msg agent-msg-thinking">Thinking...</div>
						{/if}
					</div>
					<div class="agent-input-wrap">
						<input class="agent-input" placeholder="Ask Telugo anything..." bind:value={agentInput} onkeydown={handleKeydown} />
						<button class="agent-send" onclick={sendAgent} aria-label="Send message">
							<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
						</button>
					</div>
					<div class="agent-prompts">
						{#each quickPromptsList as prompt}
							<button class="agent-prompt" onclick={() => quickAgent(prompt)} disabled={usedPrompts.includes(prompt)}>{prompt}</button>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Social Proof Strip -->
<div class="proof-strip">
	<div class="container">
		<div class="proof-grid reveal stagger">
			<div class="proof-item"><div class="proof-val">50+</div><div class="proof-label">Companies in early access</div></div>
			<div class="proof-item"><div class="proof-val">1</div><div class="proof-label">Record. Order to invoice</div></div>
			<div class="proof-item"><div class="proof-val">5</div><div class="proof-label">Modules, one platform</div></div>
			<div class="proof-item"><div class="proof-val">0</div><div class="proof-label">Re-entry between teams</div></div>
		</div>
	</div>
</div>

<!-- Problem -->
<section class="section">
	<div class="container">
		<p class="label reveal">The problem</p>
		<h2 class="d2 reveal" style="margin-bottom:20px">Your business runs on<br><span class="accent">10 disconnected tools.</span></h2>
		<p class="body-m reveal" style="max-width:480px;margin-bottom:48px">That's why context gets lost, machines sit idle, and decisions arrive a week late.</p>
		<div class="grid-3 reveal">
			<div class="cell"><div class="prob-num">01</div><div class="prob-t">Data lives everywhere</div><div class="prob-d">Orders in one tool. The production plan on a whiteboard. HR on spreadsheets. Finance on WhatsApp. Nobody has the full picture, so everybody guesses.</div><div class="prob-tag">&rarr; Telugo unifies everything</div></div>
			<div class="cell"><div class="prob-num">02</div><div class="prob-t">You find out too late</div><div class="prob-d">The material shortage surfaces on the morning the machine goes idle. The overdue invoice surfaces at month close. By then the cost is already sunk.</div><div class="prob-tag">&rarr; Telugo flags it days earlier</div></div>
			<div class="cell"><div class="prob-num">03</div><div class="prob-t">Growth hits a ceiling</div><div class="prob-d">Every new tool adds another re-entry, another export, another person who has to be asked. Doubling output means doubling the chaos.</div><div class="prob-tag">&rarr; Telugo scales with you</div></div>
		</div>
	</div>
</section>

<!-- Modules -->
<section class="section section-alt">
	<div class="container">
		<p class="label reveal">The platform</p>
		<h2 class="d2 reveal" style="margin-bottom:20px">One system. <span class="accent">Every department.</span></h2>
		<p class="body-m reveal" style="max-width:480px;margin-bottom:48px">Unified from day one, not stitched together. Five modules, one record, one AI brain reading across all of them.</p>
			<div class="grid-2 reveal">
				<a class="cell-alt mod mod-sales" href="/product"><div class="mod-head"><div class="mod-name">Sales &amp; CRM</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">AI-scored leads, automated quotes, call transcripts, and a shared client workspace that hands off straight into delivery.</div><div class="mod-tags"><span class="mod-tag">Lead Scoring</span><span class="mod-tag">Quotes</span><span class="mod-tag">Client Portal</span><span class="mod-tag">Pipeline Analytics</span></div></a>
				<a class="cell-alt mod mod-projects" href="/product"><div class="mod-head"><div class="mod-name">Smart Projects</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">AI-driven scope planning, real-time deviation alerts, and direct sales-to-delivery handoff.</div><div class="mod-tags"><span class="mod-tag">Scope Planning</span><span class="mod-tag">Deviation Alerts</span><span class="mod-tag">Team KPIs</span><span class="mod-tag">Client Sign-off</span></div></a>
				<a class="cell-alt mod mod-hr" href="/product"><div class="mod-head"><div class="mod-name">HR &amp; People</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">Skill-matched hiring, automated payroll, shift and attendance tracking, and performance monitoring.</div><div class="mod-tags"><span class="mod-tag">Hiring</span><span class="mod-tag">Payroll</span><span class="mod-tag">Shifts</span><span class="mod-tag">Performance</span></div></a>
				<a class="cell-alt mod mod-finance" href="/product"><div class="mod-head"><div class="mod-name">Finance &amp; Accounts</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">Order-linked invoicing, bank reconciliation, landed cost, and predictive cash flow dashboards.</div><div class="mod-tags"><span class="mod-tag">Invoicing</span><span class="mod-tag">Reconciliation</span><span class="mod-tag">Cash Flow</span><span class="mod-tag">P&amp;L</span></div></a>

				<!-- Manufacturing: the newest module, given the widest surface -->
				<a class="mod-feature mod mod-mfg" href="/product">
					<div class="mod-feature-inner">
						<div class="mod-head" style="margin-bottom:14px">
							<div style="display:flex;align-items:center;gap:12px">
								<div class="mod-name">Manufacturing</div>
								<span class="mod-new">New</span>
							</div>
							<span class="mod-arrow">&rarr;</span>
						</div>
						<div class="mod-d" style="max-width:660px;margin-bottom:0">
							The shop floor, finally connected to the rest of the business. A sales order becomes a production order becomes an invoice &mdash; without a single re-entry. Telugo watches material, capacity and quality together, and tells you which job to release first.
						</div>
						<div class="mod-feature-grid">
							<div class="mfg-tile">
								<div class="mfg-tile-k">Sales Orders</div>
								<div class="mfg-tile-v">Kanban from Open &rarr; In production &rarr; Fulfilled &rarr; Invoiced, with order book value and unplanned orders surfaced at the top.</div>
							</div>
							<div class="mfg-tile">
								<div class="mfg-tile-k">Production</div>
								<div class="mfg-tile-v">Planned, In progress, QC and Done. Every work order carries its quantity, its due date, and the reason it&rsquo;s paused.</div>
							</div>
							<div class="mfg-tile">
								<div class="mfg-tile-k">Products &amp; Stock</div>
								<div class="mfg-tile-v">Finished goods and raw material in one catalog &mdash; margin per SKU, reorder levels, and live inventory value.</div>
							</div>
							<div class="mfg-tile">
								<div class="mfg-tile-k">Factory Score</div>
								<div class="mfg-tile-v">One number for on-time delivery and quality &mdash; with the ranked actions that will actually move it.</div>
							</div>
						</div>
						<div class="mod-tags" style="margin-top:20px">
							<span class="mod-tag">Bill of Materials</span>
							<span class="mod-tag">Material Shortage Alerts</span>
							<span class="mod-tag">Work Orders</span>
							<span class="mod-tag">Quality Checks</span>
							<span class="mod-tag">Reorder Levels</span>
							<span class="mod-tag">Batch Traceability</span>
							<span class="mod-tag">Morning Brief</span>
						</div>
					</div>
				</a>
			</div>
		<!-- Telugo Brain: spans full width inside the same grid wrapper -->
		<div class="grid-brain reveal">
			<div style="display:flex;align-items:center;gap:24px;padding:36px 32px;position:relative;z-index:1">
				<div style="flex-shrink:0;width:56px;height:56px;border-radius:14px;background:linear-gradient(145deg,var(--tq2),var(--tq-brand));display:flex;align-items:center;justify-content:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),var(--lift-2)">
					<Logo height={28} white wordmark={false} />
				</div>
				<div style="flex:1">
					<div style="font-size:13px;font-weight:900;letter-spacing:-.02em;color:var(--t1);margin-bottom:4px">Telugo Brain &mdash; the intelligence every module shares</div>
					<div style="font-size:14px;line-height:1.65;color:var(--t2)">One intelligence layer across Sales, Projects, Manufacturing, HR and Finance. It reads your order book against your material stock and your capacity, spots the pattern before it becomes a delay, and hands you a ranked list of what to do. It drafts; you approve. Telugo never acts on your business without you.</div>
				</div>
			</div>
			<div style="position:absolute;top:0;right:0;width:200px;height:100%;background:radial-gradient(circle at 100% 50%,var(--tq-g),transparent 70%);pointer-events:none"></div>
			<div style="display:flex;gap:6px;padding:0 32px 24px;flex-wrap:wrap">
				<span class="mod-tag" style="border-color:var(--tq-bd);color:var(--tq);background:var(--tq-g)">Cross-department AI</span>
				<span class="mod-tag" style="border-color:var(--tq-bd);color:var(--tq);background:var(--tq-g)">Risk Detection</span>
				<span class="mod-tag" style="border-color:var(--tq-bd);color:var(--tq);background:var(--tq-g)">Ranked Recommendations</span>
				<span class="mod-tag" style="border-color:var(--tq-bd);color:var(--tq);background:var(--tq-g)">Executive Insights</span>
				<span class="mod-tag" style="border-color:var(--tq-bd);color:var(--tq);background:var(--tq-g)">Approve-before-act</span>
			</div>
		</div>
	</div>
</section>

<!-- Testimonial -->
<section class="testi">
	<div class="container">
		<div class="testi-inner reveal">
			<p class="testi-quote">"We ran the shop floor on a whiteboard and the order book on Tally. Telugo put them in the same place. I stopped finding out about a material shortage on the day the machine went idle."</p>
			<p class="testi-name">Rahul Menon</p>
			<p class="testi-role">Director, Shree Precision Engineering &middot; Pune &middot; 120 employees</p>
		</div>
	</div>
</section>

<!-- Comparison -->
<section class="section">
	<div class="container">
		<p class="label reveal">Why Telugo</p>
		<h2 class="d2 reveal" style="margin-bottom:48px">Not another tool.<br><span class="accent">A new category.</span></h2>
		<div class="grid-3 reveal">
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--tq);margin-bottom:10px">vs Task Tools</div><div class="d3" style="margin-bottom:10px">Smarter <span class="accent">execution</span></div><div class="body-s">Monday & ClickUp track tasks. Telugo automates updates, detects deviations, and recommends actions.</div></div>
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--tq);margin-bottom:10px">vs ERPs</div><div class="d3" style="margin-bottom:10px">Simpler, <span class="accent">faster</span></div><div class="body-s">Zoho & Odoo need months of setup and a consultant. Telugo works day one, with AI reasoning across every module.</div></div>
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--tq);margin-bottom:10px">vs Chat Tools</div><div class="d3" style="margin-bottom:10px">Context that <span class="accent">sticks</span></div><div class="body-s">WhatsApp & Email lose context. In Telugo, every message stays tied to its project and team.</div></div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-sec">
	<div class="container">
		<div class="cta-inner">
			<h2 class="d2 reveal">Stop juggling.<br>Start <span class="accent">building.</span></h2>
			<p class="body-l reveal" style="margin-top:16px">Tell us how you run today &mdash; we'll show you the same day, running in Telugo.</p>
			<div class="cta-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/contact">Talk to Sales &rarr;</a>
				<a class="btn-outline-lg" href="/contact">Book a Demo</a>
			</div>
		</div>
	</div>
</section>
