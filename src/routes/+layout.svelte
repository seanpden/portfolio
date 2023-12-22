<script>
	import '../app.pcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from './Header.svelte';
	import SidebarLeft from './SidebarLeft.svelte';
	import SidebarRight from './SidebarRight.svelte';
	import Footer from './Footer.svelte';

	let pageX = 0;
	let pageY = 0;

	let bg_900 = '#313944';
	let primary_900 = '#06b6d4';
</script>

<svelte:window on:mousemove={(e) => ({ pageX, pageY } = e)} />

<!-- <body class="" style="--mousex: {pageX}px; --mousey: {pageY}px;"> -->
<body
	class=""
	style="background: radial-gradient(600px at {pageX}px {pageY}px, rgba(211, 165, 240, .15), transparent 80%);"
>
	<AppShell>
		<svelte:fragment slot="header"><Header /></svelte:fragment>
		<!-- x: {pageX} -->
		<!-- y: {pageY} -->
		<!-- <svelte:fragment slot="pageHeader"><Header /></svelte:fragment> -->
		<svelte:fragment slot="sidebarLeft"><SidebarLeft /></svelte:fragment>
		<svelte:fragment slot="sidebarRight"><SidebarRight /></svelte:fragment>
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<main class="">
			<slot />
		</main>
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
		<!-- (footer) -->
	</AppShell>
</body>
