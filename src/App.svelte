<script>
	import Icon from './Icon.svelte';
	import Post from './Post.svelte';
	import posts from './posts';
</script>

<main>
	{#each posts as post}
	<Post {...post} />
	{/each}
</main>

<style>
	main {
		margin-left: calc(50vw - 200px);
		margin-right: calc(50vw - 170px);
	}

	.spacer {
		flex-grow: 1;
	}
</style>