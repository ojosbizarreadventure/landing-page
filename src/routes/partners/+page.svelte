<script lang="ts">
	let name = $state('');
	let email = $state('');
	let company = $state('');
	let agencyType = $state('');
	let clients = $state('');
	let message = $state('');
	let submitted = $state(false);
	let submitting = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !company.trim() || !agencyType) return;
		submitting = true;
		setTimeout(() => {
			submitting = false;
			submitted = true;
		}, 1200);
	}
</script>

<svelte:head>
	<title>Partners | OJO</title>
</svelte:head>

<section class="hero" style="min-height:auto;padding-bottom:40px">
	<div class="container">
		<div class="hero-content">
			<p class="label reveal">Partner Program</p>
			<h1 class="d1 reveal" style="max-width:640px">Grow with OJO. <span class="accent">Together.</span></h1>
			<p class="body-l hero-desc reveal">Join our partner network and help your clients adopt the operating system built for modern SMBs. You bring the relationships, we bring the platform.</p>
		</div>
	</div>
</section>

<section class="section" style="padding-top:40px">
	<div class="container">
		<div class="grid-3 reveal" style="margin-bottom:64px">
			<div class="cell" style="text-align:center">
				<div class="val-i" style="margin:0 auto 14px">&#9733;</div>
				<div class="prob-t">Revenue sharing</div>
				<div class="prob-d">Earn recurring commissions on every client you bring to OJO. The more they grow, the more you earn.</div>
			</div>
			<div class="cell" style="text-align:center">
				<div class="val-i" style="margin:0 auto 14px">&#9878;</div>
				<div class="prob-t">Co-branded support</div>
				<div class="prob-d">Get access to partner-only resources, co-branded onboarding materials, and a dedicated partner success manager.</div>
			</div>
			<div class="cell" style="text-align:center">
				<div class="val-i" style="margin:0 auto 14px">&#10022;</div>
				<div class="prob-t">Expand your offering</div>
				<div class="prob-d">Add a complete business OS to your service portfolio. Help your clients unify Sales, Projects, HR, and Finance under one roof.</div>
			</div>
		</div>

		<div class="contact-grid reveal">
			<div class="contact-info">
				<div style="margin-bottom:32px">
					<p class="label" style="margin-bottom:12px">Who we're looking for</p>
					<h2 class="d3" style="margin-bottom:16px">Agencies that <span class="accent">care about operations.</span></h2>
					<p class="body-m">Whether you're an IT consultancy, a business advisory firm, a digital agency, or a systems integrator, if your clients struggle with fragmented workflows, OJO is the solution you can bring to them.</p>
				</div>

				<div style="display:flex;flex-direction:column;gap:16px">
					<div style="display:flex;gap:12px;align-items:flex-start">
						<div class="feat-ck">&#10003;</div>
						<div class="body-m">IT service providers looking to bundle an operating platform with their offerings</div>
					</div>
					<div style="display:flex;gap:12px;align-items:flex-start">
						<div class="feat-ck">&#10003;</div>
						<div class="body-m">Business consultants helping SMBs streamline operations and scale</div>
					</div>
					<div style="display:flex;gap:12px;align-items:flex-start">
						<div class="feat-ck">&#10003;</div>
						<div class="body-m">Digital agencies that recommend tools to their client base</div>
					</div>
					<div style="display:flex;gap:12px;align-items:flex-start">
						<div class="feat-ck">&#10003;</div>
						<div class="body-m">System integrators and ERP consultants exploring AI-native alternatives</div>
					</div>
				</div>

				<div style="margin-top:32px;padding-top:24px;border-top:1px solid var(--bd)">
					<div class="contact-label" style="margin-bottom:12px">Partner benefits at a glance</div>
					<div style="display:flex;gap:16px">
						<div style="background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:14px 18px;flex:1;text-align:center">
							<div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:var(--t1)">20%</div>
							<div style="font-size:11px;color:var(--t3);margin-top:2px">Recurring commission</div>
						</div>
						<div style="background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:14px 18px;flex:1;text-align:center">
							<div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:var(--t1)">Free</div>
							<div style="font-size:11px;color:var(--t3);margin-top:2px">Partner workspace</div>
						</div>
					</div>
				</div>
			</div>

			<div class="contact-form-wrap">
				{#if submitted}
					<div class="contact-success">
						<div style="width:56px;height:56px;border-radius:14px;background:var(--r-g);display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
						</div>
						<div style="font-size:20px;font-weight:900;letter-spacing:-.03em;margin-bottom:8px">Application received!</div>
						<div class="body-m">Our partnerships team will review your details and get back to you within 48 hours.</div>
					</div>
				{:else}
					<div style="margin-bottom:24px">
						<div style="font-size:18px;font-weight:900;letter-spacing:-.02em;margin-bottom:4px">Apply to become a partner</div>
						<div class="body-s">Takes less than 2 minutes.</div>
					</div>
					<form onsubmit={handleSubmit}>
						<div class="form-group">
							<label class="form-label" for="p-name">Your name</label>
							<input class="form-input" id="p-name" type="text" placeholder="John Doe" bind:value={name} required />
						</div>
						<div class="form-group">
							<label class="form-label" for="p-email">Work email</label>
							<input class="form-input" id="p-email" type="email" placeholder="john@agency.com" bind:value={email} required />
						</div>
						<div class="form-group">
							<label class="form-label" for="p-company">Company / agency name</label>
							<input class="form-input" id="p-company" type="text" placeholder="Acme Consulting" bind:value={company} required />
						</div>
						<div class="form-group">
							<label class="form-label">Type of agency</label>
							<div class="form-radio-group">
								<label class="form-radio" class:on={agencyType === 'it'}>
									<input type="radio" name="agencyType" value="it" bind:group={agencyType} /> IT Services
								</label>
								<label class="form-radio" class:on={agencyType === 'consulting'}>
									<input type="radio" name="agencyType" value="consulting" bind:group={agencyType} /> Consulting
								</label>
								<label class="form-radio" class:on={agencyType === 'digital'}>
									<input type="radio" name="agencyType" value="digital" bind:group={agencyType} /> Digital Agency
								</label>
								<label class="form-radio" class:on={agencyType === 'integrator'}>
									<input type="radio" name="agencyType" value="integrator" bind:group={agencyType} /> System Integrator
								</label>
							</div>
						</div>
						<div class="form-group">
							<label class="form-label" for="p-clients">How many clients could benefit from OJO?</label>
							<input class="form-input" id="p-clients" type="text" placeholder="e.g. 10-20 clients" bind:value={clients} />
						</div>
						<div class="form-group">
							<label class="form-label" for="p-message">Anything else you'd like to share?</label>
							<textarea class="form-input form-textarea" id="p-message" placeholder="Tell us about your agency and how you see the partnership working..." bind:value={message}></textarea>
						</div>
						<button class="btn-primary btn-primary-lg" type="submit" style="width:100%" disabled={submitting}>
							{submitting ? 'Submitting...' : 'Apply as Partner'}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
