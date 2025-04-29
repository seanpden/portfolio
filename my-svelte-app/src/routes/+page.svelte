<script lang="ts">
	import Group from '../components/Group.svelte';
	import { onMount } from 'svelte';
	import SocialMedia from '../components/SocialMedia.svelte';
	import Nav from '../components/Nav.svelte';
	import MainBlock from '../components/MainBlock.svelte';
	import Home from '../components/Home.svelte';
	import Info from '../components/Info.svelte';

	let dt = $state(new Date().toLocaleString());
	let headerheight = $state(0);
	let section = $state('');
	let selectedclass = 'font-bold underline';

	function handleMobileAlert() {
		alert('For the best experience, please use a device that is at least 1080px wide.');
	}

	let height = $state(0);
	let width = $state(0);

	onMount(() => {
		width = window.innerWidth;
		if (width < 1080) {
			handleMobileAlert();
		}
	});

	onMount(() => {
		window.addEventListener('resize', () => {
			height = window.innerHeight;
		});
	});

	$effect(() => {
		const id = setInterval(() => {
			dt = new Date().toLocaleString();
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
			console.log(`height: ${headerheight}px`);
		}
	});
</script>

<div class="m-2 overflow-y-hidden font-mono">
	<!-- {handleMobileAlert()} -->
	<!-- TOPBAR -->
	<div
		class="font-base mocha grid min-w-[1080px] grid-cols-[auto_1fr_auto] items-center bg-transparent text-text"
		id="myDiv"
	>
		<Home {section}></Home>
		<Nav {selectedclass} {section}></Nav>
		<Info {dt}></Info>
	</div>

	<!-- BODY -->
	<div
		style="height: calc(100vh - {headerheight}px - 1rem);"
		class="flex grid w-auto min-w-[1080px] grid-cols-[auto_1fr_auto] text-text"
	>
		<SocialMedia></SocialMedia>
		<MainBlock></MainBlock>
	</div>
</div>
