<script lang="ts">
	let period = $state<'m' | 'a'>('m');
	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	const prices = {
		starter: { m: '₹2,999', a: '₹2,399' },
		growth: { m: '₹9,999', a: '₹7,999' }
	};
</script>

<svelte:head>
	<title>Pricing | OJO</title>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:40px;text-align:center">
	<div class="container">
		<p class="label reveal" style="justify-content:center">Pricing</p>
		<h1 class="d1 reveal" style="max-width:520px;margin:0 auto 16px;text-align:center">Simple pricing that <span class="accent">scales.</span></h1>
		<p class="body-l reveal" style="max-width:400px;margin:0 auto 40px;text-align:center">Start free. Upgrade when you're ready.</p>
		<div class="price-toggle reveal">
			<div class="price-toggle-inner">
				<button class="ptog" class:on={period === 'm'} onclick={() => period = 'm'}>Monthly</button>
				<button class="ptog" class:on={period === 'a'} onclick={() => period = 'a'}>Annual (Save 20%)</button>
			</div>
		</div>
	</div>
</section>

<section class="section" style="padding-top:0">
	<div class="container">
		<div class="grid-4">
			<!-- Free -->
			<div class="price-card">
				<div class="pr-name">Free</div>
				<div class="pr-desc">For small teams starting out</div>
				<div class="pr-amount">₹0</div>
				<div class="pr-period">Up to 3 users & 2 projects</div>
				<a class="pr-btn pr-btn-line" href="https://app.ojo.io/signup">Get Started Free</a>
				<div class="pr-feats">
					<div class="pr-feat">3 team members</div>
					<div class="pr-feat">2 active projects</div>
					<div class="pr-feat">Basic CRM & tasks</div>
					<div class="pr-feat">Limited AI suggestions</div>
					<div class="pr-feat">Community support</div>
				</div>
			</div>
			<!-- Starter -->
			<div class="price-card">
				<div class="pr-name">Starter</div>
				<div class="pr-desc">For growing teams</div>
				<div class="pr-amount">{prices.starter[period]}<span>/mo</span></div>
				<div class="pr-period">Per workspace</div>
				<div class="pr-btn-group">
					<a class="pr-btn pr-btn-fill" href="/checkout?plan=starter&period={period}">Buy Now</a>
					<a class="pr-btn pr-btn-line" href="/checkout?plan=starter&period={period}&trial=true">Start Free Trial</a>
				</div>
				<div class="pr-feats">
					<div class="pr-feat">Up to 10 users</div>
					<div class="pr-feat">5 active projects</div>
					<div class="pr-feat">Full CRM + Projects</div>
					<div class="pr-feat">OJO AI &middot; 500 credits/mo</div>
					<div class="pr-feat">Client portal</div>
					<div class="pr-feat">Email support</div>
				</div>
			</div>
			<!-- Growth (featured) -->
			<div class="price-card featured">
				<div class="pr-name">Growth</div>
				<div class="pr-desc">For scaling businesses</div>
				<div class="pr-amount">{prices.growth[period]}<span>/mo</span></div>
				<div class="pr-period">Per workspace</div>
				<div class="pr-btn-group">
					<a class="pr-btn pr-btn-fill" href="/checkout?plan=growth&period={period}">Buy Now</a>
					<a class="pr-btn pr-btn-line" href="/checkout?plan=growth&period={period}&trial=true">Start Free Trial</a>
				</div>
				<div class="pr-feats">
					<div class="pr-feat">Up to 30 users</div>
					<div class="pr-feat">Unlimited projects</div>
					<div class="pr-feat">All 5 modules included</div>
					<div class="pr-feat">OJO AI &middot; 2,000 credits/mo</div>
					<div class="pr-feat">Advanced analytics</div>
					<div class="pr-feat">Priority support</div>
					<div class="pr-feat">Third-party integrations</div>
				</div>
			</div>
			<!-- Enterprise -->
			<div class="price-card">
				<div class="pr-name">Enterprise</div>
				<div class="pr-desc">For large organizations</div>
				<div class="pr-amount">Custom</div>
				<div class="pr-period">Tailored to your needs</div>
				<a class="pr-btn pr-btn-line" href="/contact">Talk to Sales</a>
				<div class="pr-feats">
					<div class="pr-feat">Unlimited users & projects</div>
					<div class="pr-feat">Custom workflows</div>
					<div class="pr-feat">Unlimited AI credits</div>
					<div class="pr-feat">SSO & advanced security</div>
					<div class="pr-feat">Dedicated account manager</div>
					<div class="pr-feat">API access & integrations</div>
					<div class="pr-feat">SLA guarantee</div>
				</div>
			</div>
		</div>
		<p class="body-s reveal" style="text-align:center;margin-top:24px;font-style:italic">* All prices shown are tentative. Final pricing will be announced soon.</p>
	</div>
</section>

<section class="section section-alt">
	<div class="container">
		<h2 class="d2 reveal" style="text-align:center;margin:0 auto 48px;max-width:400px">Questions? <span class="accent">Answered.</span></h2>
		<div class="faq-w">
			<div class="faq-i" class:open={openFaq === 0}>
				<div class="faq-q" onclick={() => toggleFaq(0)}>What are AI credits?<span>+</span></div>
				<div class="faq-a">AI credits power OJO's intelligent features: lead scoring, recommendations, insights, and the OJO AI. Each plan includes a monthly allocation. Additional credit packs can be purchased anytime.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 1}>
				<div class="faq-q" onclick={() => toggleFaq(1)}>Can I switch plans later?<span>+</span></div>
				<div class="faq-a">Yes. Upgrade or downgrade anytime. Changes apply at the next billing cycle. Your data is always preserved.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 2}>
				<div class="faq-q" onclick={() => toggleFaq(2)}>Is there a free trial for paid plans?<span>+</span></div>
				<div class="faq-a">Yes! All paid plans include a 7-day free trial with full access. No credit card required to start.</div>
			</div>
			<div class="faq-i" class:open={openFaq === 3}>
				<div class="faq-q" onclick={() => toggleFaq(3)}>Do you offer startup or NGO discounts?<span>+</span></div>
				<div class="faq-a">Up to 50% off for early-stage startups, NGOs, and women-led businesses. Contact our team for details.</div>
			</div>
		</div>
	</div>
</section>
