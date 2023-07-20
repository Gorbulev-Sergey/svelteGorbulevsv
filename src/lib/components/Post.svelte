<script>
	import { Post } from '$lib/models/Post';
	import { db } from '$lib/scripts/firebase';
	import { ref, remove } from 'firebase/database';
	import Toast from './Toast.svelte';

	/**
	 * @type {string}
	 */
	export let uid;
	export let post = new Post();
	let showToast = false;
</script>

<Toast {showToast} />
<div class="bg-light text-dark p-3 rounded mb-3">
	<h5>{post.title}</h5>
	<div class="small mb-2">{post.created}</div>
	<div class="embed-responsive embed-responsive-21by9">
		<iframe
			class="w-100 h-100 rounded"
			src={post.url.replace('youtu.be', 'www.youtube.com/embed/')}
			title={post.title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
	<div class="d-flex align-items-center justify-content-end">
		<button
			class="btn btn-light text-danger"
			on:click={() =>
				remove(ref(db, `/posts/${uid}`)).then(() => {
					showToast = true;
					setTimeout(() => {
						showToast = false;
					}, 1200);
				})}>Удалить</button
		>
	</div>
</div>
