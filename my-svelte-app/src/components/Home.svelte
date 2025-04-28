<script lang="ts">
	import Group from '../components/Group.svelte';
	let { section } = $props();
</script>

<Group group="home" class="col-auto min-w-32 justify-self-start" content_class="w-fit">
	<div>
		<a class="hover:text-mauve" href="/" onclick={() => (section = '')}>seanpden.dev</a>
	</div>
</Group>
