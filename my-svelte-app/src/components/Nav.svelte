<script lang="ts">
	import Group from '../components/Group.svelte';
	let { selectedclass, section } = $props();
</script>

<Group
	group="nav"
	class="grid min-w-[696px] justify-self-center md:col-auto md:w-full"
	content_class="w-fit"
>
	<div>
		<a
			class="hover:text-mauve {section === 'about' ? selectedclass : ''}"
			onclick={() => (section = 'about')}
			href="#about"
		>
			00. About
		</a>
	</div>
	<div>
		<a
			class="hover:text-mauve {section === 'experience' ? selectedclass : ''}"
			href="#experience"
			onclick={() => (section = 'experience')}>01. Experience</a
		>
	</div>
	<div>
		<a
			class="hover:text-mauve {section === 'project' ? selectedclass : ''}"
			href="#project"
			onclick={() => (section = 'project')}>02. Project</a
		>
	</div>
	<div>
		<a
			class="hover:text-mauve {section === 'contact' ? selectedclass : ''}"
			href="#contact"
			onclick={() => (section = 'contact')}
		>
			03. Contact</a
		>
	</div>
</Group>
