<script>
	import Nav from '$lib/components/Nav.svelte';
	let routes = [
		{ text: 'Me', url: 'gorbulevsv.ru' },
		{ text: 'LandingPage', url: 'landingPage1.gorbulevsv.ru' }
	];
</script>

<Nav {routes} />
<div class="container" style="margin-top:4em; margin-bottom:4em;">
	<slot />
</div>
