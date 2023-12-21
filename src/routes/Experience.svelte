<script lang="ts">
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import McleodSoftware from './McleodSoftware.svelte';
	import BamaBudweiser from './BamaBudweiser.svelte';

	let valueSingle: string = 'mcleodsoftware';
	let debugIntern: boolean = false;

	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if !ready}
	<div class="container mx-auto flex items-stretch justify-center h-screen-custom" />
{:else}
	<!-- <div
		class="container mx-auto flex items-stretch justify-center h-screen-custom mb-48"
		transition:fly={{ y: 200, duration: 2000 }}
	> -->
	<div class="" transition:fly={{ y: 200, duration: 2000 }}>
		<div class="mb-48 flex-1">
			<div class="flex">
				<h3 id="" class="h3 font-semi-bold pb-2 text-primary-500">01.&nbsp;</h3>
				<h3 id="Experience" class="h3 font-semi-bold pb-2">Experience</h3>
			</div>
			<hr class="pb-2" />
			<div class="flex pt-1">
				<ListBox class="basis-1/3 pr-3">
					<ListBoxItem bind:group={valueSingle} name="medium" value="mcleodsoftware"
						>Mcleod Software</ListBoxItem
					>
					<ListBoxItem bind:group={valueSingle} name="medium" value="bamabudweiser"
						>Bama Budweiser</ListBoxItem
					>
					<!-- <ListBoxItem name="medium" on:click={() => (debugIntern = !debugIntern)}
						>Other</ListBoxItem
					> -->
				</ListBox>
				<!-- <div class="basis-1/3">Job 1</div> -->
				<div class="basis-2/3">
					{#if valueSingle == 'mcleodsoftware'}
						<McleodSoftware {debugIntern} />
					{:else if valueSingle == 'bamabudweiser'}
						<BamaBudweiser />
					{:else}
						<p>You shouldn't be seeing this...</p>
					{/if}
					<!-- <p>
					Ni! Ni! Ni! Ni! I have to push the pram a lot. We found them. I don't want to talk to you
					no more, you empty-headed animal food trough water! I fart in your general direction! Your
					mother was a hamster and your father smelt of elderberries! Now leave before I am forced
					to taunt you a second time!
					<br />
					{valueSingle}
				</p> -->
				</div>
			</div>
		</div>
	</div>
{/if}
