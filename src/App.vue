<template>
	<div>
		<div class="center example-nav" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
			<vs-navbar v-model="active" not-line center-collapsed class="!bg-transparent !text-gray-100 px-[200px] max-2xl:px-[100px] max-lg:px-[50px] max-sm:px-[25px] pt-8 -z-0">
				<template #left>
					<router-link to="/" class="flex items-center">
						<img src="./assets/images/logo.png" alt="Logo" class="h-[50px]"/>
						<h1 class="font-bold">Bump IT</h1>
					</router-link>
				</template>
				<vs-navbar-item id="Home" :active="active == 'Home'" class="max-[800px]:hidden">
					<router-link to="/">
						Home
					</router-link>
				</vs-navbar-item>
				<vs-navbar-item id="About us" :active="active == 'About us'" class="max-[800px]:hidden">
					<router-link to="/about">
						How it works
					</router-link>
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
			<MobileNavbar />
		</transition>
		



		<router-view>

		</router-view>
	</div>
</template>





<script>
	import MobileNavbar from './components/MobileNavbar.vue';

	export default {
		name: "App",
		components: {
			MobileNavbar,
		}
	}
</script>












<style>
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


	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,6,19,1) 48%, rgb(2, 6, 8) 100%);

	}

	::-webkit-scrollbar-thumb {
		background: #0051ff;
		border-radius: 5px;
	}

	
</style>