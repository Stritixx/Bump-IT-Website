<template>
	<div>
		<div class="center example-nav" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
			<vs-navbar v-model="active" not-line center-collapsed class="!bg-transparent !text-gray-100 px-[200px] max-2xl:px-[100px] max-lg:px-[50px] max-sm:px-[25px] pt-8 -z-0">
				<template #left>
					<img src="./assets/images/logo.png" alt="Logo" class="h-[50px]"/>
					<h1 class="font-bold">Bump IT</h1>
				</template>
				<vs-navbar-item id="Home" :active="active == 'Home'" class="max-[800px]:hidden">
					Home
				</vs-navbar-item>
				<vs-navbar-item id="About us" :active="active == 'About us'" class="max-[800px]:hidden">
					About us
				</vs-navbar-item>
				<vs-navbar-item id="Get Started" :active="active == 'Get Started'" class="max-[800px]:hidden">
					Get Started
				</vs-navbar-item>
				<vs-navbar-item id="News" :active="active == 'News'" class="max-[800px]:hidden">
					News
				</vs-navbar-item>
				<template #right>
					<div class="flex max-[800px]:hidden max-[800px]:absolute">
						<vs-button type="flat">YouTube</vs-button>
						<vs-button class="!ml-4">Discord</vs-button>
					</div>
					<span @click="isMobile = true" class="hidden max-[800px]:block cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</span>
				</template>
			</vs-navbar>
		</div>



		<transition name="drop">
			<nav class="w-full p-5 absolute z-50 min-[800px]:hidden top-0" v-if="isMobile">
				<div class="bg-black border-2 border-gray-900 border-solid rounded-xl">
					<div class="w-full h-[100px] text-white font-bold flex justify-between items-center px-[35px]">
					<div class="flex items-center">
						<img src="./assets/images/logo.png" alt="" class="h-[50px]">
						Bump IT
					</div>
					<span @click="isMobile = false" class="cursor-pointer">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					</span>
				</div>
				<ul class="flex flex-col gap-[20px] pl-[45px] mt-2 text-white pb-12">
					<li>Home</li>
					<li>About us</li>
					<li>Get started</li>
					<li>News</li>
				</ul>
				</div>
			</nav>
		</transition>
		



		<router-view>

		</router-view>
	</div>
</template>




<style scoped>
	.drop-enter-active {
		animation: drop .2s;
	}


	.drop-leave-active {
		animation: drop .2s reverse;
	}


	@keyframes drop {
		0% {
			transform: scale(0);
			opacity: 0;
		}

		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
  
</style>





<script>
	export default {
		name: "App",
	}
</script>




<script setup>
	import { ref } from 'vue';

	const isMobile = ref(false);
</script>