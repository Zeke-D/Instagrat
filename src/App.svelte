<script>
	import Post from './Post.svelte';
	export let name;

	let apiResponse = fetch("https://api.pexels.com/v1/search?query=people", {
		headers: {
      		Accept: "application/json",
      		"Content-Type": "application/json",
      		Authorization: "563492ad6f91700001000001a6f866bad8ef433497a71543593a5f27",
    	},
	})
	.then(async res => {
		let x;
		await res.json().then(photos => {
			x = photos;
		});
		console.log(x);
		return x;
	});

</script>

<main>
	{#await apiResponse}
	{:then response}
		<!-- <Post
			source="../images/knot.png"
			isAd=true
			adType="eye"
			caption="Trust us. We know you best."
			user={{username: "We know what you want."}}/> -->
		{#each response.photos as photo}
		<Post
			source={photo.src.landscape}
			user={{username: photo.photographer, profilePicture: "", link: photo.photographer_url}}/>
		{/each}
	{:catch error}
	{/await}
</main>

<style>
	main {
		margin-left: calc(50vw - 200px);
	}

	.spacer {
		flex-grow: 1;
	}
</style>