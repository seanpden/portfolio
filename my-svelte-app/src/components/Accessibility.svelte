<script>
	import Group from './Group.svelte';

	let { crt_status = $bindable(), crt_class = $bindable() } = $props();

	function toggle_crt() {
		crt_status = !crt_status;
		crt_status ? (crt_class = 'crt') : (crt_class = '');
	}
</script>

<Group
	group="accessibility"
	class="col-auto grid w-full min-w-[164px] justify-self-end "
	content_class="w-fit"
>
	<div>
		<button class="hover:text-mauve" onclick={() => toggle_crt()}>
			{crt_status ? 'Toggle CRT [x]' : 'Toggle CRT [ ]'}
		</button>
	</div>
</Group>
