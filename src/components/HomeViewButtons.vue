<template>
	<div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="500" data-aos-offset="0">
		<router-link to="/get-started">
			<vs-button type="flat" :active="active == 1" @click="active = 1" class="!text-sm">
				Get Started!
			</vs-button>
		</router-link>
	</div>

	<div data-aos="fade-up" data-aos-delay="1300" data-aos-duration="500" data-aos-offset="0">
		<vs-button type="flat" class="!ml-4 !text-sm">
			<a href="https://discord.gg/bump-it" target="_blank" rel="noopener noreferrer">
				Discord
			</a>
		</vs-button>
	</div>
</template>




<script>
	export default {
		name: "HomeViewButtons",
	}
</script>
