<script>
	import After from '$lib/components/After.svelte';
	import Before from './Before.svelte';

	/**
	 * @type {any[]}
	 */
	export let routes = [];
	let colorBrand = 'rgba(255,46,46,.4)';
</script>

<Before>
	<nav
		class="position-fixed top-0 w-100 d-flex flex-column align-items-center justify-content-between bg-light bg-opacity-10 gap-1 px-3 py-2">
		<a href="/" class="btn btn-light text-dark border-0 text-uppercase" style="background:{colorBrand}">
			<b>Всем привет</b>
		</a>
	</nav>
	<nav
		class="position-fixed bottom-0 w-100 d-flex flex-column align-items-center justify-content-between bg-light bg-opacity-10 gap-1 px-3 py-2">
		<div class="d-flex align-items-center gap-1">
			{#each routes as item}
				<a href={item.url} class="btn btn-sm btn-light bg-light bg-opacity-50 border-0 text-dark">{item.text}</a>
			{/each}
		</div>
	</nav>
</Before>
<After>
	<nav
		class="position-fixed top-0 w-100 d-flex align-items-center justify-content-between bg-light bg-opacity-10 px-3 py-2">
		<a href="/" class="btn btn-light text-dark border-0 text-uppercase" style="background:{colorBrand}">
			<b>Всем привет</b>
		</a>
		<div class="d-flex align-items-center gap-1">
			{#each routes as item}
				<a href={item.url} class="btn btn-light bg-light bg-opacity-50 border-0 text-dark">{item.text}</a>
			{/each}
		</div>
	</nav>
</After>
