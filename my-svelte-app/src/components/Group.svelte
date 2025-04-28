<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
		group: string;
		class: string;
		content_class: string;
	};
	let { children, group, ...rest }: Props = $props();
</script>

<div class="h-full w-fit bg-transparent p-2 pt-3 {rest.class}">
	<div
		class="rounded-base h-full w-fit border border-surface0 bg-transparent text-surface0 transition-all hover:border-mauve hover:text-mauve {rest.class}"
	>
		<!-- bg below should match root bg color -->
		<div class="absolute z-10 mx-2 -mt-3.5 bg-base px-2 font-bold">{group}</div>
		<!-- This is where each component differs... -->
		<div
			class="rounded-base flex h-full items-center gap-4 bg-transparent p-2.5 text-text {rest.content_class}"
		>
			{@render children()}
		</div>
		<!-- end... -->
	</div>
</div>
