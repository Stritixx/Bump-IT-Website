<template>
	<BackgroundBlob />
	<StepperComponent />
</template>



<script>
	import BackgroundBlob from '@/components/BackgroundBlob.vue';
	import StepperComponent from '@/components/StepperComponent.vue';


	export default {
		name: "AboutView",
		components: {
			BackgroundBlob,
			StepperComponent,
		}
	}
</script>