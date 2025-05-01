<script>
	import Group from './Group.svelte';

	let { crt_status, crt_class } = $props();

	function toggle_crt() {
		console.log(`old crt_status: ${crt_status}`);
		crt_status = !crt_status;
		console.log(`new crt_status: ${crt_status}`);

		if (crt_status === true) {
			crt_class = 'crt';
		} else {
			crt_class = '';
		}

		console.log(`new crt_class: ${crt_class}`);
	}
</script>

<Group
	group="accessibility"
	class="col-auto grid w-full min-w-[164px] justify-self-end "
	content_class="w-fit"
>
	<div>
		<button class="hover:text-mauve" onclick={() => toggle_crt()}> CRT On/Off </button>
	</div>
</Group>
