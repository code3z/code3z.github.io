<script context="module" lang="ts">
	export const prerender = true;
	import scroll from '../lib/scroll.js';
	import 'animate.css';
	import Typewriter from 'svelte-typewriter';
	import { browser } from '$app/env';

	if (browser) {
		scroll.mutationInit();
	}
</script>

<script lang="ts">
	import Contact from '$lib/contact.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1
		class="m-3 font-extrabold text-5xl scrolljs animate__animated animate__fadeOutRight"
		data-range="1to30"
	>
		Hey, there!
	</h1>
	<Typewriter>
		<p class="m-5 mt-10">I'm Ian, and I make cool websites and stuff.</p>
	</Typewriter>
	<p class="ml-5 mt-20 text-base"><span class="orange-underline">The stack:</span></p>
	<ol class="m-5">
		<li class="scrolljs" data-range="0to10">
			<h3>☕ Javascript</h3>
			An easy language for building great apps, sites, and servers.
		</li>
		<li class="scrolljs" data-range="15to30">
			<h3>👨‍💻 Typescript</h3>
			Javascript with type safety. Typescript brings many benefits for projects in the long term, it's
			probably a good idea to have your app coded in typescript instead of Javascript.
		</li>
		<li class="scrolljs" data-range="30to45">
			<h3>⛰️ Vue</h3>
			Vue, pronounced 'view,' is a library like react for creating great user interfaces. Unlike react,
			it is fairly small and has a cleaner syntax.
		</li>
		<li class="scrolljs" data-range="45to65">
			<h3>⛰️ Vuetify</h3>
			Vuetify is a popular library of pre-made components that allow developers to make apps much more
			quickly.
		</li>
		<li class="scrolljs" data-range="65to90">
			<h3>🔫 GUN</h3>
			GUN is a decentralized graph database, great for building apps without having to build a backend.
		</li>
			<li class="scrolljs" data-range="90to120">
			<h3>🖌️ CSS</h3>
			CSS is used to create beatiful website styles. In addition to plain CSS, I have experience with utility libraries like Tailwind.
		</li>
		<li class="scrolljs" data-range="120to150">
			<h3>🐧Linux</h3>
			Linux is an operating system used for most online servers, among many other things.
		</li>
	</ol>
		<Contact />

	<p class="flex justify-center font-sans mt-20 m-5 text-underline">
		<a href="https://github.com/code3z"><img alt="github" class="icon" src="/icons8-github.gif" /> Follow @code3z on Github </a>
	</p>
</section>

<style>
	li {
		margin-top: 1rem;
	}

	@keyframes zoom {
		from {
			transform: scale(0) translate(0, 0);
		}
		to {
			transform: scale(1) translate(0, 0);
		}
	}

	@keyframes fadedown {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
			transform: translateY(100px);
		}
	}
	.scrolljs {
		animation-play-state: paused !important;
		animation-duration: 1s !important;
		animation-timing-function: linear !important;
	}

	li.scrolljs {
		animation-name: zoom;
	}
	.icon {
		filter: grayscale(0.5) invert(1);
		width: 1.5em;
		display: inline;
	}
	ol {
		max-width: 900px;
	}
</style>
