<template>
	<BackgroundBlob />
	<HomeViewStart />
</template>



<script>
	import BackgroundBlob from '@/components/BackgroundBlob.vue';
	import HomeViewStart from '@/components/HomeViewStart.vue';


	export default {
		name: "AboutView",
		components: {
			BackgroundBlob,
			HomeViewStart,
		}
	}
</script>