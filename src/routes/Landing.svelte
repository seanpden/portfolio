<script>
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<!-- Div for Landing -->
<!-- <div class="flex items-center justify-center h-screen"> -->
{#if ready}
	<div
		class="h-screen pb-32 flex flex-col justify-center"
		transition:fly={{ y: 800, duration: 1500 }}
	>
		<!-- <div class="container mx-auto h-screen"> -->
		<!-- Div for landing section -->
		<h1 class="h1 font-bold">Sean Denney</h1>
		<h3 class="h3 font-semibold">Software Engineer | Data Engineer</h3>
		<p class="">
			<!-- I engineer seamless and efficient software solutions while architecting and optimizing data
			pipelines. -->
			I build robust and efficient data solutions and software.
		</p>
	</div>
{:else}
	<div class="h-screen pb-32 flex flex-col justify-center" />
{/if}
