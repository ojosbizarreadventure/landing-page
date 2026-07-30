<script lang="ts">
	import { page } from '$app/stores';

	const plans: Record<string, { name: string; m: number; a: number; mLabel: string; aLabel: string }> = {
		starter: {
			name: 'Starter', m: 2999, a: 2399, mLabel: '₹2,999', aLabel: '₹2,399'
		},
		growth: {
			name: 'Growth', m: 9999, a: 7999, mLabel: '₹9,999', aLabel: '₹7,999'
		}
	};

	let planKey = $derived($page.url.searchParams.get('plan') || 'starter');
	let periodKey = $derived(($page.url.searchParams.get('period') || 'm') as 'm' | 'a');

	let plan = $derived(plans[planKey] || plans.starter);
	let priceLabel = $derived(periodKey === 'a' ? plan.aLabel : plan.mLabel);
	let periodLabel = $derived(periodKey === 'a' ? 'year' : 'month');
	let annualTotal = $derived(periodKey === 'a' ? `₹${(plan.a * 12).toLocaleString('en-IN')}` : '');
	let savings = $derived(periodKey === 'a' ? `₹${((plan.m - plan.a) * 12).toLocaleString('en-IN')}` : '');

	let paying = $state(false);

	function processPayment() {
		paying = true;
		setTimeout(() => {
			window.location.href = 'https://erp.staging.ojo.io/pay?plan=' + planKey + '&period=' + periodKey;
		}, 1500);
	}
</script>

<svelte:head>
	<title>Secure Online Payments for SMBs | OJO Pay</title>

	<meta
		name="description"
		content="Manage secure online payments, invoicing, and financial transactions with OJO Pay. Built for SMBs to streamline billing and payment operations."
	/>

	<meta
		name="keywords"
		content="online payment platform, SMB payment software, invoice payment system, secure business payments, AI finance software, payment management platform, OJO Pay"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="OJO" />
	<meta name="publisher" content="OJO" />

	<link rel="canonical" href="https://www.ojo.io/pay" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ojo.io/pay" />
	<meta property="og:title" content="Secure Online Payments for SMBs | OJO Pay" />
	<meta
		property="og:description"
		content="Simplify invoicing, payments, and financial operations with OJO Pay for growing SMBs."
	/>
	<meta property="og:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.ojo.io/pay" />
	<meta name="twitter:title" content="Secure Online Payments for SMBs | OJO Pay" />
	<meta
		name="twitter:description"
		content="AI-powered payment and invoicing platform designed for SMB financial operations and secure transactions."
	/>
	<meta name="twitter:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FinancialProduct",
			"name": "OJO Pay",
			"url": "https://www.ojo.io/pay",
			"description": "OJO Pay helps SMBs manage secure online payments, invoicing, and financial workflows.",
			"provider": {
				"@type": "Organization",
				"name": "OJO",
				"url": "https://www.ojo.io"
			}
		}
	</script>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:20px;text-align:center">
	<div class="container">
		<p class="label reveal" style="justify-content:center">Payment</p>
		<h1 class="d2 reveal" style="max-width:500px;margin:0 auto 12px;text-align:center">
			Complete your <span class="accent">payment.</span>
		</h1>
		<p class="body-l reveal" style="max-width:440px;margin:0 auto;text-align:center">
			Review your order and proceed to pay.
		</p>
	</div>
</section>

<section class="section" style="padding-top:24px">
	<div class="container" style="max-width:520px">
		<!-- Order Summary -->
		<div class="checkout-summary" style="position:static;margin-bottom:24px">
			<div class="checkout-summary-label">Order Summary</div>
			<div class="checkout-summary-plan">{plan.name} Plan</div>
			<div class="checkout-summary-price">
				{priceLabel}<span>/mo</span>
			</div>
			<div class="checkout-summary-period">
				Billed {periodKey === 'a' ? 'annually' : 'monthly'}
			</div>
			<div class="checkout-summary-row">
				<span>{plan.name} plan</span>
				<span>{priceLabel}/mo</span>
			</div>
			{#if periodKey === 'a'}
				<div class="checkout-summary-row">
					<span>Annual billing</span>
					<span>{annualTotal}/yr</span>
				</div>
				<div class="checkout-summary-row">
					<span>You save</span>
					<span class="discount">-{savings}/yr</span>
				</div>
			{/if}
			<div class="checkout-summary-row">
				<span>Due today</span>
				<span>{priceLabel}</span>
			</div>
		</div>

		<!-- Pay Now -->
		<div class="checkout-form">
			<div class="checkout-form-desc" style="margin-bottom:20px;text-align:center">
				You'll be charged <strong>{priceLabel}</strong> for this {periodLabel}'s billing. Your {plan.name} plan will activate instantly.
			</div>

			<button
				class="checkout-btn checkout-btn-primary"
				onclick={processPayment}
				disabled={paying}
			>
				{#if paying}
					<span class="checkout-spinner"></span>Redirecting to payment...
				{:else}
					Pay Now &middot; {priceLabel}
				{/if}
			</button>

			<p style="margin-top:16px;text-align:center;font-size:12px;color:var(--t3);line-height:1.5">
				Secured by 256-bit SSL encryption. By proceeding you agree to our
				<a href="/terms" style="color:var(--t2);text-decoration:underline;text-underline-offset:2px">Terms</a> and
				<a href="/refund-policy" style="color:var(--t2);text-decoration:underline;text-underline-offset:2px">Refund Policy</a>.
			</p>
		</div>
	</div>
</section>
