<template>
	<div class="arena-feed">	
		<nuxt-link class="back" to="/"></nuxt-link>
		<ArenaGallery :slides="arenaChannel"/>
	</div>
</template>

<script>
import ArenaGallery from '@/components/ArenaGallery.vue';
export default {
	components: {
		ArenaGallery,
	},
	async asyncData ({$axios, params, route}) {
		
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

.back{
	display: block;
	position: fixed;
	top:32px;
	left:32px;
	
	width: 24px;
	height: 24px;
	border:none;
	border-radius: 50%;
	padding: 0;
	margin:0;
	z-index: 20!important;
	background-color: #222;
	cursor: pointer;

}
</style>