<template>
	<div class="arena-feed">	
		<ArenaGallery :slides="arenaChannel"/>
	</div>
</template>

<script>
import ArenaGallery from '@/components/ArenaGallery.vue';
export default {
	components: {
		ArenaGallery,
	},
	async asyncData ({$axios, params, store, route}) {
		
		// are.na channel
		const stack = await $axios.$get(`https://api.are.na/v2/channels/${route.params.slug}?per=30&direction=desc`)
			.then(response => {		
				return response.contents
			})
			.catch(e => console.log(e, "error"));


      return {
		arenaChannel: stack,  
      }
	},
	
}
</script>

<style lang="css">

</style>