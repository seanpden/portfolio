<script lang="ts">
	import Group from '../components/Group.svelte';
	let { dt } = $props();
</script>

<Group
	group="info"
	class="col-auto grid w-full min-w-[207px] justify-self-end"
	content_class="w-fit"
>
	<div>
		{dt}
	</div>
</Group>
