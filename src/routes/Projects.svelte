<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;
	onMount(() => {
		ready = true;
	});
</script>

{#if !ready}
	<div
		class="container mx-auto flex flex-col max-w-screen-lg items-stretch justify-center h-screen-custom"
	/>
{:else}
	<!-- <div
		class="container mx-auto flex flex-col max-w-screen-lg items-stretch justify-center h-screen-custom"
		transition:fly={{ y: 200, duration: 2000 }}
	> -->
	<div class="" transition:fly={{ y: 200, duration: 2000 }}>
		<!-- Div for landing section -->
		<div class="mb-48 space-y-4">
			<!-- div for title -->
			<div class="flex">
				<h3 id="" class="h3 font-semi-bold pb-2 text-primary-500">02.&nbsp;</h3>
				<h3 id="Projects" class="h3 font-semi-bold pb-2">Projects</h3>
			</div>
			<hr class="pb-2" />

			<!-- div for project card -->
			<div class="card p-4">
				<!-- div to contain img, project title, description -->
				<div class="flex pb-4">
					<!-- div for img -->
					<div class="hidden md:block basis-1/3 pr-2">
						<img
							src="https://webthumb.flowjo.com/?p=media%2FProduct-Images-FlowJo.png&w=800"
							height="162"
							width="162"
							alt=""
							style="width:162;height:162px;"
						/>
					</div>
					<!-- div for project title and description -->
					<div class="basis-full md:basis-2/3">
						<a href="/" id="About" class="h4 font-semibold pb-2 hover:text-primary-500"
							>Diagnosing Acute Myloid Leukemia with Machine Learning Algorithms 🔗</a
						>
						<p>
							A machine learning model that can parse cytometry data and diagnose an individual with
							acute myeloid leukemia.
						</p>
					</div>
				</div>
				<!-- div for tech stack -->
				<div class="flex flex-auto space-x-4">
					<span class="chip variant-ghost">python</span>
					<span class="chip variant-ghost">numpy</span>
					<span class="chip variant-ghost">pandas</span>
					<span class="chip variant-ghost">sklearn</span>
				</div>
			</div>

			<!-- div for project card -->
			<div class="card p-4">
				<!-- div to contain img, project title, description -->
				<div class="flex pb-4">
					<!-- div for img -->
					<div class="hidden md:block basis-1/3 pr-2">
						<img
							src="https://www1.djicdn.com/cms/uploads/3a800890a9e26382f74908783cd653b9@1x.webp"
							alt=""
							height="162px"
							width="162px"
							style="width:162;height:162px;"
						/>
					</div>
					<!-- div for project title and description -->
					<div class="basis-full md:basis-2/3">
						<a href="/" id="About" class="h4 font-semibold pb-2 hover:text-primary-500"
							>Drone Farming 🔗</a
						>
						<p>An autonomous drone that scans farmland and manages farming assets.</p>
					</div>
				</div>
				<!-- div for tech stack -->
				<div class="flex flex-auto space-x-4">
					<span class="chip variant-ghost">Java</span>
					<span class="chip variant-ghost">JavaFX</span>
					<span class="chip variant-ghost">DJI SDK</span>
				</div>
			</div>

			<!-- div for project card -->
			<div class="card p-4">
				<!-- div to contain img, project title, description -->
				<div class="flex pb-4">
					<!-- div for img -->
					<div class="hidden md:block basis-1/3 pr-2">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.centennialco.gov%2Ffiles%2Fsharedassets%2Fpublic%2Fimages%2Fresidents%2Fcovid-19.png%3Fw%3D1200&f=1&nofb=1&ipt=49152db75d0a8889fd6a29e06cbbdea947f24d21715177c114668f291f11283e&ipo=images"
							height="162"
							width="162"
							alt=""
							style="width:162;height:162px;"
						/>
					</div>
					<!-- div for project title and description -->
					<div class="basis-full md:basis-2/3">
						<a href="/" id="About" class="h4 font-semibold pb-2 hover:text-primary-500"
							>Epidemic Probability Simulator 🔗</a
						>
						<p>
							Full simulation of an epidemic amongst a population, complete with vaccination status,
							immunity chance, population density, and more.
						</p>
					</div>
				</div>
				<!-- div for tech stack -->
				<div class="flex flex-auto space-x-4">
					<span class="chip variant-ghost">python</span>
					<span class="chip variant-ghost">numpy</span>
				</div>
			</div>
		</div>
	</div>
{/if}
