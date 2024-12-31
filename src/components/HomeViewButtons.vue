<template>
	<div data-aos="fade-up" data-aos-delay="1200" data-aos-duration="500">
		<vs-button type="flat" :active="active == 1" @click="active = 1" class="!text-sm">
			Get Started!
		</vs-button>
	</div>

	<div data-aos="fade-up" data-aos-delay="1300" data-aos-duration="500">
		<router-link to="/about">
			<vs-button type="flat" :active="active == 1" @click="active = 1" class="!ml-4 !text-sm">
				How it works?
			</vs-button>
		</router-link>
	</div>
</template>




<script>
	export default {
		name: "HomeViewButtons",
	}
</script>
