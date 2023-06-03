<script>
	// @ts-nocheck
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import { db } from '$lib/scripts/firebase';
	import Post from '$lib/components/Post.svelte';

	let posts = new Object();

	onMount(async () => {
		onValue(ref(db, '/posts'), (s) => {
			if (s.exists()) {
				posts = s.val();
			}
		});
	});
</script>

{#each Object.entries(posts).sort(([k1, v1], [k2, v2]) => new Date(v2.created) - new Date(v1.created)) as [uid, post], i}
	<Post {post} />
{/each}
