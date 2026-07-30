<script lang="ts">
	// Web3Forms delivers this form to our inbox. The access key is meant to live
	// in the client — it only identifies which inbox to deliver to.
	const WEB3FORMS_KEY = '63727f54-3364-4a69-b17d-402963e9bb84';

	const typeLabels: Record<string, string> = {
		product: 'Product query',
		partnership: 'Partnership',
		demo: 'Book a demo',
		other: 'Other'
	};

	let name = $state('');
	let email = $state('');
	let type = $state('product');
	let message = $state('');
	// Honeypot — hidden from people, tempting to bots. Web3Forms drops anything
	// that arrives with it filled in.
	let botcheck = $state(false);
	let submitted = $state(false);
	let submitting = $state(false);
	let error = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) return;

		submitting = true;
		error = '';

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({
					access_key: WEB3FORMS_KEY,
					subject: `OJO contact — ${typeLabels[type]} — ${name}`,
					from_name: 'OJO website',
					replyto: email,
					botcheck,
					name,
					email,
					enquiry_type: typeLabels[type],
					message
				})
			});
			const data = await res.json();

			if (res.ok && data.success) {
				submitted = true;
			} else {
				error = data.message || 'We could not send that. Please try again.';
			}
		} catch {
			error = 'Could not reach our server. Check your connection and try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>Contact OJO | Talk to Our AI Business Solutions Team</title>

	<meta
		name="description"
		content="Contact OJO to learn how our AI-native business operating system can streamline Sales, Projects, Manufacturing, HR and Finance for your growing business."
	/>

	<meta
		name="keywords"
		content="contact OJO, AI business software contact, business automation demo, CRM software contact, SaaS contact page, OJO support, AI operating system"
	/>

	<meta name="robots" content="index, follow" />

	<meta name="author" content="OJO" />
	<meta name="publisher" content="OJO" />

	<link rel="canonical" href="https://www.ojo.io/contact" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ojo.io/contact" />
	<meta property="og:title" content="Contact OJO | Talk to Our AI Business Solutions Team" />
	<meta
		property="og:description"
		content="Get in touch with OJO for product demos, pricing, partnerships, and AI business software solutions."
	/>
	<meta property="og:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.ojo.io/contact" />
	<meta name="twitter:title" content="Contact OJO | Talk to Our AI Business Solutions Team" />
	<meta
		name="twitter:description"
		content="Talk to the OJO team about AI-powered business software, demos, and solutions for SMBs."
	/>
	<meta name="twitter:image" content="https://www.ojo.io/og-image.jpg" />

	<!-- Schema Markup -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			"name": "Contact OJO",
			"url": "https://www.ojo.io/contact",
			"description": "Contact OJO for AI-powered business operating system solutions and support.",
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
			<p class="label reveal">Contact</p>
			<h1 class="d1 reveal" style="max-width:580px">Let's talk about <span class="accent">your business.</span></h1>
			<p class="body-l hero-desc reveal">Whether it's a product question, partnership opportunity, or just a hello, we'd love to hear from you.</p>
		</div>
	</div>
</section>

<section class="section" style="padding-top:40px">
	<div class="container">
		<div class="contact-grid reveal">
			<!-- Left: Contact Info -->
			<div class="contact-info">
				<div class="contact-block">
					<div class="contact-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
					</div>
					<div>
						<div class="contact-label">Registered Address</div>
						<div class="contact-val"><strong style="color:var(--t1);font-weight:800">Ojo AI Pvt Ltd</strong><br>30, 2nd Cross, Raja Rajeshwari Layout,<br>Bommanahalli, Bangalore,<br>Karnataka, India - 560 068</div>
					</div>
				</div>

				<div class="contact-block">
					<div class="contact-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
					</div>
					<div>
						<div class="contact-label">Business Address</div>
						<div class="contact-val">137, 7th Cross, 13th Main, HSR Layout,<br>Sector 5, Bangalore, Karnataka,<br>India - 560 102</div>
					</div>
				</div>

				<div class="contact-block">
					<div class="contact-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
					</div>
					<div>
						<div class="contact-label">Phone</div>
						<div class="contact-val"><a href="tel:+918825562185" style="color:var(--t1);text-decoration:none">+91 88255 62185</a></div>
					</div>
				</div>

				<div class="contact-block">
					<div class="contact-icon">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
					</div>
					<div>
						<div class="contact-label">Email</div>
						<div class="contact-val"><a href="mailto:contact@ojo.io" style="color:var(--t1);text-decoration:none">contact@ojo.io</a></div>
					</div>
				</div>

				<div style="margin-top:32px;padding-top:24px;border-top:1px solid var(--bd)">
					<div class="contact-label" style="margin-bottom:12px">We typically respond within</div>
					<div style="display:flex;gap:16px">
						<div style="background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:14px 18px;flex:1;text-align:center">
							<div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:var(--t1)">4hrs</div>
							<div style="font-size:11px;color:var(--t3);margin-top:2px">Product queries</div>
						</div>
						<div style="background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:14px 18px;flex:1;text-align:center">
							<div style="font-size:22px;font-weight:900;letter-spacing:-.03em;color:var(--t1)">24hrs</div>
							<div style="font-size:11px;color:var(--t3);margin-top:2px">Partnerships</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Right: Contact Form -->
			<div class="contact-form-wrap">
				{#if submitted}
					<div class="contact-success">
						<div style="width:56px;height:56px;border-radius:14px;background:var(--tq-g);border:1px solid var(--tq-bd);display:flex;align-items:center;justify-content:center;margin:0 auto 20px">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--tq)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
						</div>
						<div style="font-size:20px;font-weight:900;letter-spacing:-.03em;margin-bottom:8px">Message sent!</div>
						<div class="body-m">We'll get back to you shortly. Keep an eye on your inbox.</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit}>
						<!-- Honeypot: off-screen and skipped by keyboard, so only bots find it -->
						<input
							class="form-honeypot"
							type="checkbox"
							name="botcheck"
							tabindex="-1"
							autocomplete="off"
							aria-hidden="true"
							bind:checked={botcheck}
						/>
						<div class="form-group">
							<label class="form-label" for="name">Your name</label>
							<input class="form-input" id="name" type="text" placeholder="John Doe" bind:value={name} required />
						</div>
						<div class="form-group">
							<label class="form-label" for="email">Work email</label>
							<input class="form-input" id="email" type="email" placeholder="john@company.com" bind:value={email} required />
						</div>
						<div class="form-group">
							<label class="form-label" for="type">What's this about?</label>
							<div class="form-radio-group">
								<label class="form-radio" class:on={type === 'product'}>
									<input type="radio" name="type" value="product" bind:group={type} /> Product query
								</label>
								<label class="form-radio" class:on={type === 'partnership'}>
									<input type="radio" name="type" value="partnership" bind:group={type} /> Partnership
								</label>
								<label class="form-radio" class:on={type === 'demo'}>
									<input type="radio" name="type" value="demo" bind:group={type} /> Book a demo
								</label>
								<label class="form-radio" class:on={type === 'other'}>
									<input type="radio" name="type" value="other" bind:group={type} /> Other
								</label>
							</div>
						</div>
						<div class="form-group">
							<label class="form-label" for="message">Message</label>
							<textarea class="form-input form-textarea" id="message" placeholder="Tell us how we can help..." bind:value={message} required></textarea>
						</div>
						{#if error}
							<div class="form-error" role="alert">
								{error} You can also email us directly at
								<a href="mailto:contact@ojo.io">contact@ojo.io</a>.
							</div>
						{/if}
						<button class="btn-primary btn-primary-lg" type="submit" style="width:100%" disabled={submitting}>
							{submitting ? 'Sending...' : 'Send Message'}
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
