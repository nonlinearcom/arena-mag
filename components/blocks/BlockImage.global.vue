<template>
	<picture>
		<img :src="block.image.display.url" alt="block.description">
	</picture>
</template>

<script>
	
	export default {
		name: "BlockImage",
		props: {
			block: {
				type: Object,
				default: ()=>{}
			},
		},
		methods: {
			arenalink(url) {
				return `https://are.na/block/${url}` 
			}
		},
	}
</script>

<style>
.block.Image picture {		
	width:100%;
	height: auto;
}
</style>