<template>
	<BackgroundBlob/>
	<HomeViewStart />
	<SideBlobs data-aos="zoom-in" data-aos-delay="150"/>
</template>



<script>
	import BackgroundBlob from '@/components/BackgroundBlob.vue';
	import HomeViewStart from '@/components/HomeViewStart.vue';
	import SideBlobs from '@/components/SideBlobs.vue';


	export default {
		name: "HomeView",
		components: {
			BackgroundBlob,
			HomeViewStart,
			SideBlobs
		}
	}
</script>