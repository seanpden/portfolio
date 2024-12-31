<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
		group: string;
		class: string;
	};
	let { children, group, ...rest }: Props = $props();
</script>

<div class="h-full w-fit bg-base p-2 pt-3 {rest.class}">
	<div
		class="text-border rounded-base h-full w-fit border border-text bg-base transition-all hover:border-peach hover:text-peach {rest.class}"
	>
		<div class="absolute z-10 mx-2 -mt-3.5 bg-base px-2">{group}</div>
		<div class="rounded-base flex h-full w-32 flex-col items-center gap-4 bg-base p-2.5 text-text">
			{@render children()}
		</div>
	</div>
</div>
