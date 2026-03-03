<script lang="ts">
	import { onMount, tick } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';

	/* ── Hero Carousel ── */
	const heroSlides = [
		{
			headline: 'Stop managing work.<br>Start <span class="accent">growing.</span>',
			desc: 'OJO unifies Sales, Projects, HR, and Finance into one AI-native OS — giving every team one source of truth and an engine that thinks ahead.'
		},
		{
			headline: 'Ten tools. Zero context.<br>A <span class="accent">better way</span> exists.',
			desc: 'Your CRM, project tracker, payroll, and invoices live in silos. Decisions slow down. OJO brings everything into one intelligent workspace.'
		},
		{
			headline: 'One platform for your<br><span class="accent">entire</span> business.',
			desc: 'From lead capture to invoice collection, OJO connects every department into one unified workflow — powered by AI that sees the full picture.'
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
		{ html: '<strong>Project alert:</strong> BrandSync is <em>3 days behind</em>. Recommend reassigning 2 tasks from Arjun &rarr; Meera to recover timeline.', type: 'ai' },
		{ html: '<strong>Revenue:</strong> Invoice #INV-2847 overdue <em>18 days</em>. Auto follow-up recommended today.', type: 'ai' },
		{ html: '<strong>Hiring:</strong> 2 candidates matched for UX Designer role. Interview slots open Thursday.', type: 'ai' }
	]);
	let agentInput = $state('');
	let thinking = $state(false);
	let usedPrompts: string[] = $state([]);
	let msgsEl: HTMLDivElement;

	const responses: Record<string, string> = {
		'what should i focus on today?': "Here's your priority stack for today:<br><br><strong>1.</strong> Review BrandSync scope change (client waiting since yesterday)<br><strong>2.</strong> Approve February payroll batch, deadline EOD<br><strong>3.</strong> Follow up on TechNova invoice, 18 days overdue (₹3.2L)<br><strong>4.</strong> UX Designer interview at 3:00 PM",
		'show overdue invoices': 'You have <em>2 overdue invoices</em> totaling ₹5.0L:<br><br><strong>INV-2847</strong> &middot; TechNova &middot; ₹3.2L &middot; 18 days overdue<br><strong>INV-2851</strong> &middot; GreenLeaf &middot; ₹1.8L &middot; 8 days overdue<br><br>Shall I trigger automated follow-ups?',
		"who's underperforming this week?": "<strong>2 team members</strong> below 60% utilization:<br><br>&bull; Arjun K. at 42% (BrandSync), blocked on client feedback<br>&bull; Meera S. at 55% (CloudStack), 2 tasks unassigned<br><br>Recommendation: Reassign Arjun's blocked tasks to Meera to balance load."
	};
	const defaultResponse = "In the full version, I'd pull real-time data from your Sales, Projects, HR, and Finance modules to answer this instantly. <strong>Start your free trial to try it &rarr;</strong>";

	const quickPromptsList = [
		'What should I focus on today?',
		'Show overdue invoices',
		"Who's underperforming this week?"
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
	<title>OJO | AI-Native Business Operating System for SMBs</title>
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
				<a class="btn-primary btn-primary-lg" href="/pricing">Start Free, No Credit Card &rarr;</a>
				<a class="btn-outline-lg" href="/pricing">Watch 30-sec Video</a>
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
			<h2 class="d3">Ask the AI agent anything. <span class="accent">Try it yourself.</span></h2>
		</div>
		<div class="demo-box reveal">
			<div class="demo-bar">
				<div class="demo-dot"></div><div class="demo-dot"></div><div class="demo-dot"></div>
				<div style="margin-left:12px;display:flex;align-items:center;gap:6px">
					<Logo height={18} />
					<div class="demo-url" style="margin-left:0">www.ojo.io</div>
				</div>
			</div>
			<div class="demo-body">
				<div class="demo-main">
					<div class="demo-greeting">Good morning, Priya.<small>Wednesday, 19 Feb &middot; 12 tasks today &middot; 3 need your attention</small></div>
					<div class="demo-metrics">
						<div class="dm-card"><div class="dm-icon">&#128202;</div><div class="dm-label">Active Projects</div><div class="dm-val">14</div><div class="dm-sub">&uarr; 2 new this week</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="72%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#128176;</div><div class="dm-label">Revenue Pipeline</div><div class="dm-val red">₹24.8L</div><div class="dm-sub">&uarr; 18% vs last month</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="85%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#128101;</div><div class="dm-label">Team Utilization</div><div class="dm-val">78%</div><div class="dm-sub warn">3 members under-allocated</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="78%"></div></div></div>
						<div class="dm-card"><div class="dm-icon">&#128196;</div><div class="dm-label">Pending Invoices</div><div class="dm-val">₹8.2L</div><div class="dm-sub warn">2 overdue 15+ days</div><div class="dm-bar"><div class="dm-bar-fill" style="width:0" data-w="45%"></div></div></div>
					</div>
				</div>
				<div class="demo-agent">
					<div class="agent-head"><div class="agent-dot"></div><div class="agent-title">OJO AI</div></div>
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
						<input class="agent-input" placeholder="Ask OJO anything..." bind:value={agentInput} onkeydown={handleKeydown} />
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
			<div class="proof-item"><div class="proof-val">$1T</div><div class="proof-label">Market we're building for</div></div>
			<div class="proof-item"><div class="proof-val">5</div><div class="proof-label">Modules, one platform</div></div>
			<div class="proof-item"><div class="proof-val">0</div><div class="proof-label">Setup time. Works day one</div></div>
		</div>
	</div>
</div>

<!-- Problem -->
<section class="section">
	<div class="container">
		<p class="label reveal">The problem</p>
		<h2 class="d2 reveal" style="margin-bottom:20px">Your business runs on<br><span class="accent">10 disconnected tools.</span></h2>
		<p class="body-m reveal" style="max-width:480px;margin-bottom:48px">That's why context gets lost, decisions are slow, and growth stalls.</p>
		<div class="grid-3 reveal">
			<div class="cell"><div class="prob-num">01</div><div class="prob-t">Data lives everywhere</div><div class="prob-d">Sales in one tool. Projects in another. HR on spreadsheets. Finance on WhatsApp. No one has the full picture.</div><div class="prob-tag">&rarr; OJO unifies everything</div></div>
			<div class="cell"><div class="prob-num">02</div><div class="prob-t">Decisions without context</div><div class="prob-d">Managers rely on gut feel because cross-department insights simply don't exist in one place.</div><div class="prob-tag">&rarr; OJO surfaces AI context</div></div>
			<div class="cell"><div class="prob-num">03</div><div class="prob-t">Growth hits a ceiling</div><div class="prob-d">Adding tools adds complexity. Every new hire means more onboarding friction. Scaling becomes chaos.</div><div class="prob-tag">&rarr; OJO scales with you</div></div>
		</div>
	</div>
</section>

<!-- Modules -->
<section class="section section-alt">
	<div class="container">
		<p class="label reveal">The platform</p>
		<h2 class="d2 reveal" style="margin-bottom:20px">One system. <span class="accent">Every department.</span></h2>
		<p class="body-m reveal" style="max-width:480px;margin-bottom:48px">Unified from day one, not stitched together. Every module shares the same AI brain.</p>
		<div class="grid-2 reveal">
			<a class="cell-alt" href="/product"><div class="mod-head"><div class="mod-name">Sales & CRM</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">AI-scored leads, automated proposals, call transcripts, and a shared client workspace.</div><div class="mod-tags"><span class="mod-tag">Lead Scoring</span><span class="mod-tag">Proposals</span><span class="mod-tag">Client Portal</span><span class="mod-tag">Pipeline Analytics</span></div></a>
			<a class="cell-alt" href="/product"><div class="mod-head"><div class="mod-name">Smart Projects</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">AI-driven scope planning, real-time deviation alerts, and direct sales-to-delivery handoff.</div><div class="mod-tags"><span class="mod-tag">Scope Planning</span><span class="mod-tag">Deviation Alerts</span><span class="mod-tag">Team KPIs</span><span class="mod-tag">Client Sign-off</span></div></a>
			<a class="cell-alt" href="/product"><div class="mod-head"><div class="mod-name">HR & People</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">Skill-matched hiring, automated payroll, performance monitoring, and mentorship planning.</div><div class="mod-tags"><span class="mod-tag">Hiring</span><span class="mod-tag">Payroll</span><span class="mod-tag">Attendance</span><span class="mod-tag">Performance</span></div></a>
			<a class="cell-alt" href="/product"><div class="mod-head"><div class="mod-name">Finance & Accounts</div><span class="mod-arrow">&rarr;</span></div><div class="mod-d">Project-linked invoicing, bank reconciliation, and predictive cash flow dashboards.</div><div class="mod-tags"><span class="mod-tag">Invoicing</span><span class="mod-tag">Reconciliation</span><span class="mod-tag">Cash Flow</span><span class="mod-tag">P&L</span></div></a>
		</div>
		<!-- OJO Brain: spans full width inside the same grid wrapper -->
		<div class="grid-brain reveal">
			<div style="display:flex;align-items:center;gap:24px;padding:36px 32px;position:relative;z-index:1">
				<div style="flex-shrink:0;width:56px;height:56px;border-radius:14px;background:var(--r);display:flex;align-items:center;justify-content:center">
					<Logo height={30} white />
				</div>
				<div style="flex:1">
					<div style="font-size:13px;font-weight:900;letter-spacing:-.02em;color:var(--t1);margin-bottom:4px">OJO Brain: The AI That Connects Every Module</div>
					<div style="font-size:14px;line-height:1.65;color:var(--t2)">One intelligence layer across Sales, Projects, HR, and Finance. It learns from your data, detects cross-department patterns, and surfaces recommendations, risk alerts, and growth insights, so every team makes decisions with the full picture.</div>
				</div>
			</div>
			<div style="position:absolute;top:0;right:0;width:200px;height:100%;background:radial-gradient(circle at 100% 50%,var(--r-g),transparent 70%);pointer-events:none"></div>
			<div style="display:flex;gap:6px;padding:0 32px 24px;flex-wrap:wrap">
				<span class="mod-tag" style="border-color:rgba(220,38,38,.15);color:var(--r);background:var(--r-g)">Cross-department AI</span>
				<span class="mod-tag" style="border-color:rgba(220,38,38,.15);color:var(--r);background:var(--r-g)">Risk Detection</span>
				<span class="mod-tag" style="border-color:rgba(220,38,38,.15);color:var(--r);background:var(--r-g)">Growth Recommendations</span>
				<span class="mod-tag" style="border-color:rgba(220,38,38,.15);color:var(--r);background:var(--r-g)">Executive Insights</span>
				<span class="mod-tag" style="border-color:rgba(220,38,38,.15);color:var(--r);background:var(--r-g)">Mentorship Planning</span>
			</div>
		</div>
	</div>
</section>

<!-- Testimonial -->
<section class="testi">
	<div class="container">
		<div class="testi-inner reveal">
			<p class="testi-quote">"We replaced 7 tools with OJO. Our team saves 3+ hours a day, and I finally have a single view of everything: revenue, projects, people."</p>
			<p class="testi-name">Rahul Menon</p>
			<p class="testi-role">Founder, NexaStack Technologies &middot; 85 employees</p>
		</div>
	</div>
</section>

<!-- Comparison -->
<section class="section">
	<div class="container">
		<p class="label reveal">Why OJO</p>
		<h2 class="d2 reveal" style="margin-bottom:48px">Not another tool.<br><span class="accent">A new category.</span></h2>
		<div class="grid-3 reveal">
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--r);margin-bottom:10px">vs Task Tools</div><div class="d3" style="margin-bottom:10px">Smarter <span class="accent">execution</span></div><div class="body-s">Monday & ClickUp track tasks. OJO automates updates, detects deviations, and recommends actions.</div></div>
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--r);margin-bottom:10px">vs ERPs</div><div class="d3" style="margin-bottom:10px">Simpler, <span class="accent">faster</span></div><div class="body-s">Zoho & Odoo need months of setup. OJO works day one with AI reasoning across every module.</div></div>
			<div class="cell" style="text-align:center"><div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--r);margin-bottom:10px">vs Chat Tools</div><div class="d3" style="margin-bottom:10px">Context that <span class="accent">sticks</span></div><div class="body-s">WhatsApp & Email lose context. In OJO, every message stays tied to its project and team.</div></div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="cta-sec">
	<div class="container">
		<div class="cta-inner">
			<h2 class="d2 reveal">Stop juggling.<br>Start <span class="accent">building.</span></h2>
			<p class="body-l reveal" style="margin-top:16px">Free for up to 3 users and 2 active projects. Set up in minutes.</p>
			<div class="cta-actions reveal">
				<a class="btn-primary btn-primary-lg" href="/pricing">Start Free, No Credit Card &rarr;</a>
				<a class="btn-outline-lg" href="/pricing">Schedule a Demo</a>
			</div>
			<p class="body-s reveal" style="margin-top:16px">Paid plans start at ₹2,999/month</p>
		</div>
	</div>
</section>
