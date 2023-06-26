<script>
	import Nav from '$lib/components/Nav.svelte';
	let routes = [
		{ text: 'Me', url: 'https://me.gorbulevsv.ru' },
		{ text: 'Качели', url: 'https://kacheli.gorbulevsv.ru' },
		{ text: 'Беседки', url: 'https://besedki.gorbulevsv.ru' }
	];
</script>

<Nav {routes} />
<div class="container" style="margin-top:4em; margin-bottom:4em;">
	<slot />
</div>
