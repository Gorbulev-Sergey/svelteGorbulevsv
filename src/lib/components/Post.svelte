<script>
	import { Post } from '$lib/models/Post';

	export let post = new Post();
</script>

<div class="bg-light text-dark p-3 rounded mb-3">
	<h5>{post.title}</h5>
	<div class="small mb-2">{post.created}</div>
	<iframe class="w-100 rounded" src={post.url} title={post.title} />
</div>
