<template>
	<BackgroundBlob/>
	<HomeViewStart />
	<SideBlobs />
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