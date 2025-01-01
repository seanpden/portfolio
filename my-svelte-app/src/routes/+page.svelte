<script lang="ts">
	import Group from '../components/Group.svelte';
	import { onMount } from 'svelte';
	import SocialMedia from '../components/SocialMedia.svelte';

	let dt = $state(new Date().toLocaleString());
	let headerheight = $state(0);

	$effect(() => {
		const id = setInterval(() => {
			dt = new Date().toLocaleString();
			// console.log(dt);
		}, 1000);

		return () => {
			clearInterval(id);
		};
	});

	onMount(() => {
		const elem = document.querySelector('#myDiv');
		if (elem) {
			const rect = elem.getBoundingClientRect();
			headerheight = rect.height;
			console.log(`height: ${rect.height}px`);
		}
	});
</script>

<div
	class="font-base mocha invisible grid grid-cols-[auto_1fr_auto] items-center bg-transparent font-mono text-text md:visible"
	id="myDiv"
>
	<!-- <div -->
	<!-- 	class="mx-x my-y font-base mocha invisible grid grid-cols-[auto_1fr_auto] items-center bg-transparent font-mono text-text md:visible" -->
	<!-- > -->
	<Group group="home" class="col-auto min-w-32 justify-self-start" content_class="w-fit">
		<div>
			<a class="hover:text-mauve" href="/">seanpden.dev</a>
		</div>
	</Group>
	<Group
		group="nav"
		class="col-auto grid w-full justify-self-center md:visible md:overflow-auto"
		content_class="w-fit"
	>
		<div>00. About</div>
		<div>01. Experience</div>
		<div>02. Project</div>
		<div>03. Contact</div>
	</Group>
	<Group group="info" class="justify-self-end" content_class="w-fit">
		<div>
			{dt}
		</div>
	</Group>
</div>

<div
	style="height: calc(100vh - {headerheight}px);"
	class="grid grid-cols-[auto_1fr_auto] text-text"
>
	<Group
		group="social"
		class="col-auto justify-self-start"
		content_class="min-w-32 flex-col text-left mt-2"
	>
		<SocialMedia></SocialMedia>
	</Group>
	<Group
		group="main"
		class="col-auto w-full justify-start justify-self-center"
		content_class="w-full flex-col text-left"
	>
		<div class="self-start text-lg font-bold">
			{'Lorem Ipsum'}
		</div>
		<div class="self-start">
			{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
		</div>
		<div class="self-start">
			{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'}
		</div>
		<div class="self-start">
			{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
		</div>
		<div class="self-start">
			{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
		</div>
		<div class="self-start">
			{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
		</div>
	</Group>
</div>
