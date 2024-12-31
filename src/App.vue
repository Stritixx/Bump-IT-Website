<template>
	<div>
		<div class="center example-nav" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
			<vs-navbar v-model="active" not-line center-collapsed class="!bg-transparent !text-gray-100 px-[200px] pt-8">
				<template #left>
					<img src="./assets/images/logo.png" alt="Logo" class="h-[50px]"/>
					<h1 class="font-bold">Bump IT</h1>
				</template>
				<vs-navbar-item id="Home" :active="active == 'Home'">
					Home
				</vs-navbar-item>
				<vs-navbar-item id="About us" :active="active == 'About us'">
					About us
				</vs-navbar-item>
				<vs-navbar-item id="Get Started" :active="active == 'Get Started'">
					Get Started
				</vs-navbar-item>
				<vs-navbar-item id="News" :active="active == 'News'">
					News
				</vs-navbar-item>
				<template #right>
					<vs-button type="flat">YouTube</vs-button>
					<vs-button class="!ml-4">Discord</vs-button>
				</template>
			</vs-navbar>
		</div>
		<router-view>

		</router-view>
	</div>
</template>





<script>
	export default {
		name: "App",
	}
</script>