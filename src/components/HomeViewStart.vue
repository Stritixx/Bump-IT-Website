<template>
	<div class="w-full flex flex-col items-center justify-center h-screen flex-wrap p-[10%]">
		<p class="text-gray-300 text-6xl font-bold max-w-[800px] text-center leading-normal max-sm:text-5xl max-sm:leading-[1.4] max-[480px]:text-[2.5rem]" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Everything that your server needs <span class="font-bold bg-gradient-text bg-200% text-transparent bg-clip-text animate-gradient-animation">is here!</span></p>
		<div class="w-full flex justify-center mt-7">
			<p class="text-gray-400 w-[750px] text-center text-xl text-shadow leading-8" data-aos="fade-up" data-aos-delay="800" data-aos-duration="1000">The easiest way to build your own Discord bot with custom commands/functions without any programming knowledge!</p>
		</div>
		<div class="flex mt-8">
			<div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="500">
				<vs-button type="flat" :active="active == 1" @click="active = 1" class="!text-sm">
					Get Started!
				</vs-button>
			</div>

			<div data-aos="fade-up" data-aos-delay="1300" data-aos-duration="500">
				<vs-button type="flat" :active="active == 1" @click="active = 1" class="!ml-4 !text-sm">
					How it works?
				</vs-button>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: "HomeViewStart",
	}
</script>
