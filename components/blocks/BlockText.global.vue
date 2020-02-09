<template>
	<div class="text__container small-text" v-html="block.content_html"></div>
</template>

<script>
	
	export default {
		name: "BlockText",
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
.block.Text .text__container{
	max-width: 700px;
	text-align: left;
}	
</style>