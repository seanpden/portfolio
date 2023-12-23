<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let ready = false;
	let yoffset = -200;
	onMount(() => {
		ready = true;
	});

	let selectedSection = '';
	function setSection(section: string) {
		selectedSection = section;
	}

	export let text_color = 'text-primary-500';
	let selectedClass = `btn ${text_color}`;
	let unselectedClass = `btn hover:${text_color}`;
</script>

<AppBar background="transparent">
	<svelte:fragment slot="lead">
		{#if ready}
			<a
				class="hover:{text_color}"
				href="/"
				on:click={() => setSection('Home')}
				transition:fly={{ y: `${yoffset}`, duration: 200 }}>seanpden.dev</a
			>
		{/if}</svelte:fragment
	>
	<svelte:fragment slot="trail">
		{#if ready}
			<!-- <button class="lg:hidden btn btn-sm mr-4">
				<span>
					<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
						<rect width="100" height="20" />
						<rect y="30" width="100" height="20" />
						<rect y="60" width="100" height="20" />
					</svg>
				</span>
			</button> -->
			<a class="md:hidden" href="/resume.pdf" target="_blank" rel="noreferrer">
				<button
					type="button"
					class="btn variant-ghost"
					transition:fly={{ y: `${yoffset}`, duration: 1500 }}>Resume</button
				>
			</a>
			<div class="hidden md:flex">
				<a
					class={selectedSection === 'About' ? selectedClass : unselectedClass}
					href="#About"
					on:click={() => setSection('About')}
					transition:fly={{ y: `${yoffset}`, duration: 300 }}
				>
					<p class={text_color}>00.</p>
					<p />
					About</a
				>
				<a
					class={selectedSection === 'Experience' ? selectedClass : unselectedClass}
					href="#Experience"
					on:click={() => setSection('Experience')}
					transition:fly={{ y: `${yoffset}`, duration: 600 }}
				>
					<p class={text_color}>01.</p>
					<p />
					Experience</a
				>
				<a
					class={selectedSection === 'Projects' ? selectedClass : unselectedClass}
					href="#Projects"
					on:click={() => setSection('Projects')}
					transition:fly={{ y: `${yoffset}`, duration: 900 }}
				>
					<p class={text_color}>02.</p>
					<p />
					Projects</a
				>
				<a
					class={selectedSection === 'Contact' ? selectedClass : unselectedClass}
					href="#Contact"
					on:click={() => setSection('Contact')}
					transition:fly={{ y: `${yoffset}`, duration: 1200 }}
				>
					<p class={text_color}>03.</p>
					<p />
					Contact</a
				>
				<a href="/resume.pdf" target="_blank" rel="noreferrer">
					<button
						type="button"
						class="btn variant-ghost"
						transition:fly={{ y: `${yoffset}`, duration: 1500 }}
						>Resume
					</button>
				</a>
			</div>
		{/if}
	</svelte:fragment>
</AppBar>
