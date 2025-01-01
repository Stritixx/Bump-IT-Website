<template>
	<nav class="w-full p-5 absolute z-50 min-[800px]:hidden top-0" v-if="isMobile">
		<div class="bg-black border-2 border-gray-900 border-solid rounded-xl">
			<div class="w-full h-[100px] text-white font-bold flex justify-between items-center px-[35px]">
				<div class="flex items-center">
					<img src="../assets/images/logo.png" alt="" class="h-[50px]">
					Bump IT
				</div>
				<span @click="isMobile = false" class="cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				</span>
			</div>
			<ul class="flex flex-col gap-[20px] pl-[45px] mt-2 text-white pb-12">
				<li>Home</li>
				<li>Get started</li>
				<li>How it works</li>
				<li>News</li>
			</ul>
		</div>
	</nav>
</template>



<script>
	import { inject } from 'vue';


	export default {
		name: "MobileNavbar",
		setup() {
			const isMobile = inject('isMobileNavbarActive');

			return { isMobile }
		}
	}
</script>