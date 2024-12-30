<script lang="ts">
	import Group from '../components/Group.svelte';

	console.log('Health check...');

	let dt = $state(new Date().toLocaleString());

	$effect(() => {
		const id = setInterval(() => {
			dt = new Date().toLocaleString();
		}, 1000);

		return () => {
			clearInterval(id);
		};
	});
</script>

<div
	class="mx-x my-y font-base font-base font-base mocha invisible grid grid-cols-[auto_1fr_auto] items-center bg-transparent font-mono text-text md:visible"
>
	<Group group="home" class="col-auto min-w-32 justify-self-start">
		<div>
			<a class="hover:text-peach" href="/">seanpden.dev</a>
		</div>
	</Group>
	<Group group="nav" class="col-auto grid w-full justify-self-center md:visible md:overflow-auto">
		<div>00. About</div>
		<div>01. Experience</div>
		<div>02. Project</div>
		<div>03. Contact</div>
	</Group>
	<Group group="info" class="justify-self-end">
		<div>
			{dt}
		</div>
	</Group>
</div>
