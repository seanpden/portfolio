<script>
	import { fade, slide } from 'svelte/transition';
	import AboutMe from './AboutMe.svelte';
	import Contact from './Contact.svelte';
	import Experience from './Experience.svelte';
	import Landing from './Landing.svelte';
	import Projects from './Projects.svelte';
</script>

<!-- <h1>Welcome to SvelteKit</h1> -->
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->

<div
	class="mx-auto max-w-screen-md overflow-y-auto leading-relaxed"
	style="background: transparent;"
>
	<style>
		.section {
			/* @media screen and (max-width: 800px) {
				height: 700px; /* Adjust the desired height value for small screens */
			/* } */
			/* @media screen and (max-height: 900px) { */
				/* height: 700px; Adjust the desired height value for small screens */
			/* } */ */
		}
	</style>

	<!-- <div class="mx-auto max-w-screen-lg flex flex-col space-y-4"> -->

	<div
		class="mx-12 md:mx-auto max-w-sm md:max-w-screen-md overflow-y-auto leading-relaxed flex flex-col space-y-4 ..."
	>
		<div class="section">
			<Landing />
		</div>
		<div class="section">
			<AboutMe />
		</div>
		<div class="section">
			<Experience />
		</div>
		<div class="section">
			<Projects />
		</div>
		<div class="section">
			<Contact />
		</div>
	</div>

	<!-- <Landing />
	<AboutMe />
	<Experience />
	<Projects />
	<Contact /> -->
</div>
