<template>
	<div class="arena-feed">	
		<ArenaGallery :slides="arenaChannel" :title="arenaChannelTitle" />
	</div>
</template>

<script>
import ArenaGallery from '@/components/ArenaGallery'

export default {
	components: {
		ArenaGallery
	},
	async asyncData ({$axios, params, route}) {
		
		// are.na channel
		const stack = await $axios.$get(`https://api.are.na/v2/channels/${route.params.slug}?per=30&direction=desc`)
			.then(response => {		
				return {
					blocks: response.contents,
					title: response.title
				}
			})
			.catch(e => console.log(e, "error"));


      return {
		arenaChannel: stack.blocks,
		arenaChannelTitle: stack.title,    
      }
	},
	
}
</script>

<style lang="css">

/* .back{
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

} */


</style>