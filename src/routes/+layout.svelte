<script lang="ts">
	import '../app.css';
	import Logo from '$lib/components/Logo.svelte';
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let theme = $state('dark');
	let mobileMenuOpen = $state(false);

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-t', theme);
	}

	afterNavigate(() => {
		mobileMenuOpen = false;
		requestAnimationFrame(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add('in');
						}
					});
				},
				{ threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
			);
			document.querySelectorAll('.reveal:not(.in), .stagger:not(.in)').forEach((el) => {
				observer.observe(el);
			});
		});
	});
</script>

<svelte:head>
	<meta name="description" content="Telugo unifies Sales, Projects, Manufacturing, HR and Finance into one AI-native operating system. Built for SMBs with 50-500 employees.">
</svelte:head>

<!-- NAV -->
<nav>
	<div class="nav-left">
		<a class="logo" href="/">
			<Logo />
		</a>
		<div class="nav-links">
			<a class="nav-link" class:on={page.url.pathname === '/product'} href="/product">Product</a>
			<a class="nav-link" class:on={page.url.pathname === '/solutions'} href="/solutions">Solutions</a>
			<a class="nav-link" class:on={page.url.pathname === '/pricing'} href="/pricing">Pricing</a>
			<a class="nav-link" class:on={page.url.pathname === '/company'} href="/company">Company</a>
		</div>
	</div>
	<div class="nav-right">
		<button class="btn-theme" onclick={toggleTheme} title="Toggle theme">
			{theme === 'dark' ? '◐' : '◑'}
		</button>
		<button class="nav-hamburger" onclick={() => mobileMenuOpen = !mobileMenuOpen}>
			{mobileMenuOpen ? '✕' : '☰'}
		</button>
		<a class="btn-ghost" href="https://app.telugo.ai" target="_blank" rel="noopener noreferrer">Log in</a>
		<a class="btn-primary" href="/contact">Talk to Sales</a>
	</div>
</nav>

{#if mobileMenuOpen}
	<div class="mobile-menu">
		<a class:on={page.url.pathname === '/'} href="/" onclick={() => mobileMenuOpen = false}>Home</a>
		<a class:on={page.url.pathname === '/product'} href="/product" onclick={() => mobileMenuOpen = false}>Product</a>
		<a class:on={page.url.pathname === '/solutions'} href="/solutions" onclick={() => mobileMenuOpen = false}>Solutions</a>
		<a class:on={page.url.pathname === '/pricing'} href="/pricing" onclick={() => mobileMenuOpen = false}>Pricing</a>
		<a class:on={page.url.pathname === '/company'} href="/company" onclick={() => mobileMenuOpen = false}>Company</a>
		<a class:on={page.url.pathname === '/contact'} href="/contact" onclick={() => mobileMenuOpen = false}>Contact</a>
		<a href="https://app.telugo.ai" target="_blank" rel="noopener noreferrer" onclick={() => mobileMenuOpen = false}>Log in</a>
	</div>
{/if}

{@render children()}

<!-- FOOTER -->
<footer>
	<div class="ft-grid">
		<div>
			<a class="logo" href="/" style="display:inline-flex;margin-bottom:4px">
				<Logo height={28} />
			</a>
			<p class="ft-desc">The AI-native business operating system for SMBs. From first lead to last shipment, in one system.</p>
		</div>
		<div class="ft-col">
			<div class="ft-col-t">Product</div>
			<a href="/product">Overview</a>
			<a href="/product">Sales & CRM</a>
			<a href="/product">Smart Projects</a>
			<a href="/product">Manufacturing</a>
			<a href="/product">HR & People</a>
			<a href="/product">Finance</a>
			<a href="/product">Telugo AI</a>
		</div>
		<div class="ft-col">
			<div class="ft-col-t">Solutions</div>
			<a href="/solutions">IT Services</a>
			<a href="/solutions">Consulting</a>
			<a href="/solutions">Legal Firms</a>
			<a href="/solutions">Manufacturing</a>
			<a href="/solutions">Engineering</a>
		</div>
		<div class="ft-col">
			<div class="ft-col-t">Resources</div>
			<a href="/blog">Blog</a>
			<a href="/privacy">Privacy Policy</a>
			<a href="/terms">Terms & Conditions</a>
			<a href="/refund-policy">Refund Policy</a>
			<a href="/ai-transparency">AI Transparency</a>
		</div>
		<div class="ft-col">
			<div class="ft-col-t">Company</div>
			<a href="/company">About</a>
			<a href="/partners">Partners</a>
			<a href="/contact">Contact</a>
		</div>
	</div>
	<div class="ft-btm">
		<div class="ft-cp">&copy; 2026 Telugo AI, a product of Telugo AI Pvt Ltd. All rights reserved.</div>
		<div class="ft-lg">
			<a href="/contact">Contact</a>
		</div>
	</div>
</footer>
