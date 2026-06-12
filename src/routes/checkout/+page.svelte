
<script lang="ts">
	import { page } from '$app/stores';

	const plans: Record<string, { name: string; m: number; a: number; mLabel: string; aLabel: string; suffix: string; features: string[] }> = {
		plus: {
			name: 'Plus', m: 650, a: 585, mLabel: '₹650', aLabel: '₹585', suffix: '/user/mo',
			features: ['5,000 AI credits / mo (DeepSeek V3)', 'Full CRM, Projects, HR & Accounts', 'AI lead scoring & recommendations', '50 lead call transcripts / mo', 'Unlimited integrations', '50 GB storage · Email support']
		},
		ultra: {
			name: 'Ultra', m: 2700, a: 2430, mLabel: '₹2,700', aLabel: '₹2,430', suffix: '/user/mo',
			features: ['25,000 AI credits / mo (GPT-5.4 frontier)', 'Everything in Plus + advanced AI', 'Sales-to-Delivery handoff', 'Cash flow prediction & profitability', 'Unlimited transcripts & automations', 'SSO/SAML · 99.9% SLA · Email + Chat']
		},
		starter: {
			name: 'Starter', m: 2999, a: 2399, mLabel: '₹2,999', aLabel: '₹2,399', suffix: '/mo',
			features: ['Up to 10 users', '5 active projects', 'Full CRM + Projects', 'OJO AI \u00b7 500 credits/mo', 'Client portal', 'Email support']
		},
		growth: {
			name: 'Growth', m: 9999, a: 7999, mLabel: '₹9,999', aLabel: '₹7,999', suffix: '/mo',
			features: ['Up to 30 users', 'Unlimited projects', 'All 5 modules included', 'OJO AI \u00b7 2,000 credits/mo', 'Advanced analytics', 'Priority support', 'Third-party integrations']
		}
	};

	let planKey = $derived($page.url.searchParams.get('plan') || 'plus');
	let periodKey = $derived(($page.url.searchParams.get('period') || 'm') as 'm' | 'a');
	let isTrial = $derived($page.url.searchParams.get('trial') === 'true');

	let plan = $derived(plans[planKey] || plans.plus);
	let priceLabel = $derived(periodKey === 'a' ? plan.aLabel : plan.mLabel);
	let savings = $derived(periodKey === 'a' ? `₹${((plan.m - plan.a) * 12).toLocaleString('en-IN')}` : '');
	let savingsPct = $derived(Math.round(((plan.m - plan.a) / plan.m) * 100));

	let trialEnd = $derived(() => {
		const d = new Date();
		d.setDate(d.getDate() + 7);
		return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
	});

	let verifyMethod = $state<'email' | 'phone'>('email');
	let verifyValue = $state('');
	let otpSent = $state(false);
	let otpSending = $state(false);
	let otpDigits = $state(['', '', '', '', '', '']);
	let otpVerified = $state(false);
	let otpVerifying = $state(false);

	function sendOtp() {
		if (!verifyValue.trim()) return;
		otpSending = true;
		setTimeout(() => {
			otpSending = false;
			otpSent = true;
		}, 1200);
	}

	function handleOtpInput(index: number, e: Event) {
		const input = e.target as HTMLInputElement;
		let val = input.value.replace(/\D/g, '');
		if (val.length > 1) val = val[val.length - 1];
		otpDigits[index] = val;
		otpDigits = [...otpDigits];
		if (val && index < 5) {
			document.getElementById(`otp-${index + 1}`)?.focus();
		}
	}

	function handleOtpKeydown(index: number, e: KeyboardEvent) {
		if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
			document.getElementById(`otp-${index - 1}`)?.focus();
		}
	}

	function handleOtpPaste(e: ClipboardEvent) {
		e.preventDefault();
		const pasted = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, 6);
		const newDigits = [...otpDigits];
		for (let i = 0; i < pasted.length; i++) newDigits[i] = pasted[i];
		otpDigits = newDigits;
		document.getElementById(`otp-${Math.min(pasted.length, 5)}`)?.focus();
	}

	let otpFilled = $derived(otpDigits.every(d => d !== ''));

	function verifyOtp() {
		if (!otpFilled) return;
		otpVerifying = true;
		setTimeout(() => {
			otpVerifying = false;
			otpVerified = true;
		}, 1000);
	}

</script>

<svelte:head>
	<title>{isTrial ? 'Start Free Trial' : 'Checkout'} | OJO</title>

	<meta
		name="description"
		content="Complete your OJO subscription purchase or start a free trial. Access AI-powered CRM, Projects, HR, Finance, and business automation tools."
	/>

	<meta
		name="keywords"
		content="OJO checkout, OJO pricing, OJO subscription, AI business software, business operating system, CRM software, project management software, HR software, finance management software, business automation platform"
	/>

	<meta name="robots" content="noindex, nofollow" />

	<link rel="canonical" href="https://www.ojo.io/checkout" />
