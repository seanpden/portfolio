<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div class="flex-col h-screen hidden md:flex lg:flex w-32 ...">
		<div
			class="fixed bottom-0 right-0 h-min mb-10 w-16 card-hover ..."
			transition:fly={{ y: 200, duration: 2000 }}
		>
			<a href="/" style="writing-mode: vertical-lr; text-orientation: mixed;"
				>seanden522@gmail.com</a
			>
		</div>
	</div>
{:else}
	<div class="flex-col h-screen hidden md:flex lg:flex w-32 ..." />
{/if}
