<script>
	import After from './After.svelte';
	import Before from './Before.svelte';

	export let text = 'Текст';
	export let description = '';
	export let image = 'https://cdn1.ozone.ru/s3/multimedia-4/6128559676.jpg';
	export let color = '';
	export let textColor = '';
	export let reverse = false;
	export let anchor = '';
</script>

<Before>
	<div
		id={anchor}
		class="d-flex align-items-center justify-content-center {reverse ? 'flex-column-reverse' : 'flex-column'} p-4 gap-5"
		style="min-height: 100vh; background:{color}">
		<div class="text-center">
			<h1 class="display-2" style="color:{textColor}">{text}</h1>
			<i class="text-muted display-6" style="font-size:1.3em">{description}</i>
		</div>
		<img class="rounded-5" style="max-height: 80vh; max-width:60vw" src={image} alt="" />
	</div>
</Before>
<After>
	<div
		id={anchor}
		class="d-flex align-items-center justify-content-between {reverse ? 'flex-row-reverse' : ''} px-5 gap-3"
		style="min-height: 100vh; background:{color}">
		<div class="flex-grow-1 text-center">
			<h1 class="display-2" style="color:{textColor}">{text}</h1>
			<i class="text-muted display-6" style="font-size:1.3em">{description}</i>
		</div>
		<img class="rounded-5" style="max-height: 80vh; max-width:40vw" src={image} alt="" />
	</div>
</After>
