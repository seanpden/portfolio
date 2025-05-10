<script lang="ts">
	import Group from '../components/Group.svelte';
</script>

<Group
	group="social"
	class="col-auto justify-self-start"
	content_class="min-w-32 flex-col text-left mt-2"
>
	<div class="hover:color-peach text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="https://github.com/seanpden"
			aria-label="github"
		>
			<i class="nf nf-dev-github text-3xl"></i>
			<div>github</div>
		</a>
	</div>

	<div class="text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="https://www.instagram.com/sean_denney/"
			aria-label="instagram"
		>
			<i class="nf nf-md-instagram text-3xl"></i>
			<div>instagram</div>
		</a>
	</div>

	<div class="text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="https://www.linkedin.com/in/seanpden/"
			aria-label="linkedin"
		>
			<i class="nf nf-dev-linkedin text-3xl"></i>
			<div>linkedin</div>
		</a>
	</div>

	<div class="text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="https://mastodon.social/@seanpden"
			aria-label="mastodon"
		>
			<i class="nf nf-fa-mastodon text-3xl"></i>
			<div>mastodon</div>
		</a>
	</div>
	<div class="text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="https://bsky.app/profile/seanpden.bsky.social"
			aria-label="bluesky"
		>
			<i class="nf nf-fae-butterfly text-3xl"></i>
			<div>bluesky</div>
		</a>
	</div>

	<div class="text-center hover:text-mauve">
		<a
			target="_blank"
			rel="me noreferrer noopener"
			href="mailto:seanden522@gmail.com"
			aria-label="email"
		>
			<i class="nf nf-md-email text-3xl"></i>
			<div>email</div>
		</a>
	</div>

	<div class="text-center hover:text-mauve">
		<a target="_blank" rel="me noreferrer noopener" href="/" aria-label="resume">
			<i class="nf nf-md-file text-3xl"></i>
			<div>resume</div>
		</a>
	</div>
</Group>