</svelte:head>

{#if isTrial}
	<!-- ═══ TRIAL FLOW ═══ -->
	<section class="hero" style="min-height:auto;padding-bottom:20px;text-align:center">
		<div class="container">
			<p class="label reveal" style="justify-content:center">Free Trial</p>
			<h1 class="d2 reveal" style="max-width:500px;margin:0 auto 12px;text-align:center">
				Start your free <span class="accent">trial.</span>
			</h1>
			<p class="body-l reveal" style="max-width:440px;margin:0 auto;text-align:center">
				7 days of full access. No credit card required.
			</p>
		</div>
	</section>

	<section class="section" style="padding-top:24px">
		<div class="container" style="max-width:640px">
			<div class="checkout-form" style="margin-bottom:24px">
				<div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
					<div style="width:44px;height:44px;border-radius:12px;background:var(--r-g);border:1px solid rgba(220,38,38,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">
						<svg viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
					</div>
					<div>
						<div style="font-size:20px;font-weight:900;letter-spacing:-.02em">{plan.name} Plan</div>
						<div style="font-size:13px;color:var(--t3)">7-day free trial</div>
					</div>
				</div>

				<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:var(--sf);border:1px solid var(--bd);border-radius:10px">
						<span style="font-size:14px;color:var(--t2)">Plan</span>
						<span style="font-size:14px;font-weight:700">{plan.name}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:var(--sf);border:1px solid var(--bd);border-radius:10px">
						<span style="font-size:14px;color:var(--t2)">Billing after trial</span>
						<span style="font-size:14px;font-weight:700">{priceLabel}{plan.suffix} &middot; {periodKey === 'a' ? 'Annual' : 'Monthly'}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.12);border-radius:10px">
						<span style="font-size:14px;color:#16a34a;font-weight:600">Due today</span>
						<span style="font-size:14px;font-weight:800;color:#16a34a">₹0</span>
					</div>
				</div>

				<div class="checkout-summary-trial" style="margin-top:0;margin-bottom:24px">
					Your trial ends {trialEnd()}. You won't be charged until then.
				</div>

				<div style="margin-bottom:28px">
					<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--t3);margin-bottom:12px">What's included</div>
					<div class="pr-feats">
						{#each plan.features as feat}
							<div class="pr-feat">{feat}</div>
						{/each}
					</div>
				</div>

				<a class="checkout-btn checkout-btn-primary" href="https://app.ojo.io/signup" style="display:block;text-align:center">
					Activate Free Trial
				</a>
			</div>
		</div>
	</section>

{:else}
	<!-- ═══ BUY NOW FLOW ═══ -->
	<section class="hero" style="min-height:auto;padding-bottom:20px;text-align:center">
		<div class="container">
			<p class="label reveal" style="justify-content:center">Checkout</p>
			<h1 class="d2 reveal" style="max-width:500px;margin:0 auto 12px;text-align:center">
				Complete your <span class="accent">purchase.</span>
			</h1>
		</div>
	</section>

	<section class="section" style="padding-top:0">
		<div class="container" style="max-width:640px">
			<!-- Plan summary -->
			<div class="checkout-form" style="margin-bottom:24px">
				<div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
					<div style="width:44px;height:44px;border-radius:12px;background:var(--r-g);border:1px solid rgba(220,38,38,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">
						<svg viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:22px;height:22px"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
					</div>
					<div>
						<div style="font-size:20px;font-weight:900;letter-spacing:-.02em">{plan.name} Plan</div>
						<div style="font-size:13px;color:var(--t3)">Billed {periodKey === 'a' ? 'annually' : 'monthly'} &middot; {priceLabel}{plan.suffix}</div>
					</div>
				</div>

				<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:var(--sf);border:1px solid var(--bd);border-radius:10px">
						<span style="font-size:14px;color:var(--t2)">Plan</span>
						<span style="font-size:14px;font-weight:700">{plan.name}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:var(--sf);border:1px solid var(--bd);border-radius:10px">
						<span style="font-size:14px;color:var(--t2)">Billing</span>
						<span style="font-size:14px;font-weight:700">{periodKey === 'a' ? `Annual (Save ${savingsPct}%)` : 'Monthly'}</span>
					</div>
					<div style="display:flex;justify-content:space-between;padding:12px 16px;background:var(--sf);border:1px solid var(--bd);border-radius:10px">
						<span style="font-size:14px;color:var(--t2)">Price</span>
						<span style="font-size:14px;font-weight:700">{priceLabel}{plan.suffix}</span>
					</div>
					{#if periodKey === 'a'}
						<div style="display:flex;justify-content:space-between;padding:12px 16px;background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.12);border-radius:10px">
							<span style="font-size:14px;color:#16a34a;font-weight:600">You save</span>
							<span style="font-size:14px;font-weight:700;color:#16a34a">{savings}/yr</span>
						</div>
					{/if}
				</div>

				<div style="margin-bottom:28px">
					<div style="font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--t3);margin-bottom:12px">What's included</div>
					<div class="pr-feats">
						{#each plan.features as feat}
							<div class="pr-feat">{feat}</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Verify identity -->
			<div class="checkout-form">
				{#if otpVerified}
					<div class="verified-badge">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
						Verified as {verifyValue}
					</div>
				{:else}
					<div class="checkout-form-title">Verify your identity</div>
					<div class="checkout-form-desc">Quick verification before payment.</div>

					<div class="verify-toggle" style="margin-bottom:16px">
						<button class="verify-opt" class:on={verifyMethod === 'email'} onclick={() => { verifyMethod = 'email'; otpSent = false; otpDigits = ['','','','','','']; }}>
							Email
						</button>
						<button class="verify-opt" class:on={verifyMethod === 'phone'} onclick={() => { verifyMethod = 'phone'; otpSent = false; otpDigits = ['','','','','','']; }}>
							Phone
						</button>
					</div>

					{#if !otpSent}
						<div class="form-group" style="margin-bottom:0">
							<label class="form-label" for="verify-input">
								{verifyMethod === 'email' ? 'Email address' : 'Phone number'}
							</label>
							<div style="display:flex;gap:8px;align-items:center">
								<input
									id="verify-input"
									class="form-input"
									style="flex:1;margin-bottom:0"
									type={verifyMethod === 'email' ? 'email' : 'tel'}
									placeholder={verifyMethod === 'email' ? 'you@company.com' : '+91 98765 43210'}
									bind:value={verifyValue}
									onkeydown={(e: KeyboardEvent) => { if (e.key === 'Enter') sendOtp(); }}
								/>
								<button
									style="white-space:nowrap;padding:8px 14px;font-size:12px;font-weight:700;font-family:var(--sans);border-radius:8px;border:none;background:var(--r);color:#fff;cursor:pointer;flex-shrink:0;transition:all .2s ease"
									onclick={sendOtp}
									disabled={!verifyValue.trim() || otpSending}
								>
									{#if otpSending}
										Sending...
									{:else}
										Send OTP
									{/if}
								</button>
							</div>
						</div>
					{:else}
						<div style="margin-bottom:8px">
							<span style="font-size:13px;color:var(--t2)">
								OTP sent to <strong style="color:var(--t1)">{verifyValue}</strong>
							</span>
							<button
								style="background:none;border:none;font-family:var(--sans);font-size:12px;color:var(--t3);cursor:pointer;text-decoration:underline;text-underline-offset:2px;padding:0;margin-left:8px"
								onclick={() => { otpSent = false; otpDigits = ['','','','','','']; }}
							>Change</button>
						</div>

						<div style="display:flex;gap:8px;align-items:center">
							<div class="otp-inputs" style="flex:1" onpaste={handleOtpPaste}>
								{#each otpDigits as digit, i}
									<input
										id="otp-{i}"
										class="otp-digit"
										class:filled={digit !== ''}
										type="text"
										inputmode="numeric"
										maxlength="1"
										value={digit}
										oninput={(e: Event) => handleOtpInput(i, e)}
										onkeydown={(e: KeyboardEvent) => handleOtpKeydown(i, e)}
									/>
								{/each}
							</div>
							<button
								style="white-space:nowrap;padding:8px 14px;font-size:12px;font-weight:700;font-family:var(--sans);border-radius:8px;border:none;background:var(--r);color:#fff;cursor:pointer;flex-shrink:0;transition:all .2s ease"
								onclick={verifyOtp}
								disabled={!otpFilled || otpVerifying}
							>
								{#if otpVerifying}
									Verifying...
								{:else}
									Verify
								{/if}
							</button>
						</div>
					{/if}
				{/if}
			</div>

			<!-- Primary CTA — always visible -->
			<a
				class="checkout-btn checkout-btn-primary"
				href={otpVerified ? `https://payments.ojo.io?plan=${planKey}&period=${periodKey}` : undefined}
				style="display:block;text-align:center;margin-top:24px;font-size:16px;padding:16px 24px;{otpVerified ? '' : 'opacity:.45;pointer-events:none'}"
				aria-disabled={!otpVerified}
			>
				Proceed to Payment
			</a>
		</div>
	</section>
{/if}
