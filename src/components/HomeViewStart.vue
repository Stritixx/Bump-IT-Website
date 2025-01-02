<template>
	<div class="min-h-screen flex flex-col items-center justify-center p-[10%]">
		<p class="text-gray-300 text-6xl font-bold max-w-[800px] text-center leading-normal max-sm:text-5xl max-sm:leading-[1.4] max-[480px]:text-[2.5rem]" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Everything that your server needs <span class="font-bold bg-gradient-text bg-200% text-transparent bg-clip-text animate-gradient-animation">is here!</span></p>
		<div class="w-full flex justify-center mt-7">
			<p class="text-gray-400 w-[750px] text-center text-xl text-shadow leading-8" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">Easy & useful tool services that will make your server better - don't waste your time anymore on manual bumping!</p>
		</div>
		<div class="flex mt-8">
			<HomeViewButtons />
		</div>
	</div>
</template>


<script>
	import HomeViewButtons from './HomeViewButtons.vue';

	export default {
		name: "HomeViewStart",
		components: {
			HomeViewButtons,
		}
	}
</script>
