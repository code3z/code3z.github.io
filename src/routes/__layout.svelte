<script lang="ts">
	//	import Header from '$lib/header/Header.svelte';
	import '../tailwind.css';
	import '../app.css';
	import kursor from 'kursor';
	import { browser } from '$app/env';
	if (browser) {
		const kursorx = new kursor({
			type: 4
		});
	}
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>
<footer class="text-center text-sm m-5 mt-10">
	Copyright 2021, MIT License. <br>
	Icons from <a href="https://icons8.com">Icons8</a> <br>
	Link design from <a href="https://codepen.io/lukemeyrick">Luke Meyrick</a>
</footer>
