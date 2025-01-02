<template>
	<BackgroundBlob />
	<StepperComponent />
	<StepperBlob data-aos="zoom-in" data-aos-delay="600"/>
</template>



<script>
	import BackgroundBlob from '@/components/BackgroundBlob.vue';
	import StepperComponent from '@/components/StepperComponent.vue';
	import StepperBlob from '@/components/StepperBlob.vue';


	export default {
		name: "GetStartedView",
		components: {
			BackgroundBlob,
			StepperComponent,
			StepperBlob
		}
	}
</script>