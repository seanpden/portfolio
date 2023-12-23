<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

<!-- <div class="container mx-auto flex items-center justify-center h-screen-custom"> -->
{#if ready}
	<!-- <div
		class="container mx-auto flex flex-col max-w-screen-lg items-stretch justify-center h-screen-custom"
		transition:fly={{ y: 200, duration: 2000 }}
	> -->

	<div class="" transition:fly={{ y: 200, duration: 2000 }}>
		<!-- Div for landing section -->
		<div class="mb-48">
			<div class="flex">
				<h3 id="" class="h3 font-semi-bold pb-2 text-primary-500">00.&nbsp;</h3>
				<h3 id="About" class="h3 font-semi-bold pb-2">About</h3>
			</div>
			<hr class="pb-2" />
			<p class="mb-4">
				During my childhood, I stumbled upon a C++ book in my father's office—an early encounter
				that ignited my belief in the power of software and data to solve any problem. Since then,
				I've had the privilege of working with a <a
					class="font-bold hover:anchor"
					href="https://us.budweiser.com/">major distribution company</a
				>
				as a support specialist, graduating with a degree in Computer Science from an oustanding
				<a class="font-bold hover:anchor" href="https://www.uab.edu/home/">R1 research university</a
				>, building data-intensive applications and statistical models for America's leading
				<a class="font-bold hover:anchor" href="https://www.mcleodsoftware.com/"
					>trucking software company</a
				>, and building software solutions for my own clients.
			</p>
			<p class="mb-4">
				<!-- My current focus is continuing my education while working as a data engineer. I plan on -->
				<!-- enrolling into UT Austin's Master's of Computer Science program.  -->

				I am dedicated to advancing my education and knowledge while working as a data engineer. My
				next step involves enrolling in a Master's of Computer Science program.
			</p>
			<p class="">
				<!-- When I'm not learning or working, I'm probably at the gym, catching up with friends, or
				running around Baldur's Gate, looking for an adventure. -->

				When I'm not learning or working, you'll likely find me at the gym, catching up with
				friends, or immersed in the digital landscapes of Baldur's Gate, seeking new adventures.
			</p>
		</div>
	</div>
{:else}
	<div
		class="container mx-auto flex flex-col max-w-screen-lg items-center justify-center h-screen-custom"
	/>
{/if}
