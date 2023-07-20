<script>
	export let showToast = false;
</script>

<div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
	<div class="toast {showToast ? 'show' : 'hide'}">
		<div class="d-flex align-items-center justify-content-between p-3">
			<div>Публикация удалена.</div>
		</div>
	</div>
</div>
